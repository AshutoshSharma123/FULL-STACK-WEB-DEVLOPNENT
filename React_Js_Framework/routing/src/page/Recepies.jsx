import { useContext } from 'react'

import { recipeContext } from '../context/RecipeContext'
const Recepies = () => {


    const { data } = useContext(recipeContext)

    const renderRecipes = data.map(recipe => (
        <div key={recipe.id}>
            <h2>{recipe.title}</h2>
        </div>
    ))

    return (
        <div>{renderRecipes}</div>
    )
}

export default Recepies