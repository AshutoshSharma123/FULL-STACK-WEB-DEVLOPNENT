import { useContext } from 'react'
import RecipeCard from '../components/RecipeCard.jsx'

import { recipeContext } from '../context/RecipeContext'
const Recepies = () => {


    const { data } = useContext(recipeContext)

    const renderRecipes = data.map(recipe => (
        <RecipeCard key={recipe.id} recipe={recipe} />
    ))

    return (
        <div>{renderRecipes}</div>
    )
}

export default Recepies