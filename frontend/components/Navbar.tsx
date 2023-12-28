"use client"

import Image from "next/image"
import { useContext, useEffect, useRef, useState } from 'react'
import { FREELANCER_CONTEXT} from '../API/MarketPlace'
import FreelancerProps from "@/app/interfaces/freelancerProps"
import { usePathname } from "next/navigation"
import Link from "next/link"


function Navbar(){
    const pathname = usePathname()  
    const modalRef = useRef(null) // boostrap modal  

    // import context apis
    const {
        account,employerDetails,currentEmployerDetails,setJobCreationForm,withdrawEarnings,freelancerBal,
        connectWallet,jobCreationForm,createJob,currentFreelancerDetails,freelancerDetails,employerBal
    } = useContext(FREELANCER_CONTEXT) as FreelancerProps

    useEffect(()=>{
        connectWallet()
        if (account) {
            employerDetails(account) // retrieve current employer details
            freelancerDetails(account) // retrieve current freelancer details
        }
    })

    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-info">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">MarketPlace</a>
                <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                     {/* home page */}
                     <li className="nav-item"> 
                        <Link style={{'color' : pathname !== '/'? '#14A800' : 'white'}} className="nav-link" href={'/'}><span className="title">Home</span></Link>
                        </li>

                        {/* jobs page  */}
                        <li className="nav-item">
                                <Link style={{'color' : pathname !== '/'? '#14A800' : 'white'}} className="nav-link" href={'/job-listing'}><span className="title">Browse Jobs</span></Link>
                        </li>

                        {/* create job link for employer */}
                        <li className="nav-item"> 
                        {currentEmployerDetails?.registered?
                        (
                            <button className="btn btn-primary btn-sm text-white" 
                            data-bs-toggle="modal" data-bs-target="#modalId">create job</button>
                        ):(
                            <Link style={{'color' : pathname !== '/'? '#14A800' : 'white'}} className="nav-link" href={'/become-an-employer'}><span className="title">Join as employer</span></Link>

                        )
                    }
                        </li>

                        {/* created jobs link by employer */}
                        <li className="nav-item"> 
                        {currentEmployerDetails?.registered?
                        (
                            <Link style={{'color' : pathname !== '/'? '#14A800' : 'white'}} 
                            className="nav-link" href={'/my-jobs'}>
                                <span className="title">My jobs</span>
                            </Link>
                        ):''
                    }
                        </li>

                        {/* hired jobs link for freelancer  */}
                        <li className="nav-item">
                            {currentFreelancerDetails?.registered? (
                            <Link style={{'color' : pathname !== '/'? '#14A800' : 'white'}} 
                            className="nav-link" href={'/hired-jobs'}>Hired jobs</Link>

                            ):
                            (
                                <Link style={{'color' : pathname !== '/'? '#14A800' : 'white'}} 
                                className="nav-link" href={'/become-a-freelancer'}>Join as freelancer</Link>
                            )
                        }
                        </li>
                        {/* employer balance */}
                        <li className="nav-item"> 
                        {currentEmployerDetails?.registered?
                        (
                            
                            <button className="btn btn-warning" >
                                    <span className="badge bg-primary">{employerBal} INJ</span>
                        </button>
                        ): ''
                    }
                        </li>

                        {/* freelancer balance */}
                        <li className="nav-item"> 
                        {currentFreelancerDetails?.registered?
                        (
                            
                            <button className="btn btn-warning" >
                                    <span className="badge bg-primary">{freelancerBal} INJ</span>
                        </button>
                        ): ''
                    }
                        </li>

                        {/* withdrawal method for freelancer  */}
                        <li className="nav-item"> 
                        {currentFreelancerDetails?.registered == true && currentFreelancerDetails.balance.toString() > 0 ?
                        (
                            
                            <button className="btn btn-warning mx-1 text-success" type="button" onClick={()=>withdrawEarnings()}>
                                Withdraw
                        </button>
                        ): ''
                    }
                        </li>
                    </ul>  
                    
                    {/*connect wallet functionality */}
                    <button style={{
                        'color' : pathname !== '/'? '#14A800' : 'white',
                        'backgroundColor' : pathname !== '/' ? 'rgb(224 255 224)' : 'green', 'border' : 'none'}}
                    className="btn btn-success" type="button" onClick={connectWallet}>
                    {account ? `${account.slice(0,6)}...${account.slice(account.length -4)}` : 'connect wallet'}
                    </button>
                </div>
            </div>
        </nav>
             
       
        
         {/* Modal  */}
        <div className="modal fade"  ref={modalRef} id="modalId" tabIndex={1} role="dialog" aria-labelledby="modalTitleId" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                        <div className="modal-header">
                                <h5 className="modal-title" id="modalTitleId">Create Job</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                    <div className="modal-body">
                        <div className="container-fluid">
                           <div className="mb-3">
                             <label  className="form-label">Company Name</label>
                             <input type="text" className="form-control" placeholder="company name" 
                             aria-describedby="helpId" onChange={(e)=>setJobCreationForm({...jobCreationForm, title : e.target.value})}  />                      
                           </div>
                           <div className="mb-3">
                             <label  className="form-label">Description</label>
                             <input type="text" className="form-control" placeholder="job description" 
                             aria-describedby="helpId" onChange={(e)=>setJobCreationForm({...jobCreationForm, description : e.target.value})}  />                      
                           </div>
                           <div className="mb-3">
                             <label  className="form-label">Budget</label>
                             <input type="number" className="form-control" placeholder="job budget" 
                             aria-describedby="helpId" onChange={(e)=>setJobCreationForm({...jobCreationForm, budget : Number(e.target.value)})}  />                      
                           </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary text-white" data-bs-dismiss="modal">Close</button>
                        <button type="button" onClick={()=>createJob(modalRef)} className="btn btn-primary text-white">Create</button>
                    </div>
                </div>
            </div>
        </div>
        
        
        

        <div className="hiddenbar-body-ovelay"></div>
        </>
    )
}

export default Navbar