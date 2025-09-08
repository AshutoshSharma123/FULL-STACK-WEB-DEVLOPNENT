import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './About'
import Home from './Home'
import Products from './Products'
import Service from './Service'
import ProductDetails from './ProductDetails'
import ServiceDetail from './ServiceDetail'
const MainRoutes = () => {
    return (
        <div>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/product" element={<Products />} />
                <Route path="/product/deatil/:name" element={<ProductDetails />} />
                <Route path="/service" element={<Service />}>
                    <Route path="detail" element={<ServiceDetail />} />
                </Route>

            </Routes>


        </div>
    )
}

export default MainRoutes