import React from 'react'
import './card.css'

function Card(props) {
    return (
        <div style={{ border: '1.5px solid #efefef', minWidth: '10vw', borderRadius: '8px', fontWeight: '500' }} className="p-3 m-2 customCard d-flex justify-content-center align-items-center">
            <div style={{ marginRight: '3vw', marginLeft: "3vw" }} >
                <img src={props.image} alt="Image in card" />
            </div>
            <div className=' m-1' style={{ fontSize: '1rem' }}>
                <div style={{ fontWeight: '600', fontSize: 'large', }}>{props.title}</div>
                <div style={{ color: 'rgb(68, 77, 86)' }}>{props.content}</div>
            </div>
        </div>
    )
}

export default Card