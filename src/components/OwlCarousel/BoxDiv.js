import React from 'react'
import './BoxDiv.css';
import Btc from '../assets/btc.png';
import { BsFillBookmarkCheckFill } from 'react-icons/bs';


const BoxDiv = () => {
    return (


        <div className="Main-box">
            <div className="Main-card">
                <div className="Main-card-content">
                    <div className="Main-image">
                        <img src={Btc} alt='bitcoin' />
                    </div>
                    <div className="check-icon">
                        <BsFillBookmarkCheckFill />
                    </div>
                    <div className="CoinDetails">
                        <span className="Coin-name">Bitcoin/Usdt</span>
                        <span className="price">$0.02571</span>
                        <span className="highlited-price">+0.59 %</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BoxDiv