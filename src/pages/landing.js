import React from 'react'
import Navbar from '../components/navbar';
import Hero from '../components/hero';

import Hero2 from '../components/hero2';
import Page from '../components/page';
import CardSection from '../components/cardSection';
import Footer from '../components/footer';

// Landing page

function Landing() {
    return (
        <div>

            <Navbar />
            <Hero />
            <Hero2 />

            <Page background='rgb(255, 229, 249)' image="transparent.webp" title='Title' content='Content, this is the content Amet do magna sit incididunt eu sunt eiusmod nisi dolor ut irure. Proident incididunt officia ut sint et magna et. Aliqua deserunt incididunt deserunt amet elit. Veniam duis non non elit mollit. Aute pariatur adipisicing mollit fugiat ullamco eiusmod elit id pariatur est officia ullamco. Commodo incididunt ut adipisicing eu mollit reprehenderit amet voluptate reprehenderit nulla. ' />
            <Page background='rgb(225, 254, 250)' image="infrastructure_transparent.webp" title='Title' content='Content, this is the content Amet do magna sit incididunt eu sunt eiusmod nisi dolor ut irure. Proident incididunt officia ut sint et magna et. Aliqua deserunt incididunt deserunt amet elit. Veniam duis non non elit mollit. Aute pariatur adipisicing mollit fugiat ullamco eiusmod elit id pariatur est officia ullamco. Commodo incididunt ut adipisicing eu mollit reprehenderit amet voluptate reprehenderit nulla. ' />

            <CardSection />
            <Footer />
        </div>
    )
}

export default Landing