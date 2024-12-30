import React, { useState } from 'react';
import { TextField, Button, Typography, Grid, Card, CardContent } from '@mui/material';
import { useOutletContext } from 'react-router-dom'; // Import useOutletContext
import { supabase } from './supabaseClient'; // Import your Supabase client

const Featured = () => {
    const { products, addProduct, deleteProduct } = useOutletContext(); // Access context here
    const [newProduct, setNewProduct] = useState({
        name: '',
        price: '',
        description: '',
        image: null,
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewProduct(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleFileChange = (e) => {
        setNewProduct(prevState => ({
            ...prevState,
            image: e.target.files[0] // Set the selected file
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (newProduct.name && newProduct.price && newProduct.image) {
            const imageUrl = await uploadImage(newProduct.image); // Function to handle image upload
            const productToAdd = {
                ...newProduct,
                image_url: imageUrl // Add the uploaded image URL to the product object
            };

            addProduct(productToAdd);
            setNewProduct({ name: '', price: '', description: '', image: null }); // Reset form
        } else {
            alert('Please fill in all fields.');
        }
    };

    const uploadImage = async (file) => {
        const { data, error } = await supabase.storage.from('your-bucket-name').upload(`images/${file.name}`, file);
        
        if (error) {
            console.error('Error uploading image:', error);
            return null; // Handle error appropriately
        }

        const url = supabase.storage.from('your-bucket-name').getPublicUrl(data.Key).publicURL;
        return url;
    };

    return (
        <div style={{ padding: '20px' }}>
            <Typography variant="h4" style={{ color: '#3D1401', marginBottom: '20px' }}>Manage Featured Products</Typography>

            <form onSubmit={handleSubmit} style={{ marginBottom: '40px' }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField fullWidth label="Product Name" name="name" value={newProduct.name} onChange={handleInputChange} required />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField fullWidth label="Price" name="price" type="number" value={newProduct.price} onChange={handleInputChange} required />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField fullWidth label="Description" name="description" value={newProduct.description} onChange={handleInputChange} />
                    </Grid>
                    <Grid item xs={12}>
                        <input type="file" accept="image/*" onChange={handleFileChange} required />
                    </Grid>
                </Grid>

                {/* Submit Button */}
                <Button type='submit' variant='contained' color='primary' style={{ marginTop:'20px'}}>
                  Add Product
                </Button> 
              </form>

              {/* Existing Products Section */}
              <Typography variant="h5" style={{ color: '#3D1401', marginBottom: '20px' }}>Existing Products in Featured</Typography>
              <Grid container spacing={2}>
                  {(products || []).filter(product => product.secondaryCategory === 'Featured').map(product => (
                      // Ensure products is an array 
                      <Grid item xs={12} sm={6} md={4} key={product.id}>
                          <Card>
                              <CardContent>
                                  <Typography variant="h6">{product.name}</Typography> {/* Use correct field name */}
                                  <Typography variant="body2">Price: ${product.price}</Typography>
                                  <Typography variant="body2">{product.description}</Typography>
                                  {product.image_url && (
                                      <img src={product.image_url} alt={product.name} style={{ width: '100%', height: 'auto' }} />
                                  )}
                                  {/* Delete Button */}
                                  <Button variant="contained" color="secondary" onClick={() => deleteProduct(product.id)} style={{ marginTop: '10px' }}>
                                      Delete Product
                                  </Button> 
                              </CardContent>
                          </Card>
                      </Grid>
                  ))}
              </Grid>
          </div> 
      ); 
  }; 

export default Featured; 



