import React, { useEffect, useState } from 'react';
import './Players.css'
import Player from '../Player/Player';
import Cart from '../Cart/Cart';

const Players = () => {
    const [search, setSearch] = useState("")
    const [players, setPlayers] = useState([])
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${search}`)
            .then(res => res.json())
            .then(data => setPlayers(data?.player))
    }, [search])

    const removeFromCart = (id) => {
        const removeData = cart.filter(pId => pId.idPlayer !== id)
        setCart(removeData)
    }

    // console.log(cart)
    // console.log(players)
    return (
        <div className='home-container'>
            <div className='player-container'>
                <input type="text" onChange={(e) => setSearch(e.target.value)} className='serach-field' placeholder='Search Your Player Name' name="" id="" />
                <button className='search-btn'>Search Player</button>
                <div className="player-details">
                    {
                        players.map(player => <Player
                            key={player.idPlayer}
                            player={player}
                            cart={cart}
                            setCart={setCart}
                        ></Player>)
                    }
                </div>
            </div>
            <div className='cart-container'>

                {/* {
                    cart.map(product => <Cart
                        key={product.idPlayer}
                        product={cart}
                    ></Cart>)
                } */}

                {
                    cart.map(product =>
                        <p>id:{product.idPlayer}<button onClick={() => removeFromCart(product.idPlayer)}>X</button></p>

                    )
                }
            </div>
        </div>
    );
};

export default Players;