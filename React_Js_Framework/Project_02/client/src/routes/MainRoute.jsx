import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Products from '../pages/Products';
import Login from '../pages/Login';
import Register from '../pages/Register';
import CreateProduct from '../pages/admin/CreateProduct';
import ProductDetail from '../pages/admin/ProductDetail';
import UserProfile from '../pages/Users/UserProfile';
import { useSelector } from 'react-redux';
const MainRoute = () => {

    const user = useSelector((state) => state.userReducer.user);
    console.log(user);

    return (
        <Routes>
            <Route path='/' element={user ? <Products /> : <Home />} />
            <Route path='/products' element={<Products />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/admin/create-product' element={<CreateProduct />} />
            <Route path='/admin/user-profile' element={<UserProfile />} />
            <Route path='/product/:id' element={<ProductDetail />} />
        </Routes>
    );
};

export default MainRoute;
