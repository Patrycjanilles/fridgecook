import { useState } from 'react'
import type { User } from '@supabase/supabase-js'
import { supabase } from '../lib/supabase'
import { useEffect } from 'react'

function useAuth() {
    const [user, setUser] = useState<User | null>(null)

    useEffect(() => {
        supabase.auth.getSession().then(({ data }) => {
            setUser(data.session?.user ?? null)
        })

        const { data } = supabase.auth.onAuthStateChange((_event, session) => {
            setUser(session?.user ?? null)

        })

        return () => {
            data.subscription.unsubscribe()
        }
    }, [])
    async function signOut() {
        await supabase.auth.signOut()

        
    }
    return { user, signOut }
}
export default useAuth