import Footer from "../../components/Footer"
import MyHiredJobsListing from "../../components/MyHiredJobs"
import Navbar from "../../components/Navbar"
import Brand from "../../components/Brand"


function MyHiredJob(){
    return (
        <main className="wrapper ovh">
              {/* <div className="preloader"></div> */}
            <Navbar />
            <Brand />
            <div className="body_content">
               <MyHiredJobsListing />
                <Footer />
            </div>
        </main>
    )
}

export default MyHiredJob