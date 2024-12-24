import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <AppBar position="static" style={{ backgroundColor: '#1E1E1E' }}> {/* Black background */}
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1, color: '#FFFFFF' }}>
                    Sneaker Shop
                </Typography>
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <Button color="inherit" style={{ color: '#4C96FF' }}>Home</Button> {/* Electric Blue */}
                </Link>
                <Link to="/products" style={{ textDecoration: 'none' }}>
                    <Button color="inherit" style={{ color: '#4C96FF' }}>Products</Button> {/* Electric Blue */}
                </Link>
                <Link to="/cart" style={{ textDecoration: 'none' }}>
                    <Button color="inherit" style={{ color: '#4C96FF' }}>Cart</Button> {/* Electric Blue */}
                </Link>
                <Link to="/admin" style={{ textDecoration: 'none' }}>
                    <Button color="inherit" style={{ color: '#4C96FF' }}>Admin Dashboard</Button> {/* Electric Blue */}
                </Link>
                {/* Add authentication links if needed */}
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;

