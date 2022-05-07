import React from 'react'

function Footer() {
    return (
        <div className='container pt-2 mt-2 pb-2'>
            <div className='row'>
                <div className='col-lg-3 p-2'>
                    <div style={{ fontWeight: '800', fontSize: '1.5rem' }}>    <img src="Meta-Symbol.png" style={{ height: '5vh' }} alt="Meta-symbol" /> Meta Currency </div>
                    <div className='d-flex flex-column p-2'>
                        Content Incididunt reprehenderit elit fugiat pariatur mollit quis aliquip commodo officia ut anim fugiat nostrud.
                    </div>
                </div>
                <div className='col-6 col-lg-2 offset-lg-1 p-2'>
                    <div style={{ fontWeight: '600' }}>  Learn  </div>
                    <div className='d-flex flex-column' style={{ color: 'rgb(102, 102, 102)' }}>
                        <a>Link</a>
                        <a>Link</a>
                        <a>Link</a>
                        <a>Link</a>
                        <a>Link</a>
                        <a>Link</a>
                        <a>Link</a>
                    </div>
                </div>
                <div className='col-6 col-lg-2 p-2'>
                    <div style={{ fontWeight: '600' }}>  How it works? </div>
                    <div className='d-flex flex-column' style={{ color: 'rgb(102, 102, 102)' }}>
                        <a>Link</a>
                        <a>Link</a>
                        <a>Link</a>
                        <a>Link</a>
                        <a>Link</a>
                        <a>Link</a>
                        <a>Link</a>
                    </div>
                </div>
                <div className='col-6 col-lg-2 p-2'>
                    <div style={{ fontWeight: '600' }}>   Mission </div>
                    <div className='d-flex flex-column' style={{ color: 'rgb(102, 102, 102)' }}>
                        <a>Link</a>
                        <a>Link</a>
                        <a>Link</a>
                        <a>Link</a>
                        <a>Link</a>
                        <a>Link</a>
                        <a>Link</a>
                    </div>
                </div>
                <div className='col-6 col-lg-2 p-2'>
                    <div style={{ fontWeight: '600' }}>   Contact Us </div>
                    <div className='d-flex flex-column' style={{ color: 'rgb(102, 102, 102)' }}>
                        <a>Link</a>
                        <a>Link</a>
                        <a>Link</a>
                        <a>Link</a>
                        <a>Link</a>
                        <a>Link</a>
                        <a>Link</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer