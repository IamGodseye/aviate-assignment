import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios'
import './navbar.css'
function Converter() {
    const [fromCurrency, setFromCurrency] = useState("INR");
    const [fromCurrencyValue, setFromCurrencyValue] = useState(0);
    const [toCurrencyValue, setToCurrencyValue] = useState(0);
    const url = "https://blockchain.info/tobtc";
    // example https://blockchain.info/tobtc?currency=USD&value=500
    useEffect(() => {
        const dataFetch = async () => {
            if (fromCurrencyValue < 0) {
                setToCurrencyValue(0)
                return
            }
            const data = await axios.post(`${url}?currency=${fromCurrency}&value=${fromCurrencyValue}`)
            setToCurrencyValue(data.data)
        }
        dataFetch();
    }, [fromCurrency, fromCurrencyValue])
    return (
        // converter using given api 
        <div style={{ background: `url('Animated Shape.svg')` }}>
            <div className=' glassy col-md-8 offset-md-2 mt-2 d-flex align-items-center flex-column justify-content-center' style={{ height: '60vh', borderRadius: '8px', border: '0.5px solid #efefef', background: 'rgb(134, 224, 255,0.3)' }}>
                <div style={{ textAlign: 'center', fontSize: '2rem', fontWeight: '700' }} className="p-2">Convert to BTC</div>
                <div style={{ textAlign: 'center' }}>
                    <label style={{ fontSize: '1.5rem', fontWeight: '700' }}>Input Currency: {fromCurrency}</label>
                    <div className=' d-flex justify-content-center input-group'>
                        <input type='number' className='input-group-text' min="0" value={fromCurrencyValue} onChange={(e) => setFromCurrencyValue(e.target.value)} />
                        <select
                            value={fromCurrency}
                            onChange={(e) => { setFromCurrency(e.target.value); console.log(e.target.value) }}>
                            <option>INR</option>
                            <option>USD</option>
                            <option>GBP</option>
                            <option>EUR</option>
                        </select>
                    </div>

                    <div style={{ fontSize: '2rem' }}>=</div>
                    <label style={{ fontSize: '1.5rem', fontWeight: '700' }}>Output Currency: BTC</label>
                    <div className=' d-flex justify-content-center input-group'>
                        <input className='input-group-text' disabled value={toCurrencyValue} />
                        <select>
                            <option>BTC</option>
                        </select>
                    </div>

                </div>
            </div>
        </div >
    )
}

export default Converter