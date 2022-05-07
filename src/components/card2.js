import React from 'react'
import './card.css'
function Card2() {
    return (
        <>
            <div class='col m-2'>
                <div className="col-md-6 offset-md-3">
                    <div class="card custom-card">
                        <img src="nakamoto.svg" class="card-img-top" className='m-4' />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card2;