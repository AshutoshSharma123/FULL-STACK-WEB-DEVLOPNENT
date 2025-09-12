// SingleRecipe.jsx
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { recipeContext } from "../context/RecipeContext";
import { useForm } from 'react-hook-form'
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "../utils/axios";
const SingleRecipe = () => {

  const navigate = useNavigate();

  const { id } = useParams();   // get :id from the URL


  // find recipe by id
  const { data, setData } = useContext(recipeContext)

  const recipe = data.find(r => String(r.id) === id);

  if (!recipe) return <p>Recipe not found</p>;

  const { title, image, desc } = recipe;

  useEffect(() => {
    console.log("SingleRecipe mounted");


    return () => {
      // cleanup code
      console.log("SingleRecipe unmounted");
    }
  }, []) // square brackets to avoid infinite loop of useEffect to be called for unnecessary renders
  // empty dependency array means this effect runs only once after the initial render and only renders the component .


  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      title: recipe.title,
      image: recipe.image,
      category: recipe.category,
      desc: recipe.desc
    }
  });


  const submitHandler = (recipe) => {
    const recipeIndex = data.findIndex(r => r.id === id);
    console.log(recipeIndex);

    const copyrecipe = [...data]
    copyrecipe[recipeIndex] = { ...copyrecipe[recipeIndex], ...recipe }
    setData(copyrecipe)
    toast.success('recipe updated successfully !')
    navigate('/recepies')

  }


  const deleteHandler = () => {
    const filteredRecipe = data.filter(r => r.id !== id)
    setData(filteredRecipe)
    toast.success('recipe deleted successfully !')
    navigate('/recepies')
  }

  return (
    <div className="w-full flex items-center gap-5 ">

      <div className="w-1/2">      <h2 className="text-4xl text-center text-thin">{title}</h2>
        <img
          src={image}
          alt={title}
          className="w-23vw h-[50vh] rounded-md object-cover"
        />
      </div>
      <div className="w-1/2"> <p>{desc}</p></div>

      <form onSubmit={handleSubmit(submitHandler)} className='flex w-1/2
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
          {...register('desc')}
          placeholder='Recipe Description'
          className='border-b outline-none bg-transparent  p-2 text-lg h-40'>

        </textarea>
        <small className='text-red-500 mt-[-3]'>Error</small>

        <div className="flex gap-3">
          <button className='mt-5 p-2 text-thin w-1/3 rounded-md bg-zinc-900  block'>Update Recipe</button>
          <button className='mt-5 p-2 text-thin w-1/3 rounded-md bg-red-900  block'
            onClick={deleteHandler}
          >Delete Recipe</button>
        </div>


      </form>


    </div>
  );
};

export default SingleRecipe;
