
import React from 'react';
import SneakerCard from '../Components/SneakerCard';
import { Grid, Typography } from '@mui/material';

const HomePage = ({ sneakers }) => {
    return (
        <div style={{ padding: '20px', backgroundColor: '#FFFFFF' }}> {/* Main background color */}
            <Typography variant="h2" style={{ color: '#4C96FF' }}>Trending Now</Typography> {/* Electric Blue */}
            <Grid container spacing={2}>
                {sneakers.slice(0, 4).map(sneaker => ( // Display first four sneakers
                    <Grid item xs={12} sm={6} md={3} key={sneaker.id}>
                        <SneakerCard sneaker={sneaker} />
                    </Grid>
                ))}
            </Grid>

            <Typography variant="h2" style={{ marginTop: '40px', color: '#4C96FF' }}>Featured</Typography> {/* Electric Blue */}
            <Grid container spacing={2}>
                {sneakers.slice(4, 8).map(sneaker => ( // Display next four sneakers
                    <Grid item xs={12} sm={6} md={3} key={sneaker.id}>
                        <SneakerCard sneaker={sneaker} />
                    </Grid>
                ))}
            </Grid>

            <Typography variant="h2" style={{ marginTop: '40px', color: '#4C96FF' }}>Top Picks</Typography> {/* Electric Blue */}
            <Grid container spacing={2}>
                {sneakers.slice(8, 12).map(sneaker => ( // Display next four sneakers
                    <Grid item xs={12} sm={6} md={3} key={sneaker.id}>
                        <SneakerCard sneaker={sneaker} />
                    </Grid>
                ))}
            </Grid>

            <Typography variant="h2" style={{ marginTop: '40px', color: '#4C96FF' }}>Highlight of the Week</Typography> {/* Electric Blue */}
            <Grid container spacing={2}>
                {sneakers.slice(12, 16).map(sneaker => ( // Display next four sneakers
                    <Grid item xs={12} sm={6} md={3} key={sneaker.id}>
                        <SneakerCard sneaker={sneaker} />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default HomePage;
