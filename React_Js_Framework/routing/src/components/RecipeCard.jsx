import { Link } from 'react-router-dom'

const RecipeCard = (props) => {
    const { id, title, image, desc, category, tag } = props.recipe
    console.log(props);


    return (
        // <div className="flex flex-col relative  shadow-lg p-4  w-[22vw] h-[32vh]  bg-red-700 rounded-md hover:scale-105 duration-300">
        //     <Link to={`/recepies/details/${id}`}>
        //         {/* <h2>{title}</h2> */}

        //         <img src={image} alt=" img" className='w-full h-full     rounded-md object-cover' />
        //         {/* <p>{desc.slice(0, 100)}...{" "}<small className='text-[#D3FD50] text-sm text-thinner'>more</small></p> */}
        //     </Link>
        // </div>


        <div className="w-72 h-110 bg-white rounded-2xl shadow-md overflow-hidden">
            {/* Price */}
            <div className="flex absolute justify-end  rounded-full z-10 p-3 bg-white">
                <span
                    className={`font-bold text-lg ${tag.toLowerCase() === "veg"
                        ? "text-green-700"
                        : "text-red-700"
                        }`}
                >
                    {tag}
                </span>
            </div>

            {/* Image */}
            <div className="p-2 w-full h-2/3 overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover rounded-xl shadow-sm"
                />
            </div>

            {/* Delivery Info */}
            <div className="px-4 mt-3 flex justify-between items-center gap-2">
                <p className="text-xs text-green-700 bg-green-100 w-fit px-3 py-1 rounded-full">
                    {title}
                </p>
                {/* Tags */}
                <div className="flex flex-wrap gap-2 px-4 ">
                    <span className="text-xs px-3 py-1 bg-gray-200 rounded-full">{category}</span>

                </div>
            </div>




            {/* Title + Button */}
            <div className="flex flex-col justify-between items-center px-4 mt-3">
                <h2 className="font-semibold text-xl font-[font3] text-gray-800">{title}</h2>

                <Link to={`/recepies/details/${id}`} className="text-sm text-black  flex items-center gap-1">

                    <p>{desc.slice(0, 78)}...{" "}<small className='text-blue-500 text-sm text-thinner'> <span>↗</span></small></p>
                </Link>



            </div>






        </div>


    )
}

export default RecipeCard