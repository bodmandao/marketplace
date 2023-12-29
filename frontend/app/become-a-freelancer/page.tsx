"use client"

import Footer from "../../components/Footer"
import Navbar from "../../components/Navbar"
import RegisterFreelancer from "../../components/RegisterFreelancer"

function BecomeAFreelancer(){
    return (
        <main className="wrapper">
            <Navbar />
            <div className="body_content">
                <RegisterFreelancer />
            <Footer />
            </div>
        </main>
    )
}

export default BecomeAFreelancer