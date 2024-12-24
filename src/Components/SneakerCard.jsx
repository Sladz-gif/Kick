
import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';

const SneakerCard = ({ sneaker }) => {
    return (
        <Card style={{ border: '1px solid #CCCCCC', borderRadius: '8px', transition: 'transform 0.3s' }}>
            <CardMedia
                component="img"
                height="140"
                image={sneaker.image_url}
                alt={sneaker.name}
                style={{ borderTopLeftRadius: '8px', borderTopRightRadius: '8px' }} // Rounded corners for the image
            />
            <CardContent>
                <Typography variant="h5" style={{ color: '#3D1401' }}>{sneaker.name}</Typography> {/* Dark Accent Color */}
                <Typography variant="body2" style={{ color: '#4C96FF' }}>${sneaker.price}</Typography> {/* Electric Blue */}
            </CardContent>
        </Card>
    );
};

export default SneakerCard;
