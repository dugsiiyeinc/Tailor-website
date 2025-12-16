import { createClient } from "@supabase/supabase-js";

const supabaseUrl=import.meta.env.VITE_SUPABASE_URL;
const supabaseAnnonkey=import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase=createClient(supabaseUrl,supabaseAnnonkey,{
    auth:{
        autoRefreshToken:true,
        persistSession:true
    },
    realtime:{
        params:{
            eventsPerSecond:10
        }
    }
})