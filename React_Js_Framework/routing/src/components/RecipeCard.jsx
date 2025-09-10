import { Link } from 'react-router-dom'

const RecipeCard = (props) => {
    const { id, title, image, desc } = props.recipe
    console.log(props);


    return (
        <div className="w-[50%] m-5 p-5 border border-gray-400 rounded-md hover:scale-105 duration-300 flex flex-col gap-3 justify-center items-center">
            <Link to={`/recepies/details/${id}`}>
                <h2>{title}</h2>

                <img src={image} alt=" img" className='w-23vw h-[20rem] rounded-md object-cover' />
                <p>{desc.slice(0, 100)}...{" "}<small className='text-[#D3FD50] text-sm text-thinner'>more</small></p>
            </Link>
        </div>

    )
}

export default RecipeCard