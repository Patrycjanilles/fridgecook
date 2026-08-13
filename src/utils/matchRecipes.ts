import { recipes,type Recipe } from '../data/recipes'

export type MatchedRecipe = {
    recipe: Recipe
    matchPercent: number
    missing: string[]
}

function normalize(text: string) {
    return text.trim().toLowerCase()
}

export function matchRecipes(userIngredients: string[]): MatchedRecipe[] {
    const have = userIngredients.map(normalize)

    const matched = recipes.map((recipe) => {
        const needed = recipe.ingredients.map(normalize)

        const missing = needed.filter((item) => !have.includes(item))
        const haveCount = needed.length - missing.length
        const matchPercent =
            needed.length === 0
            ? 0
            : Math.round((haveCount / needed.length) * 100)

            return {
                recipe,
                matchPercent,
                missing,
            }
    })

    return matched
      .filter((item) => item.matchPercent > 0)
      .sort((a,b) => b.matchPercent - a.matchPercent)
}