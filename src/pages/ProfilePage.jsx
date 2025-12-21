import React, { useEffect, useState } from "react"
import {
  User,
  Mail,
  Camera,
  Lock,
  Save,
  EyeIcon,
  EyeClosed
} from "lucide-react"
import { useAuth } from "../contexts/AuthContext"
import { getUserProfile } from "../lib/auth"
import toast from "react-hot-toast"
import { supabase } from "../lib/supabase"

const ProfilePage= () => {

  const { profile }=useAuth()
  const [isProfileMode, setIsProfileMode] = useState(true)
  const [username, setUsername] = useState("jamal")
  const [loading, setLoading] = useState(false);
  const [avatar, setAvatar] = useState(null);
  const [avatarUrl, setAvatarUrl] = useState(null)

  const [currentPassword, setCurrentPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [showCurrentPassword, setShowCurrentPassword] = useState(false)
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)



  const { user }=useAuth()

   useEffect(() => {

        if (user) {
            fetchUserProfile()
        }

    }, [user])

    const fetchUserProfile = async () => {
        try {
            setLoading(true);
            const { username, avatar_url } = await getUserProfile(user.id);
            if (username) {
                setUsername(username);
                setAvatarUrl(avatar_url)
            }
            return
        } catch (error) {
            console.log("error getting usr profile", error)
        } finally {
            setLoading(false)
        }
    }


    const handleAvatarChange = (e) => {

        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];

            if (file.size > 2 * 1024 * 1024) {
                toast.error("heyyyy file size is too large", { position: "top-right" })
                return
            }

            setAvatar(file)

            const previewURL = URL.createObjectURL(file)
            setAvatarUrl(previewURL)

        }

    }

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            setLoading(true);

            let updates = { username }

            // if file selected upload first
            if (avatar) {

                const fileExt = avatar.name.split(".").pop();
                const fileName = `${user.id}-${Math.random().toString(36).substring(2)}`;
                const filePath = `avatars/${fileName}.${fileExt}`;

                const { error: uploadError } = await supabase.storage.from("avatars").upload(filePath, avatar);

                if (uploadError) throw uploadError

                // get the uploaded url
                const { data } = supabase.storage.from("avatars")
                    .getPublicUrl(filePath);

                updates = {
                    ...updates,
                    avatar_url: data.publicUrl
                }

                setAvatarUrl(data.publicUrl)
            }

            console.log("updates to be applied")

            const { error, data } = await supabase

                .from('users')
                .update(updates)
                .eq('id', user.id)
                .select('username, avatar_url')
                .single();

            if (error) throw error

            if (data) {
                setAvatarUrl(data.avatar_url)
                setUsername(data.username)
            }

            toast.success("Profile updated successfully")

        } catch (error) {
            toast.error(error.message || "error updating user profile")
        }finally{
            setLoading(false)
        }
    }

    const handleChangePassword = async (e) => {
  e.preventDefault()

  if (!currentPassword || !newPassword || !confirmPassword) {
    toast.error("All fields are required")
    return
  }

  if (newPassword.length < 6) {
    toast.error("Password must be at least 6 characters")
    return
  }

  if (newPassword !== confirmPassword) {
    toast.error("Passwords do not match")
    return
  }

  try {
    setLoading(true)

    const { error: signInError } = await supabase.auth.signInWithPassword({
      email: user.email,
      password: currentPassword,
    })

    if (signInError) {
      throw new Error("Current password is incorrect")
    }

    const { error: updateError } = await supabase.auth.updateUser({
      password: newPassword,
    })

    if (updateError) throw updateError

    toast.success("Password updated successfully 🎉")

    setCurrentPassword("")
    setNewPassword("")
    setConfirmPassword("")
  } catch (error) {
    toast.error(error.message || "Failed to update password")
  } finally {
    setLoading(false)
  }
    }



  return (
    <div className="grid w-full place-items-center py-10">
      <div className="max-w-107 w-full bg-white-97 dark:bg-gray-900 backdrop-blur-xl border border-gray-200 dark:border-gray-700 p-8 rounded-2xl shadow-md">

        <div className="relative flex h-10 mb-6">
          <button
            onClick={() => setIsProfileMode(true)}
            className={`w-1/2 font-medium transition-colors dark:text-gray-200 text-gray-900`}
          >
            Profile
          </button>

          <button
            onClick={() => setIsProfileMode(false)}
            className={`w-1/2 font-medium transition-colors dark:text-gray-200 text-gray-900`}
          >
            Change Password
          </button>

          <div
            className={`absolute bottom-0 h-0.5 w-1/2 bg-gray-900 dark:bg-gray-200 transition-all duration-300
              ${isProfileMode ? "left-0" : "left-1/2"}`}
          />
        </div>


        {/* Profile mode */}
        {isProfileMode && (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col items-center space-y-4 bg py-3 rounded-xl justify-center">
              <div className="relative group">
                <div className="w-18 h-18 rounded-full overflow-hidden border-4 border-gray-200 shadow-md">
                  {avatarUrl ? (

                  <img
                    src={
                      avatarUrl
                    }
                    alt="profile"
                    className="w-full h-full object-cover"
                  />
                  ):(
                    <span className='text-white font-bold text-sm'>{profile?.username[0].toUpperCase()}</span>
                  )}
                </div>

                <label
                  htmlFor="avatar-upload"
                  className="absolute bottom-0 right-0 bg-cyan-50 p-1 rounded-full shadow-md cursor-pointer
                    hover:scale-110 transition"
                >
                  <Camera size={16} className="text-cyan-400" />
                  <input 
                    type="file" 
                    id="avatar-upload"
                    accept="image/*"
                    onChange={handleAvatarChange}
                    hidden 
                   />
                </label>
              </div>
              <div>
                <h1 className="text-lg text-gray-200 tracking-wider">{username}</h1>
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-200">
                Username
              </label>
              <div className="relative mt-1">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-200" size={18} />
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="your name"
                  className="w-full pl-10 pr-3 dark:bg-gray-800/90 py-2 border border-gray-300 dark:border-gray-700 rounded-md
                            focus:outline-none focus:border-cyan-500 dark:text-gray-200"
                />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-200">
                Email
              </label>
              <div className="relative mt-1">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-200" size={18} />
                <input
                  type="email"
                  value={user?.email || "user@email.com"}
                  placeholder="email"
                  className="w-full pl-10 pr-3 py-2 dark:bg-gray-800/90 bg-gray-100 border border-gray-300 dark:border-gray-700 rounded-md dark:text-gray-200"
                  disabled
                />
              </div>
            </div>
            <button disabled={loading} className="w-full bg flex items-center justify-center gap-2 p-2 text-white/97 rounded-md">
              <Save size={18} className=""/>
              <span>{loading ? 'Saving...': 'Save Changes'}</span>
            </button>
          </form>
        )}

        {/* Change password mode */}
        {!isProfileMode && (
          <form onSubmit={handleChangePassword} className="space-y-4">

            <div>
              <label className="text-sm font-medium dark:text-gray-200">Current Password</label>
              <div className="relative mt-1">
                <Lock size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-200" />
                <input
                  type={showCurrentPassword ? 'text': "password"}
                  value={currentPassword}
                  onChange={e => setCurrentPassword(e.target.value)}
                  className="w-full pl-10 pr-3 dark:bg-gray-800/90 py-2 border border-gray-300 dark:border-gray-700 rounded-md
                    focus:outline-none focus:border-cyan-500 dark:text-gray-200"
                />
                <button 
                   type="button" 
                   onClick={()=> setShowCurrentPassword(!showCurrentPassword)} 
                   className="absolute right-3 top-1/2 -translate-y-1/2 dark:text-gray-200"
                >
                    {showCurrentPassword ? <EyeIcon size={18}/>: <EyeClosed size={18}/>}
                </button>
              </div>
            </div>

            <div>
              <label className="text-sm font-medium dark:text-gray-200">New Password</label>
              <div className="relative mt-1">
                <Lock size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-200" />
                <input
                  type={showNewPassword ? 'text': "password"}
                  value={newPassword}
                  onChange={e => setNewPassword(e.target.value)}
                  className="w-full pl-10 pr-3 dark:bg-gray-800/90 py-2 border border-gray-300 dark:border-gray-700 rounded-md
                    focus:outline-none focus:border-cyan-500 dark:text-gray-200"
                />
                <button 
                   type="button" 
                   onClick={()=> setShowNewPassword(!showNewPassword)} 
                   className="absolute right-3 top-1/2 -translate-y-1/2 dark:text-gray-200"
                >
                    {showNewPassword ? <EyeIcon size={18}/>: <EyeClosed size={18}/>}
                </button>
              </div>
            </div>

            <div>
              <label className="text-sm font-medium dark:text-gray-200">Confirm Password</label>
              <div className="relative mt-1">
                <Lock size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-200" />
                <input
                  type={showConfirmPassword ? 'text': "password"}
                  value={confirmPassword}
                  onChange={e => setConfirmPassword(e.target.value)}
                  className="w-full pl-10 pr-3 dark:bg-gray-800/90 py-2 border border-gray-300 dark:border-gray-700 rounded-md
                    focus:outline-none focus:border-cyan-500 dark:text-gray-200"
                />
                <button 
                   type="button" 
                   onClick={()=> setShowConfirmPassword(!showConfirmPassword)} 
                   className="absolute right-3 top-1/2 -translate-y-1/2 dark:text-gray-200"
                >
                    {showConfirmPassword ? <EyeIcon size={18}/>: <EyeClosed size={18}/>}
                </button>
              </div>
            </div>

            <button className="w-full bg flex items-center justify-center gap-2 p-2 text-white/97 rounded-md">
              <Save size={18} />
              {loading ? 'Updating...': 'Update Password'}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}

export default ProfilePage
