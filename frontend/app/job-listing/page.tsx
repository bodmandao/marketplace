import AllJobs from "../../components/AllJobs"
import Footer from "../../components/Footer"
import Navbar from "../../components/Navbar"
import Brand from "../../components/Brand"


function ListingPage(){
    return (
        <main className="wrapper ovh">
              {/* <div className="preloader"></div> */}
            <Navbar />
            <Brand />
            <div className="body_content">
               <AllJobs />
                <Footer />
            </div>
        </main>
    )
}

export default ListingPage