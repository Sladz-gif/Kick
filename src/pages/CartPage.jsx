import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';

const CartPage = ({ cartItems, updateQuantity, removeFromCart }) => {
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div style={{ padding: '20px', backgroundColor: '#FFFFFF' }}> {/* Main background color */}
            <Typography variant="h2" style={{ color: '#4C96FF', marginBottom: '20px' }}>Your Cart</Typography> {/* Electric Blue */}
            {cartItems.length === 0 ? (
                <Typography variant="h6">Your cart is empty.</Typography>
            ) : (
                cartItems.map(item => (
                    <Card key={item.id} style={{ marginBottom: '10px', border: '1px solid #CCCCCC' }}>
                        <CardContent>
                            <Typography variant="h5" style={{ color: '#3D1401' }}>{item.name}</Typography> {/* Dark Accent Color */}
                            <Typography variant="body1">
                                Price: ${item.price} x 
                                <input 
                                    type="number" 
                                    value={item.quantity} 
                                    min="1" 
                                    style={{ width: '50px', marginLeft: '10px' }} 
                                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))} 
                                />
                            </Typography>
                            <Button 
                                variant="contained" 
                                color="secondary" 
                                onClick={() => removeFromCart(item.id)}
                                style={{ marginTop: '10px', backgroundColor: '#EB9B92', color: '#FFFFFF' }} // Coral color for remove button
                            >
                                Remove
                            </Button>
                        </CardContent>
                    </Card>
                ))
            )}
            <Typography variant="h6" style={{ marginTop: '20px', color: '#3D1401' }}>Total Price: ${totalPrice.toFixed(2)}</Typography> {/* Dark Accent Color */}
        </div>
    );
};

export default CartPage;
