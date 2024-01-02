"use client"

import Image from "next/image"
import { Swiper } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/bundle'
import { SwiperSlide } from 'swiper/react'
import { Navigation,Scrollbar,Autoplay } from 'swiper/modules'
import { useContext, useEffect, useRef, useState } from 'react'
import { FREELANCER_CONTEXT} from '../API/MarketPlace'
import FreelancerProps from "@/app/interfaces/freelancerProps"
import Link from "next/link"


function PopularService(){
    // import context apis
    const {
        allFreelancers,freelancers
    } = useContext(FREELANCER_CONTEXT) as FreelancerProps
    
    // swiperjs library breakpoints
    const breakpoints:Record<number , {slidesPerView :number, spaceBetween? : number}> = {
        320 :{
            slidesPerView : 1,
            spaceBetween : 20
        },
        480 :{
            slidesPerView : 2,
            spaceBetween : 20
        },
        768 :{
            slidesPerView : 3,
            spaceBetween : 30
        },
        1024 :{
            slidesPerView : 4,
            spaceBetween : 40
        }
    }

    useEffect(()=>{
        allFreelancers()
    },[freelancers])
    return (
        
        <section className="mt-5 bg-white">
        <div className="container">
            <div className="row align-items-center ">
                <div className="col-lg-9">
                    <div className="main-title">
                        <h2 className="title">Popular Services</h2>
                        <p className="paragraph">Highly popular and best-selling services of all time.</p>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="text-start text-lg-end mb-4 mb-lg-2">
                        {/* <a className="ud-btn2" href="page-service-single.html">All Categories<i
            className="fal fa-arrow-right-long"></i></a> */}
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                {/* initializing swiper library */}
                <Swiper
                    modules={[Navigation, Scrollbar,Autoplay]}
                    autoplay={{delay: 3000}}
                    slidesPerView={4}
                    breakpoints={{
                        320 :{
                            slidesPerView : 1,
                            spaceBetween : 20
                        },
                        480 :{
                            slidesPerView : 2,
                            spaceBetween : 20
                        },
                        768 :{
                            slidesPerView : 3,
                            spaceBetween : 30
                        },
                        1024 :{
                            slidesPerView : 4,
                            spaceBetween : 40
                        }
                    }}
                >

                    <div className="slider-outer-dib vam_nav_style dots_none slider-4-grid2 owl-carousel owl-theme wow fadeInUp">
                    
                    {/* render all registered freelancers */}
                        {freelancers ? 
                        freelancers.map((freelancer : any)=>(

                           <div key={freelancer.freelancerAddress}>
                            <SwiperSlide >
                            <div className="card" style={{"width":"18rem"}}>
                            <img className="card-img-top" 
                             src={freelancer.images[1]} alt="Gig Image" />

                            <div className="card-body">
                                <h4 className="card-title text-center">{freelancer.gigTitle}</h4>
                                <h5 className="card-title">{freelancer.gigTitle}</h5>
                                <p className="card-text">Starting price : {freelancer.starting_price.toString()}</p>
                                <Link className="btn btn-primary" href={'/freelancer/'+freelancer.freelancerAddress}>visit profile</Link>
                            </div>
                            </div>

                            </SwiperSlide >
                           </div>
                        )):
                        (
                           <div>
                            <h1 className="text-warning text-center"> No freelancer found </h1>
                           </div>
                        )
                    }
                       
                        
                    </div>
                    </Swiper>
                </div>
            </div>
        </div>
    </section>
    )
}

export default PopularService
