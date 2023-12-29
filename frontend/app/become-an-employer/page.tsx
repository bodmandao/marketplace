"use client"

import Footer from "../../components/Footer"
import Navbar from "../../components/Navbar"
import RegisterEmployer from "../../components/RegisterEmployer"

function BecomeAnEmployer(){
    return (
        <main className="wrapper">
              {/* <div className="preloader"></div> */}
            <Navbar />
            <div className="body_content" >
                <RegisterEmployer />
            <Footer />
            </div>
        </main>
    )
}

export default BecomeAnEmployer