import { Link} from 'react-router-dom'
import useRecipes from '../hooks/useRecipes'
import { useFavorites } from '../hooks/useFavorites'
import './Favorites.css'

function Favorites() {
    const { favorites } = useFavorites()
    const { recipes, loading } = useRecipes()
    const savedRecipes = recipes.filter((recipe) => favorites.includes(recipe.id)
)

    if (loading) {
        return (
            <div className='favorites'>
                <p>Loading...</p>
            </div>
        )
    }

return (
    <div className='favorites'>
        <h1 className='favorites-title'>Favorites</h1>
        <p className='favorites-subtitle'>Recipes you saved for later</p>

        {savedRecipes.length === 0 ? (
            <p className='favorites-empty'>No favorites yet.</p>
        ) : (
            <ul className='favorites-list'>
                {savedRecipes.map((recipe) => (
                    <li key={recipe.id} className='favorites-card'>
                        <Link to={`/recipes/${recipe.id}`}>{recipe.name}</Link>
                        <p>{recipe.timeMinutes} min</p>

                    </li>
                ))}

            </ul>
        )}
        

    </div>
)
}

export default Favorites