import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'
import type { Recipe } from '../data/recipes'

function useRecipes() {
    const [recipes, setRecipes] = useState<Recipe[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function load() {
            const { data, error} = await supabase.from('recipes').select('*')

            if (error) {
                setLoading(false)
                return
            }

            const mapped = (data ?? []).map((row) => ({
                id: row.id,
                name: row.name,
                ingredients: row.ingredients,
                timeMinutes: row.time_minutes,
                steps: row.steps,
                tags: row.tags,
                description: row.description,
            }))

            setRecipes(mapped)
            setLoading(false)
        }
        load()
    }, [])
    return { recipes, loading }
}

export default useRecipes