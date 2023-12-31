import Footer from "../../components/Footer"
import MyJobs from "../../components/MyJobs"
import Navbar from "../../components/Navbar"
import Brand from "../../components/Brand"


function MyJobListing(){
    return (
        <main className="wrapper">
            <Navbar />
            <Brand />
            <div className="body_content">
               <MyJobs />
                <Footer />
            </div>
        </main>
    )
}

export default MyJobListing