// import { useSelector } from 'react-redux'
// import { useParams } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom'
// import { useForm } from 'react-hook-form'
// import { useDispatch } from 'react-redux'
// import { asyncupdateProduct } from '../../store/actions/productAction'


// const ProductDetail = () => {
//     const { id } = useParams();
//     const products = useSelector(state => state.productReducer.products);
//     const product = products.find(product => product.id === id);


//     const { register, handleSubmit } = useForm({
//         defaultValues: product ? {
//             image: product.image,
//             title: product.title,
//             price: product.price,
//             description: product.description,
//             category: product.category
//         } : {}
//     });

//     const dispatch = useDispatch();
//     const navigate = useNavigate();


//     const updateProductHandler = (id, product) => {
//         dispatch(asyncupdateProduct(id, product));

//     }


//     return product ? (

//         <div className="h-screen bg-gray-700">
//             <div className="w-full flex flex-col sm:flex-row justify-center gap-6 bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 transition-all hover:shadow-2xl hover:-translate-y-1 transform duration-500">

//                 {/* Image */}
//                 <div className="flex-shrink-0 w-full sm:w-1/3 aspect-[4/3] overflow-hidden">
//                     <img
//                         src={product.image}
//                         alt={product.title}
//                         className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
//                     />
//                 </div>

//                 {/* Content */}
//                 <div
//                     key={product.id}
//                     className="flex-1 flex flex-col bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 transition-all hover:shadow-2xl hover:-translate-y-1 transform duration-500"
//                 >
//                     <div className="p-5 flex flex-col space-y-3">
//                         <h1 className="text-lg sm:text-xl font-semibold text-gray-800 line-clamp-2">
//                             {product.title}
//                         </h1>

//                         <p className="text-sm text-gray-500 line-clamp-3">{product.description}</p>

//                         <h2 className="text-xs sm:text-sm text-gray-400 uppercase tracking-wide">
//                             {product.category}
//                         </h2>

//                         <p className="text-lg font-bold text-yellow-600">${product.price}</p>

//                         <button className=" mt-2 px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-white font-medium rounded-xl shadow-md hover:shadow-lg transition-all">
//                             Add to Cart
//                         </button>

//                         <div className="w-full flex justify-center gap-3">
//                             <button className="mt-2 px-4 py-2 bg-gradient-to-r from-green-400 to-blue-400 hover:from-yellow-500 hover:to-orange-500 text-white font-medium rounded-xl shadow-md hover:shadow-lg transition-all">
//                                 Update
//                             </button>
//                             <button className="mt-2 px-4 py-2 bg-gradient-to-r from-red-400 to-orange-900 hover:from-yellow-500 hover:to-orange-500 text-white font-medium rounded-xl shadow-md hover:shadow-lg transition-all">
//                                 Delete
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="bg-white rounded-2xl shadow-md overflow-hidden text-black flex justify-center items-center">
//                 <form
//                     onSubmit={handleSubmit(updateProductHandler)}
//                     className='flex flex-col w-5/6 justify-center items-center  rounded-md p-4' action="">
//                     <input
//                         {...register('title', { required: true })}
//                         type="text" placeholder='Title'
//                         className='outline-none border-b p-2 text-xl' />

//                     <input
//                         {...register('price', { required: true })}
//                         type="text" placeholder='Price'

//                         className='outline-none border-b p-2 text-xl' />


//                     <input
//                         {...register('image', { required: true })}
//                         type="url" placeholder='paste image url address'
//                         className='outline-none border-b p-2 text-xl' />


//                     <input
//                         {...register('category', { required: true })}
//                         type="text" placeholder='Category'
//                         className='outline-none border-b p-2 text-xl' />
//                     {/* <input
//                 {...register('Description', { required: true })}
//                 type="text" placeholder='Product Info'
//                 className='outline-none border-b p-2 text-xl' /> */}




//                     <textarea
//                         {...register('description', { required: true })}
//                         placeholder='Description'
//                         className='outline-none border-b p-2 text-xl'
//                     />
//                     <button type="submit"
//                         className='bg-blue-600 text-white w-4/7 p-1 mt-4 text-xl font-semibold from-blue-600 to-blue-900 hover:bg-blue-700 transition-all duration-300'
//                     >Update Product</button>





//                 </form>
//             </div>



//         </div>



//     ) : "Loading..."
// }

// export default ProductDetail



import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { asyncupdateProduct } from '../../store/actions/productAction';

import { asyncdeleteProduct } from '../../store/actions/productAction'

const ProductDetail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const products = useSelector(state => state.productReducer.products);
    const navigate = useNavigate()
    const product = products.find(p => p.id === id);

    const { register, handleSubmit, reset } = useForm();

    // Fill the form when product is loaded
    useEffect(() => {
        if (product) {
            reset({
                title: product.title,
                price: product.price,
                image: product.image,
                category: product.category,
                description: product.description
            });
        }
    }, [product, reset]);

    const updateProductHandler = (formData) => {
        dispatch(asyncupdateProduct(id, formData));
    };

    if (!product) return <div>Loading...</div>;




    const deleteHandler = (id) => {
        dispatch(asyncdeleteProduct(id))
        navigate("/products")
    }

    return (
        <div className="h-screen bg-gray-700 p-4">
            <div className="w-full flex flex-col sm:flex-row justify-center gap-6 bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                {/* Product Image */}
                <div className="flex-shrink-0 w-full sm:w-1/3 aspect-[4/3] overflow-hidden">
                    <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Product Info */}
                <div className="flex-1 p-5">
                    <h1 className="text-xl font-semibold">{product.title}</h1>
                    <p className="text-gray-500">{product.description}</p>
                    <h2 className="text-gray-400 uppercase">{product.category}</h2>
                    <p className="text-yellow-600 font-bold">${product.price}</p>
                </div>
            </div>

            {/* Update Form */}
            <div className="bg-white rounded-2xl text-black shadow-md p-4 mt-6">
                <form onSubmit={handleSubmit(updateProductHandler)} className="flex flex-col gap-3">
                    <input {...register('title', { required: true })} placeholder="Title" className="border-b p-2" />
                    <input {...register('price', { required: true })} placeholder="Price" className="border-b p-2" />
                    <input {...register('image', { required: true })} placeholder="Image URL" className="border-b p-2" />
                    <input {...register('category', { required: true })} placeholder="Category" className="border-b p-2" />
                    <textarea {...register('description', { required: true })} placeholder="Description" className="border-b p-2" />
                    <button type="submit" className="from-blue-600 to-blue-900 bg-gradient-to-r text-white p-2 mt-2 rounded">Update Product</button>




                </form>
                <button onClick={() => { deleteHandler(product.id) }} className="from-red-600 to-red-900 bg-gradient-to-r text-white p-2 mt-2 rounded">Delete Product</button>
            </div>
        </div>
    );
};

export default ProductDetail;
