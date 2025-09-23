
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Products = () => {
    const data = useSelector((state) => state.productReducer.products);

    if (!data || data.length === 0) return "Loading....";

    return (
        <div className="w-full flex flex-wrap justify-center gap-6 px-4">
            {data.map((product) => (
                <div
                    key={product.id}
                    className="w-4/5 sm:w-1/2 md:w-1/3 lg:w-1/4 flex flex-col bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl hover:scale-[1.02] transition-all duration-300 ease-in-out"
                >
                    {/* Image */}
                    <div className="w-full aspect-[4/3] overflow-hidden">
                        <img
                            src={product.image}
                            alt={product.title}
                            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                        />
                    </div>

                    {/* Content */}
                    <div className="p-4 sm:p-6 space-y-2">
                        <h2 className="text-base sm:text-lg font-bold text-gray-800 line-clamp-2">
                            {product.title}
                        </h2>
                        <p className="text-xs sm:text-sm text-gray-600 line-clamp-2">
                            {product.description.slice(0, 100)}...
                        </p>    <Link className="p-4 text-blue-600 text-center" to={`/product/${product.id}`}>more details</Link>
                        <p className="text-lg sm:text-xl font-bold text-yellow-600">
                            ${product.price}
                        </p>
                    </div>

                </div>
            ))}
        </div>
    );
};

export default Products;
