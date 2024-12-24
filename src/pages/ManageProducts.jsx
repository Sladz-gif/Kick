import React, { useState } from 'react';
import { TextField, Button, Typography, Grid, Card, CardContent, MenuItem } from '@mui/material';
import { useOutletContext } from 'react-router-dom'; // Import useOutletContext

const ManageProducts = () => {
    const { products = [], addProduct, deleteProduct } = useOutletContext(); // Access context here
    const [newProduct, setNewProduct] = useState({
        name: '',
        price: '',
        description: '',
        image_url: '',
        primaryCategory: '' // Only primary category field now
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewProduct(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newProduct.name && newProduct.price && newProduct.image_url && newProduct.primaryCategory) {
            addProduct(newProduct);
            setNewProduct({ name: '', price: '', description: '', image_url: '', primaryCategory: '' }); // Reset form
        } else {
            alert('Please fill in all fields.');
        }
    };

    return (
        <div style={{ padding: '20px' }}>
            <Typography variant="h4" style={{ color: '#3D1401', marginBottom: '20px' }}>Manage Products</Typography>

            <form onSubmit={handleSubmit} style={{ marginBottom: '40px' }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Product Name"
                            name="name"
                            value={newProduct.name}
                            onChange={handleInputChange}
                            required
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Price"
                            name="price"
                            type="number"
                            value={newProduct.price}
                            onChange={handleInputChange}
                            required
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Description"
                            name="description"
                            value={newProduct.description}
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Image URL"
                            name="image_url"
                            value={newProduct.image_url}
                            onChange={handleInputChange}
                            required
                        />
                    </Grid>
                    
                    {/* Primary Category Selection */}
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            select
                            label="Primary Category"
                            name="primaryCategory"
                            value={newProduct.primaryCategory}
                            onChange={handleInputChange}
                            required
                        >
                            <MenuItem value="">Select a category</MenuItem>
                            <MenuItem value="Men">Men</MenuItem>
                            <MenuItem value="Women">Women</MenuItem>
                            <MenuItem value="Kids">Kids</MenuItem>
                            <MenuItem value="Unisex">Unisex</MenuItem>
                        </TextField>
                    </Grid>
                </Grid>

                <Button type="submit" variant="contained" color="primary" style={{ marginTop: '20px' }}>
                    Add Product
                </Button>
            </form>

            {/* Existing Products Section */}
            <Typography variant="h5" style={{ color: '#3D1401', marginBottom: '20px' }}>Existing Products</Typography>
            <Grid container spacing={2}>
                {(products || []).map(product => ( // Ensure products is an array
                    <Grid item xs={12} sm={6} md={4} key={product.id}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6">{product.name}</Typography>
                                <Typography variant="body2">Price: ${product.price}</Typography>
                                <Typography variant="body2">{product.description}</Typography>
                                {product.image_url && (
                                    <img src={product.image_url} alt={product.name} style={{ width: '100%', height: 'auto' }} />
                                )}
                                {/* Delete Button */}
                                <Button 
                                    variant="contained" 
                                    color="secondary" 
                                    onClick={() => deleteProduct(product.id)} 
                                    style={{ marginTop: '10px' }}
                                >
                                    Delete Product
                                </Button>
                                {/* Add buttons for editing products here */}
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default ManageProducts;


