import Footer from "../../components/Footer"
import MyJobs from "../../components/MyJobs"
import Navbar from "../../components/Navbar"

function MyJobListing(){
    return (
        <main className="wrapper">
            <Navbar />
            <div className="body_content">
               <MyJobs />
                <Footer />
            </div>
        </main>
    )
}

export default MyJobListing