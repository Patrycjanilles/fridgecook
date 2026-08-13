import {useState} from 'react'
import './HomePage.css'

import {matchRecipes} from '../utils/matchRecipes'


function HomePage() {
    const [inputValue, setInputValue] = useState('')
    const [ingredients, setIngredients] = useState<string[]>([])
    const [showResults, setShowResults] = useState(false)
    const results = showResults ? matchRecipes(ingredients) : []

    function handleAdd() {
      const trimmed = inputValue.trim()
      if (trimmed === '') return

      setIngredients([...ingredients, trimmed])
      setInputValue('')
    }

    function handleRemove(itemToRemove: string) {
      setIngredients(ingredients.filter((item) => item !== itemToRemove))

    }

    function handleSearch() {
      if (ingredients.length === 0) return

      setShowResults(true)
    }




    
    return (
        <div className="home-page">
          <h1 className="home-title">What can you cook?</h1>
          <p className="home-subtitle">Add what you have on hand. We'll find five recipes you can make right now!</p>

          <section className="ingredients-section">
            <p>Your Ingredients</p>

          <form
            className='ingredients-form'
            onSubmit={(e) => {
              e.preventDefault()
              handleAdd()
            }}
          >
            <input
              type="text"
              placeholder='Add more...'
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button type="submit">
              Add

            </button>

          </form>

            {ingredients.length === 0 ? (
  <p className="empty-hint">
    jeszcze nic nie ma 
  </p>
) : (
  <ul className="ingredient-tags">
    {ingredients.map((item) => (
      <li key={item} className="ingredient-tag">
        
        <button
          type="button"
          className="tag-remove"
          onClick={() => handleRemove(item)}
          aria-label={`Remove ${item}`}
        >
          x
        </button>
        <span>{item}</span>
      </li>
    ))}
  </ul>
)}

<button type="button" className="search-button" onClick={handleSearch}>
              Search

            </button>

            {showResults && (
              <div className='results-section'>
                <h2>Your Recipes</h2>

                {results.length === 0 ? (
                <p className='results-empty'>
                    No results. Add more ingredients. 
                   

                </p>

            ) : (
                <ul className='results-list'>
                    {results.map(({ recipe, matchPercent, missing }) => (
                        <li className='results-card' key={recipe.id}>
                            <p className='results-card-title'>
                                {recipe.name}

                            </p>
                            <p className='results-card-percent'>
                                {matchPercent}% match

                            </p>

                            {missing.length > 0 && (
                                <p className='results-card-missing'>Missing: {missing.join(', ')}

                                </p>
                            )}

                        </li>
                    ))}

                </ul>
              )}
              </div>
            )}
          </section>
        </div>
    )
}

export default HomePage;