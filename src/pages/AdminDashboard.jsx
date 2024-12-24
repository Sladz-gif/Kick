import React, { useState } from 'react';
import { Drawer, List, ListItem, Button } from '@mui/material';
import { Link, Outlet } from 'react-router-dom'; // Use Outlet for nested routing

const AdminDashboard = () => {
    const [products, setProducts] = useState([]); // State to hold products

    const addProduct = (newProduct) => {
        // Generate a new ID for the product
        const id = products.length ? Math.max(products.map(p => p.id)) + 1 : 1;
        setProducts([...products, { ...newProduct, id }]); // Add new product with generated ID
    };

    const deleteProduct = (id) => {
        setProducts(products.filter(product => product.id !== id)); // Remove product by ID
    };

    return (
        <div style={{ display: 'flex' }}>
            {/* Drawer for vertical navigation */}
            <Drawer variant="permanent" anchor="left">
                <div style={{ width: 250 }}>
                    <List>
                        <ListItem>
                            <Link to="/" style={{ textDecoration: 'none', color: '#4C96FF' }}>
                                <Button color="inherit" style={{ padding: '8px 16px' }}>Home</Button> {/* Electric Blue */}
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link to="/admin/manage-products" style={{ textDecoration: 'none', color: '#4C96FF' }}>
                                <Button color="inherit" style={{ padding: '8px 16px' }}>Manage Products</Button> {/* Electric Blue */}
                            </Link>
                        </ListItem>
                        {/* Add more admin management links as needed */}
                        <ListItem>
                            <Link to="/view-as-user" style={{ textDecoration: 'none', color: '#4C96FF' }}>
                                <Button color="inherit" style={{ padding: '8px 16px' }}>View Site as User</Button> {/* Electric Blue */}
                            </Link>
                        </ListItem>
                    </List>
                </div>
            </Drawer>

            {/* Main content area */}
            <div style={{ padding: '20px', backgroundColor: '#FFFFFF', flexGrow: 1, marginLeft: 250 }}> {/* Adjust marginLeft */}
                <h2 style={{ color: '#3D1401' }}>Welcome to the Admin Dashboard</h2> {/* Dark Accent Color */}
                {/* Render nested routes here */}
                <Outlet context={{ products, addProduct, deleteProduct }} />
            </div>
        </div>
    );
};

export default AdminDashboard;
