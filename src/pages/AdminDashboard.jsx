import React, { useState } from 'react';
import { Drawer, List, ListItem, Button, Collapse } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'; // Import the ExpandMore icon
import { Link, Outlet } from 'react-router-dom'; // Use Outlet for nested routing

const AdminDashboard = () => {
    const [products, setProducts] = useState([]); // State to hold products
    const [openDropdown, setOpenDropdown] = useState(false); // State to control dropdown visibility

    const addProduct = (newProduct) => {
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
                                <Button color="inherit" style={{ padding: '8px 16px' }}>Home</Button>
                            </Link>
                        </ListItem>
                        <ListItem button onClick={() => setOpenDropdown(!openDropdown)}>
                            <Button color="inherit" style={{ padding: '8px 16px', display: 'flex', alignItems: 'center' }}>
                                Manage Products
                                <ExpandMoreIcon style={{ marginLeft: 'auto', transform: openDropdown ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }} />
                            </Button>
                        </ListItem>
                        <Collapse in={openDropdown} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItem>
                                    <Link to="/admin/manage-products/trending" style={{ textDecoration: 'none', color: '#4C96FF' }}>
                                        <Button color="inherit" style={{ padding: '8px 16px', paddingLeft: '40px' }}>Trending Now</Button>
                                    </Link>
                                </ListItem>
                                <ListItem>
                                    <Link to="/admin/manage-products/top-picks" style={{ textDecoration: 'none', color: '#4C96FF' }}>
                                        <Button color="inherit" style={{ padding: '8px 16px', paddingLeft: '40px' }}>Top Picks</Button>
                                    </Link>
                                </ListItem>
                                <ListItem>
                                    <Link to="/admin/manage-products/featured" style={{ textDecoration: 'none', color: '#4C96FF' }}>
                                        <Button color="inherit" style={{ padding: '8px 16px', paddingLeft: '40px' }}>Featured</Button>
                                    </Link>
                                </ListItem>
                                <ListItem>
                                    <Link to="/admin/manage-products/highlights" style={{ textDecoration: 'none', color: '#4C96FF' }}>
                                        <Button color="inherit" style={{ padding: '8px 16px', paddingLeft: '40px' }}>Highlights of the Week</Button>
                                    </Link>
                                </ListItem>
                            </List>
                        </Collapse>

                        {/* Additional admin management links */}
                        <ListItem>
                            <Link to="/view-as-user" style={{ textDecoration: 'none', color: '#4C96FF' }}>
                                <Button color="inherit" style={{ padding: '8px 16px' }}>View Site as User</Button>
                            </Link>
                        </ListItem>
                    </List>
                </div>
            </Drawer>

            {/* Main content area */}
            <div style={{ padding: '20px', backgroundColor: '#FFFFFF', flexGrow: 1, marginLeft: 250 }}>
                <h2 style={{ color: '#3D1401' }}>Welcome to the Admin Dashboard</h2> 
                {/* Render nested routes here */}
                <Outlet context={{ products, addProduct, deleteProduct }} />
            </div>
        </div>
    );
};

export default AdminDashboard;






