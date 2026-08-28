import { useState } from 'react';
import useRecipes from '../hooks/useRecipes'
import clockIcon from '../assets/lucide_clock.svg'
// import trashIcon from '../assets/tabler_trash.svg'
import './CookBook.css';
import { Link } from 'react-router-dom'

function CookBook() {

    const [search, setSearch] = useState('')
    const {recipes, loading } = useRecipes()

    const filtered = recipes.filter((recipe) => 
    recipe.name.toLowerCase().includes(search.toLowerCase())
    )

    if (loading) {
        return (
            <div className='cookbook'>
                <p>Loading recipes...</p>

            </div>
        )
    }
    return (
        <div className="cookbook">
            <h1 className='cookbook-title'>CookBook</h1>
            <p className='cookbook-subtitle'>Browse all recipes in your cookbook</p>

            <input type="text" className='search-input' placeholder='Search recipes...'
            value={search} onChange={(e) => setSearch(e.target.value)}
             />

             <p className='cookbook-count'>
                {filtered.length} recipes
             </p>

            {filtered.length === 0 ? (
                <p className='cookbook-empty'>No recipes match your search.</p>
            ) : (
                <ul className='cookbook-grid'>
               {filtered.map((recipe) => (
                <li key={recipe.id} className='cookbook-card'>
                    <div className='cookbook-card-content'>
                    <Link to={`/recipes/${recipe.id}`} className="cookbook-card-title">
                        {recipe.name}
                        </Link>

                        <div className='cookbook-card-info'>
                        <span className='cookbook-card-tag'>{recipe.tags[0]}</span>
                            <span className='cookbook-card-time'>
                                <img src={clockIcon} alt="clock icon" className='cookbook-card-clock' />
                                {recipe.timeMinutes} min</span>

                           
                        </div>
                    </div>
{/* 
                    <button 
                        type='button'
                        className='cookbook-card-delete'
                        aria-label={`Delete ${recipe.name}`}
                        >
                            <img src={trashIcon} alt="trash icon" className='cookbook-card-icon' />

                    </button>
*/}
                    

                </li>
               ))}

            </ul>
            
            )}

            
        </div>
    )
}

export default CookBook;