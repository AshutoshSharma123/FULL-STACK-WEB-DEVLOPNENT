import React from 'react'
import { Link } from 'react-router-dom'

const RecipeCard = (props) => {
    const { id, title, image, desc } = props.recipe

    console.log(image);

    return (
        <Link to={`/recipe/${id}`}>
            <h2>{title}</h2>

            <img src={image} alt=" img" className='w-full h-48 object-cover' />
            <p>{desc.slice(0, 100)}...{" "}<small className='text-[#D3FD50] text-sm text-thinner'>more</small></p>
        </Link>
    )
}

export default RecipeCard