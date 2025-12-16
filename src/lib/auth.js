import {supabase} from "./supabase";

export async function signUp(email, password, username='') {

    const {data, error}=await supabase.auth.signUp({
        email,
        password
    })

    if(error) throw error

    if(data?.user){
        const {data:sessionData}=await supabase.auth.getSession()

        if(!sessionData?.session){
            console.log('no session yet profie will be created on first sign in');
            return data
        }

        const displayName=username || email.split('@')[0]

        // create profile 
        const {data:profileData, error:profileError}= await supabase
            .from('users')
            .insert({
                id:data.user.id,
                username:displayName,
                avatar_url:null
            })
            .select()
            .single()

            if(profileError){
                console.error('profile creation error: ',profileError);
            }else{
                console.log('profile created successfully: ',profileData);
            }
    }
    return data
}

export async function signIn(email, password) {

    const {data, error}=await supabase.auth.signInWithPassword({
        email,
        password
    })

    if(error) throw error

    // check if user profile exists, if it doesn't create one

    if(data?.user){
        try {
            const profile=await getUserProfile(data.user.id)
            console.log('profile info: ',profile);

        } catch (profileError) {
            console.error('error with profile during sign in',profileError)
        }
    }
}

export async function getUserProfile(userId) {

    const {data, error}=await supabase
        .from('users')
        .select('*')
        .eq('id',userId)
        .single()

        if(error && error.code=== 'PGRST116'){
            console.error('no profile found, attempting to create one for user: ',userId)

            // of the user doesnt exist create one
            const {data:userData}=await supabase.auth.getUser()

            // get user email to drive username if needed
            const email=userData?.user.email

            const defaultUsername=email ? email.split('@')[0] : `user-${Date.now()}`

            // create profile
            const {data:newProfile, error:profileError}=await supabase
               .from('users')
               .insert({
                  id:userId,
                  username:defaultUsername,
                  avatar_url:null
               })
               .select()
               .single()

               if(profileError){
                  console.error("error profile creation: ",profileError)
               }else{
                   console.log('profile created successfully',profileData);
               }

               return newProfile
        }
        if(error){
            console.error("error fetching profile: ",error)
            throw error
        }
        console.log('existing profile');

        return data
}

export function onAuthChange(callback){
    const {data}= supabase.auth.onAuthStateChange((session,event)=>{
        callback(session?.user || null, event)
    })
    return () => data.subscription.unsubscribe()
}

export async function signOut() {
    await supabase.auth.signOut()
}