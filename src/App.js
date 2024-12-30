import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import AdminDashboard from './pages/AdminDashboard';
import UserView from './pages/UserView'; 
import TrendingNow from './pages/TrendingNow'; 
import TopPicks from './pages/TopPicks'; 
import Featured from './pages/Featured'; 
import Highlights from './pages/Highlights'; 
import Navbar from './Components/NavBar'; 
import { supabase } from './pages/supabaseClient'; 

const App = () => {
    const [cart, setCart] = useState([]);
    const [sneakers, setSneakers] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        const { data, error } = await supabase.from('products').select('*'); // Fetch all products
        if (error) {
            console.error('Error fetching products:', error);
        } else {
            setSneakers(data); // Set the fetched products
        }
    };

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
                    <Route path="manage-products/trending" element={<TrendingNow />} /> {/* Trending Now page */}
                    <Route path="manage-products/top-picks" element={<TopPicks />} /> {/* Top Picks page */}
                    <Route path="manage-products/featured" element={<Featured />} /> {/* Featured page */}
                    <Route path="manage-products/highlights" element={<Highlights />} /> {/* Highlights page */}
                    <Route path="view-as-user" element={<UserView />} /> {/* View as User page */}
                </Route>
            </Routes>
        </Router>
    );
};

export default App;



