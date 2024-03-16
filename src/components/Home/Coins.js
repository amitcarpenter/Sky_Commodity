import React from 'react'
import CoinItems from './CoinItems'
import './Coins.css'
import { Link } from 'react-router-dom'
import Coin from './routes/Coin'

const Coins = (props) => {
    return (
        <div className='Container12'>
            <div>
                <div className="heading123">
                    <p>#</p>
                    <p className='coin_name'>Coin</p>
                    <p>Price</p>
                    <p>24h</p>
                    <p className='hide-mobileView'>Volume</p>
                    <p className='hide-mobileView'>Market Capital</p>
                </div>
                {props.coins.map(coins=>{
                    return(
                        <Link className='navbar-link' to={`/coin/${coins.id}`} element={<Coin/>} key ={coins.id} >
                        <CoinItems coins={coins} />
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default Coins