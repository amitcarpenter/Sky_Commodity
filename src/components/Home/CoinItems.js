import React from 'react'
import './Coins.css'
const CoinItems = (props) => {
    return (
        <div className='coin_row'>
            <p>{props.coins.market_cap_rank}</p>
            <div className="img_symbol">
                <img className='coinImages' src={props.coins.image} alt="" />
                <p>{props.coins.symbol.toUpperCase()}</p>
            </div>
            <p>${props.coins.current_price.toLocaleString()}</p>
            <p>{props.coins.price_change_percentage_24h.toFixed(2)}%</p>
            <p className='hide-mobileView'>${props.coins.total_volume.toLocaleString()}</p>
            <p className='hide-mobileView'>${props.coins.market_cap.toLocaleString()}</p>
        </div>
    )
}

export default CoinItems