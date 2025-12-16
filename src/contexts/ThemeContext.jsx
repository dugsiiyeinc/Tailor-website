import { createContext, useContext, useEffect, useState } from "react";


const ThemeContext=createContext()

export function ThemeProvider({children}){
    const [theme, setTheme]=useState(()=>{
        if(typeof window !== 'undefined'){
            return localStorage.getItem("theme") || 'light'
        }
        return 'light'
    })

    useEffect(()=>{
        if(typeof window !== 'undefined'){
            localStorage.setItem('theme',theme)

            const root=document.documentElement;

            // remove all themes cleanly
            root.classList.remove('dark')

            // now add selected theme
            if(theme === 'dark'){
                root.classList.add('dark')
            }

        }
    },[theme])

    return (
        <ThemeContext.Provider value={{theme,setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme(){
    const context=useContext(ThemeContext)

    if(!context){
        throw new Error('themecontext must be used with in themeProvider')
    }
    return context
}