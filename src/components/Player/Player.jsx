import React from 'react';
import './Player.css'

const Player = ({ player, cart, setCart }) => {
    const { dateBorn, strNationality, idPlayer, strPlayer, strThumb } = player;

    //add data to cart
    const addToCart = () => {
        const info = { idPlayer, strPlayer, strNationality }
        if (cart.length) {
            setCart([...cart, info])
            return
        }
        else {
            setCart([info])
            return
        }
    }


    return (
        <div className='player-cart' data-aos="flip-down">
            <img src={strThumb} alt="" />
            <h3>{strPlayer}</h3>
            <p>{dateBorn}</p>
            <p>{strNationality}</p>
            <button onClick={addToCart} className='btn'>add to Cart</button>
        </div>
    );
};

export default Player;