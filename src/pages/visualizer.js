import React from 'react'
import Chart from '../components/chart'
import Footer from '../components/footer'
import Navbar from '../components/navbar'

// Chart page
function Visualizer() {
    return (
        <div>
            <Navbar />
            <Chart />
            <Footer />
        </div>
    )
}

export default Visualizer