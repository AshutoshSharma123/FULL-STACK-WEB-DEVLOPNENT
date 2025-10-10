// import { Link } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

// const Cart = () => {
//     const user = useSelector((state) => state.userReducer.user);
//     const products = useSelector((state) => state.productReducer.products);
//     const dispatch = useDispatch();



//     return (
//         <div>
//             <ul>
//                 {user?.cart?.length > 0 ? (
//                     user.cart.map(c => <li key={c.productId}>{c.productId} - {c.quantity}</li>)
//                 ) : (
//                     <li>Your cart is empty</li>
//                 )}
//             </ul>
//         </div>

//     )
// }

// export default Cart


import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { asyncupdateUser } from '../store/actions/userActions';

const Cart = () => {
    const user = useSelector((state) => state.userReducer.user);
    const products = useSelector((state) => state.productReducer.products);
    const dispatch = useDispatch();

    if (!user?.cart?.length) {
        return <div className="text-gray-200 text-center mt-10">Your cart is empty</div>;
    }

    const validCartItems = user.cart.filter(c => products.some(p => p.id === c.productId));

    const removeFromCart = (productId) => {
        const updatedCart = user.cart.filter(c => c.productId !== productId);
        const updatedUser = { ...user, cart: updatedCart };
        dispatch(asyncupdateUser(user.id, updatedUser));
    };

    return (
        <div className="w-full min-h-screen bg-gray-800 flex flex-col items-center py-10 px-4 gap-6">
            {validCartItems.map((c) => {
                const product = products.find((p) => p.id === c.productId);
                if (!product) return null;

                return (
                    <div
                        key={c.productId}
                        className="flex items-center bg-gray-900 text-white rounded-2xl p-4 w-full max-w-md shadow-md"
                    >
                        {/* Product Image */}
                        <img
                            src={product.image}
                            alt={product.title}
                            className="w-20 h-20 object-cover rounded-lg mr-4"
                        />

                        {/* Product Details */}
                        <div className="flex-1">
                            <h2 className="text-lg font-semibold">{product.title}</h2>
                            <p className="text-gray-400">Quantity: {c.quantity}</p>
                            <p className="text-yellow-400 font-bold">Price: ${product.price}</p>
                        </div>

                        {/* Remove Button */}
                        <button
                            onClick={() => removeFromCart(product.id)}
                            className="ml-4 bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-lg transition-all"
                        >
                            Remove
                        </button>
                    </div>
                );
            })}
        </div>
    );
};

export default Cart;
