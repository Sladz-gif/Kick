
import React from 'react';
import SneakerCard from '../Components/SneakerCard';
import { Grid, Typography } from '@mui/material';

const ProductPage = ({ sneakers }) => {
    // Ensure sneakers is an array
    const categorizedSneakers = {
        Men: {
            Boots: sneakers.filter(s => s.category === 'Men' && s.type === 'Boots'),
            Shoes: sneakers.filter(s => s.category === 'Men' && s.type === 'Shoes'),
            Sneakers: sneakers.filter(s => s.category === 'Men' && s.type === 'Sneakers'),
        },
        Women: {
            Boots: sneakers.filter(s => s.category === 'Women' && s.type === 'Boots'),
            Shoes: sneakers.filter(s => s.category === 'Women' && s.type === 'Shoes'),
            Sneakers: sneakers.filter(s => s.category === 'Women' && s.type === 'Sneakers'),
        },
        Kids: {
            Boots: sneakers.filter(s => s.category === 'Kids' && s.type === 'Boots'),
            Shoes: sneakers.filter(s => s.category === 'Kids' && s.type === 'Shoes'),
            Sneakers: sneakers.filter(s => s.category === 'Kids' && s.type === 'Sneakers'),
        },
    };

    return (
        <div style={{ padding: '20px', backgroundColor: '#FFFFFF' }}>
            {Object.keys(categorizedSneakers).map((gender) => (
                <div key={gender} style={{ marginBottom: '40px' }}>
                    <Typography variant="h3" style={{ color: '#4C96FF' }}>{gender}</Typography>
                    {Object.keys(categorizedSneakers[gender]).map((type) => (
                        <div key={type}>
                            <Typography variant="h4" style={{ color: '#3D1401', marginTop: '20px' }}>{type}</Typography>
                            <Grid container spacing={2}>
                                {categorizedSneakers[gender][type].length > 0 ? (
                                    categorizedSneakers[gender][type].map((sneaker) => (
                                        <Grid item xs={12} sm={6} md={3} key={sneaker.id}>
                                            <SneakerCard sneaker={sneaker} />
                                        </Grid>
                                    ))
                                ) : (
                                    <Typography variant="body1" style={{ color: '#EB9B92' }}>
                                        No {type} available in {gender} category.
                                    </Typography>
                                )}
                            </Grid>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default ProductPage;
