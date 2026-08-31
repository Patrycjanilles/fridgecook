 

import { Link, useParams } from "react-router-dom"
import useRecipes from '../hooks/useRecipes'
import './RecipePage.css';
import { useFavorites } from '../hooks/useFavorites' 

function RecipePage() { 
    const { id } = useParams()
    const { recipes, loading } = useRecipes()
    const recipe = recipes.find((item) => item.id === id)
    const { isFavorite, toggleFavorite } = useFavorites() 

    if (loading) {
      return (
        <div className="recipe">
          <p>Loading...</p>

        </div>
      )
    }

    if (!recipe) {
        return (
            <div className="recipe">
                <p>Recipe not found</p>
                <Link to="/recipes">Back to CookBook</Link>
            </div>
        )
    }


return (
    <div className="recipe">

        <h1 className="recipe-title">{recipe.name}</h1>
       <div className="recipe-info">
       <p className="recipe-tags">{recipe.tags.join(', ')}</p>
       <p className="recipe-time">{recipe.timeMinutes} min</p>
       </div>
       <p className="recipe-description">{recipe.description}</p>
       
        <h2 className="recipe-ingredients-title">Ingredients</h2>
      <ul className="recipe-ingredients">
        {recipe.ingredients.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <h2 className="recipe-ingredients-title">Steps</h2>
      <ol className="recipe-steps">
        {recipe.steps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>

      <button type='button' className="recipe-save"
      onClick={() => toggleFavorite(recipe.id)}>

        {isFavorite(recipe.id) ? 'Saved' : 'Save to favorites'}

      </button>
        
        <Link to="/recipes" className="recipe-back">Back</Link>

    </div>
)
}

export default RecipePage;