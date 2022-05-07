import React from 'react'

function Page(props) {
    return (
        <div className='row d-flex align-items-center' style={{ background: `${props.background}` }} >
            <div className='col-md-6'>
                <div className='d-flex align-itmes-center p-5 flex-column'>
                    <div style={{ fontWeight: '600', fontSize: '1.5rem' }}>{props.title}</div>

                    <div>{props.content}</div>
                </div>
            </div>

            <div className='col-md-6 d-flex justify-content-center align-items-center'>

                <img src={props.image} style={{ height: '50vh' }} alt="Image in page" />
            </div>
        </div>
    )
}

export default Page