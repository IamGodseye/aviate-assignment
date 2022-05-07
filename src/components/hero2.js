import React from 'react'
import Card from './card'
import './hero.css'

function Hero2() {
    return (
        // component after hero using card 
        <div className="p-4 m-2 row">
            <div className='col-md-6 p-4' >
                <div style={{ color: 'rgb(0, 102, 255)', fontWeight: '700' }}>
                    Decentralized approch
                </div>
                <div style={{ fontSize: '2.5rem', fontWeight: '600' }}>
                    A truly free network
                    <div className='grid'>
                        <Card className="g-col-3" title='This is title' content='this is content this is content this is content this is content this is content' image='table.svg' />
                        <Card className="g-col-3" title='This is title' content='this is content this is content this is content this is content this is content' image='verified.svg' />
                        <Card className="g-col-3" title='This is title' content='this is content this is content this is content this is content this is content' image='peer.svg' />
                        <Card className="g-col-3" title='This is title' content='this is content this is content this is content this is content this is content' image='portfolio.svg' />
                        <Card className="g-col-3" title='This is title' content='this is content this is content this is content this is content this is content' image='growth.svg' />
                    </div>
                </div>
            </div>
            <div className='col-md-6 d-flex align-items-center justify-content-center' style={{ flexDirection: 'column' }}>


                <img src='what-is-ethereum.webp' style={{ height: '45vh' }} alt="what is Etherum image" />

                <div className='d-flex justify-content-center'>
                    <button className='btn custom-button'>Join the Network</button>
                </div>
            </div>
        </div>
    )
}

export default Hero2