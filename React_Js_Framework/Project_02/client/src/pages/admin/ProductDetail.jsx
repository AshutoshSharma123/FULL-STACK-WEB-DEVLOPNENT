
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
    const navigate = useNavigate()


    const products = useSelector((state) => state.productReducer.products);
    const user = useSelector((state) => state.userReducer.user);
    console.log(products, user);



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
                    <p className="text-yellow-600 font-bold">Rs.{product.price}</p>
                </div>
            </div>

            {/* Update Form */}


            {user && user.isAdmin &&
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
            }
        </div>
    );
};

export default ProductDetail;
