import { useEffect, useState } from 'react';

const STORAGE_KEY = 'favorite-recipes'

export function useFavorites() {
    const [favorites, setFavorites] = useState<string[]>(() => {
        const saved = localStorage.getItem(STORAGE_KEY)
        return saved ? JSON.parse(saved) : []
    })


useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites))
}, [favorites])

function toggleFavorite(id: string) {
    setFavorites((current) =>
    current.includes(id) 
    ? current.filter((item) => item !== id)
    : [...current,id]
)
}

function isFavorite(id: string) {
    return favorites.includes(id)
}

return { favorites, toggleFavorite, isFavorite }
}