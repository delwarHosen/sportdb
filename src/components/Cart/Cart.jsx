import React from 'react';

const Cart = ({ product }) => {
    console.log(product)
    const { idPlayer } = product;
    return (
        <div>
            <h1>id: {product[0].idPlayer}</h1>
        </div>
    );
};

export default Cart;