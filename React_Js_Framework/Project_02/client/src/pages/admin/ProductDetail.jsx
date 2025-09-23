import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
const ProductDetail = () => {
    const { id } = useParams();
    const products = useSelector(state => state.productReducer.products);
    const product = products.find(product => product.id === id);

    return (
        <div>
            <div
                key={product.id}
                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100 transition-all hover:shadow-2xl hover:-translate-y-1 transform duration-500"
            >
                {/* Image */}
                <div className="w-full aspect-[4/3] overflow-hidden">
                    <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col space-y-3">
                    {/* Title */}
                    <h1 className="text-lg sm:text-xl font-semibold text-gray-800 line-clamp-2">
                        {product.title}
                    </h1>

                    {/* Description */}
                    <p className="text-sm text-gray-500 line-clamp-3">{product.description}</p>

                    {/* Category */}
                    <h2 className="text-xs sm:text-sm text-gray-400 uppercase tracking-wide">
                        {product.category}
                    </h2>

                    {/* Price */}
                    <p className="text-lg font-bold text-yellow-600">${product.price}</p>

                    {/* Optional Button */}
                    <button className="mt-2 px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-white font-medium rounded-xl shadow-md hover:shadow-lg transition-all">
                        View Details
                    </button>
                </div>
            </div>

        </div>
    )
}

export default ProductDetail