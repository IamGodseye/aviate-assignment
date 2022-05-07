import React from 'react'
import './hero.css'

function Hero() {
    return (
        // hero component
        <div className='row mb-4'>
            <div className='d-flex justify-content-center'>
                <div style={{ fontSize: '3rem', color: '#202030', fontWeight: '900', textAlign: 'center' }}>Welcome to the
                    <br></br>
                    Decentralized World
                </div>
            </div>
            <div className='d-flex justify-content-center'>
                <button className='btn custom-button'>Join the Network</button>
            </div>
        </div>
    )
}

export default Hero