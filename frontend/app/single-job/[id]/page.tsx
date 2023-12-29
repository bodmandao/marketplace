import Footer from "../../../components/Footer"
import Navbar from "../../../components/Navbar"
import SingleJobListing from "../../../components/SingleJobListing"
import Brand from "../../../components/Brand"


function SingleJob({params} : {
    params : {
        id : number
    }
}){
    return (
        <main className="wrapper ovh">
              {/* <div className="preloader"></div> */}
            <Navbar />
            <Brand />
            <div className="body_content">
               <SingleJobListing  id = {params} />
                <Footer />
            </div>
        </main>
    )
}

export default SingleJob