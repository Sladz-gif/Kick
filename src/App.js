import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import AdminDashboard from './pages/AdminDashboard';
import UserView from './pages/UserView'; // Ensure this component exists
import ManageProducts from './pages/ManageProducts'; // Import ManageProducts
import Navbar from './Components/NavBar'; 
import './index.css';

const App = () => {
    const [cart, setCart] = useState([]);

    // Sample sneaker data
    const sneakers = [
        { id: 1, name: 'Sneaker 1', price: 100, description: 'Description for Sneaker 1', image_url: 'url_to_image_1' },
        { id: 2, name: 'Sneaker 2', price: 120, description: 'Description for Sneaker 2', image_url: 'url_to_image_2' },
        // Add more sneakers as needed
    ];

    const addToCart = (sneaker) => {
        const existingItem = cart.find(item => item.id === sneaker.id);
        if (existingItem) {
            setCart(cart.map(item => 
                item.id === sneaker.id ? { ...existingItem, quantity: existingItem.quantity + 1 } : item
            ));
        } else {
            setCart([...cart, { ...sneaker, quantity: 1 }]);
        }
        alert(`${sneaker.name} added to cart!`);
    };

    const updateQuantity = (id, quantity) => {
        if (quantity < 1) return; // Prevent negative quantities
        setCart(cart.map(item => 
            item.id === id ? { ...item, quantity } : item
        ));
    };

    const removeFromCart = (id) => {
        setCart(cart.filter(item => item.id !== id));
    };

    return (
        <Router>
            <Navbar /> {/* Render the Navbar here */}
            <Routes>
                <Route path="/" element={<HomePage sneakers={sneakers} addToCart={addToCart} />} />
                <Route path="/products" element={<ProductPage sneakers={sneakers} addToCart={addToCart} />} />
                <Route path="/cart" element={<CartPage cartItems={cart} updateQuantity={updateQuantity} removeFromCart={removeFromCart} />} />
                <Route path="/admin" element={<AdminDashboard />}>
                    <Route path="manage-products" element={<ManageProducts />} /> {/* Manage Products page */}
                    <Route path="view-as-user" element={<UserView />} /> {/* View as User page */}
                </Route>
            </Routes>
        </Router>
    );
};

export default App;
