import { createContext, useContext, useEffect, useState } from "react";
import { getUserProfile, onAuthChange, signOut } from "../lib/auth";


export const AuthContext=createContext(null)

export function AuthProvider({children}){
    const [user, setUser]=useState(null)
    const [profile, setProfile]=useState(null)
    const [isLoading, setIsLoading]=useState(true)

    useEffect(()=>{
        const cleanUp=onAuthChange(async (event, session)=> {
            const user=session?.user || null
            setUser(user)
             if(user){
                try {
                    const userProfile=await getUserProfile(user.id)
                    setProfile(userProfile)
                } catch (error) {
                    console.error('error fetching user profile: ',error)
                }
             }else{
                setProfile(null)
             }
             setIsLoading(false)
        })
        return cleanUp
    },[])

    const logout=async()=>{
        try {
            await signOut()
        } catch (error) {
            console.error('error signing out: ',error)
        }
    }


    const values={
        user,
        profile,
        isLoading,
        isLoggedIn: !!user,
        logout
    }

    return(
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth(){
    const context=useContext(AuthContext)

    if(context === null){
        throw new Error('useAuth must be used with in an authprovider')
    }
    return context
}

