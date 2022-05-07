import React from 'react'
import Converter from '../components/converter'
import Footer from '../components/footer'
import Navbar from '../components/navbar'

// Calculator page

function Calculator() {
    return (
        <div>
            <Navbar />
            <Converter />
            <Footer />
        </div>
    )
}

export default Calculator