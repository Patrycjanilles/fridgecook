import { useEffect, useState } from 'react'
import  { supabase } from '../lib/supabase'
import useAuth from './useAuth'


const STORAGE_KEY = 'favorite-recipes'

export function useFavorites() {
    const{ user } = useAuth()
    const [favorites, setFavorites] = useState<string[]>([])


useEffect(() => {
    if (!user){
        const saved = localStorage.getItem(STORAGE_KEY)
        setFavorites(saved ? JSON.parse(saved) : [])
        return 
    }

        async function load() {
            const { data } = await supabase.from('favorites').select('recipe_id')
            setFavorites((data ?? []).map((row) => row.recipe_id))
        }

        load()


}, [user])

useEffect(() => {
    if (!user) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites))

    }
}, [favorites, user]) 

async function toggleFavorite(id: string) {
    if (!user) {
        setFavorites((current) => 
        current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    )
    return
    }

    if (favorites.includes(id)) {
        await supabase.from('favorites').delete().eq('recipe_id', id)
        setFavorites((current) => current.filter((item) => item !== id))

    } else {
        await supabase.from('favorites').insert({
            user_id: user.id,
            recipe_id: id,

        })
        setFavorites((current) => [...current, id])
    }
}

function isFavorite(id: string) {
    return favorites.includes(id)
}

return { favorites, toggleFavorite, isFavorite}
}