"use client"

import { useContext, useEffect, useRef, useState } from 'react'
import { FREELANCER_CONTEXT} from '../API/MarketPlace'
import FreelancerProps from "@/app/interfaces/freelancerProps"


function RegisterEmployer(){
    // import context apis
    const {
        account,registerEmployer,setEmployerForm,employerForm,profileImageHandler,employerDetails,currentEmployerDetails,connectWallet
    } = useContext(FREELANCER_CONTEXT) as FreelancerProps

    useEffect(()=>{
        connectWallet()
        if (account) {
            employerDetails(account) // retrieve current employer details
        }
        
    })
    return (
        <section className="our-register mt-5">

            <style jsx>
                {
                    `
                    .visible-list a{
                        color : #116E04;
                    }
                    `
                }
            </style>
        <div className="container mb-5">
            <div className="row">
                <div className="col-lg-6 m-auto wow fadeInUp" >
                    <div className="main-title text-center my-2">
                        <h2 className="title">Register as an Employer</h2>
                    </div>
                </div>
            </div>
            <div className="row wow fadeInRight" >
                <div className="col-xl-6 mx-auto">
                    <div className="log-reg-form search-modal form-style1 bgc-white p50 p30-sm default-box-shadow1 bdrs12">
                        <div className="mb30">
                            <h4> {currentEmployerDetails?.registered? "Your Profile Information" : "Let's create your account!"}</h4>
                        </div>

                        {/* username */}
                        <div className="my-2">
                            <label className="form-label fw500 dark-color">Username</label>
                            {currentEmployerDetails?.registered? (
                                <input type="text" 
                                onChange={(e)=>setEmployerForm({...employerForm, name : e.target.value})} 
                                readOnly={currentEmployerDetails?.registered} 
                                value={currentEmployerDetails.name} 
                                className="form-control" placeholder="jonedoe" />
                            ) : (
                                <input type="text" 
                                onChange={(e)=>setEmployerForm({...employerForm, name : e.target.value})} 
                                className="form-control" placeholder="jonedoe" />
                            )}
                           
                        </div>

                        {/* country */}
                        <div className="my-2">
                            <label className="form-label fw500 dark-color">Country</label>
                            
                            {currentEmployerDetails?.registered? (
                                <input type="text" 
                                onChange={(e)=>setEmployerForm({...employerForm, country : e.target.value})} 
                                readOnly={currentEmployerDetails?.registered} 
                                value={ currentEmployerDetails.country} 
                                className="form-control" placeholder="jonedoe" />
                            ) : (
                                <input type="text" 
                                onChange={(e)=>setEmployerForm({...employerForm, country : e.target.value})} 
                                className="form-control" placeholder="Nigeria" />
                            )}

                        </div>

                        {/* industry */}
                        <div className="my-2">
                            <label className="form-label fw500 dark-color">Industry</label>
                             
                            {currentEmployerDetails?.registered? (
                                <input type="text" 
                                onChange={(e)=>setEmployerForm({...employerForm, industry : e.target.value})} 
                                readOnly={currentEmployerDetails?.registered} 
                                value={currentEmployerDetails.industry} 
                                className="form-control" placeholder="Finance, Technology, Agriculture" />
                            ) : (
                                <input type="text" 
                                onChange={(e)=>setEmployerForm({...employerForm, industry : e.target.value})} 
                                className="form-control" placeholder="Finance, Technology, Agriculture" />
                            )}
                            
                        </div>

                        {/* profile picture */}
                        <div className="my-2" style={{'display' : currentEmployerDetails?.registered ? 'none' : 'block'}}>
                            <label className="form-label fw500 dark-color">Profile Picture</label>
                            <input type="file" onChange={(e)=>profileImageHandler(e)} className="form-control" />
                        </div> 

                        {/* submit button */}
                        <div className="d-grid mb20">
                            <button style={{'display' : currentEmployerDetails?.registered ? 'none' : 'block'}}
                             className="btn btn-primary" disabled={currentEmployerDetails?.registered}
                              onClick={()=>registerEmployer()} type="button">Create Account <i
              className="fal fa-arrow-right-long"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default RegisterEmployer