import React from 'react'
import './Home.css'
import LsuBadge from './img/lsubadge.png'
const HomeInfo = () => {
    return (
        <div className='home-container'>
            <div className='name-container'>
                <h1 className="name">Jeffery Hauck Jr, FullStack Developer</h1>
                <img src={LsuBadge} alt=''></img>
            </div>
            <div className='quote-container'>
                <p className='quote-p'>"You miss 100% of the shots you don't take." -Wayne Gretzky</p>
                <p className='quote-p'>-Michael Scott</p>
            </div>
        </div>
    )
}

export default HomeInfo