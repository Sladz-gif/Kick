import React from 'react';
import SneakerCard from '../Components/SneakerCard';
import { Grid, Typography } from '@mui/material';

const ProductPage = ({ sneakers }) => {
    return (
        <div style={{ padding: '20px', backgroundColor: '#FFFFFF' }}>
            <Typography variant="h2" style={{ color: '#4C96FF' }}>All Products</Typography>
            <Grid container spacing={2}>
                {sneakers.map(sneaker => (
                    <Grid item xs={12} sm={6} md={3} key={sneaker.id}>
                        <SneakerCard sneaker={sneaker} />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default ProductPage;

