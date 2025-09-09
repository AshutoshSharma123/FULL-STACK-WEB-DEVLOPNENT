import { useForm } from 'react-hook-form'
import { nanoid } from 'nanoid'
import { useContext } from 'react'
import { recipeContext as RecipeContext } from '../context/RecipeContext'
const Create = () => {

    const { data, setData } = useContext(RecipeContext)

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const submitHandler = (recipe) => {
        recipe.id = nanoid()
        console.log(data);

        const copyData = [...data]
        copyData.push(recipe)
        setData(copyData)
        console.log(copyData);
        reset()
    }


    return (
        <form onSubmit={handleSubmit(submitHandler)} className='flex w-1/3
         flex-col gap-1'>
            <input
                {...register('title')}
                type="text"
                placeholder='Recipe Name'
                className='border-b outline-none bg-transparent  p-2 text-lg'
            />
            <small className='text-red-500 mt-[-30]'>{errors.title?.message}</small>
            <input
                {...register('image')}
                type="url"
                placeholder='Recipe Image'
                className='border-b outline-none bg-transparent w-1/3  p-2 text-lg'
            />
            <small className='text-red-500 mt-[-3]'>Error</small>


            <select name="" id=""
                {...register('category')}
                className='rounded-md w-[20vw] border-b outline-none bg-white  p-2 text-lg text-black mb-2'
            >
                <option value="cat_1">Indian</option>
                <option value="cat_2">Continental</option>
                <option value="cat_3">Chinese</option>

            </select>


            <textarea
                {...register('description')}
                placeholder='Recipe Description'
                className='border-b outline-none bg-transparent  p-2 text-lg h-40'>

            </textarea>
            <small className='text-red-500 mt-[-3]'>Error</small>


            <button className='mt-5 p-2 text-thin w-1/3 rounded-md bg-zinc-900  block'>Save Recipe</button>

        </form>
    )
}

export default Create