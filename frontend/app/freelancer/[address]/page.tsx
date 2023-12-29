import Footer from "../../../components/Footer"
import FreelancerPage from "../../../components/FreelancerPage"
import Navbar from "../../../components/Navbar"
import Brand from "../../../components/Brand"

function Freelancer({params} : {
    params : {
        address : string
    }
}){
    return (
        <main className="wrapper">
            <Navbar />
            <div className="body_content">
                <Brand />
                <FreelancerPage address={params} />
                <Footer />
            </div>
        </main>
    )
}

export default Freelancer