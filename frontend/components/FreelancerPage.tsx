"use client";

import { useContext, useEffect } from 'react';
import { FREELANCER_CONTEXT } from '../API/MarketPlace';
import FreelancerProps from "@/app/interfaces/freelancerProps";

function FreelancerPage({ address }: any) {
  // import context APIs
  const {
    account,
    hireFreelancer,
    retrieveUncompletedJobsByEmployer,
    jobs,
    freelancerDetails,
    currentFreelancerDetails,
    employerDetails,
    currentEmployerDetails,
  } = useContext(FREELANCER_CONTEXT) as FreelancerProps;

  useEffect(() => {
    freelancerDetails(address.address);
    if (account) {
      employerDetails(account); // retrieve current employer details
      retrieveUncompletedJobsByEmployer(account); // retrieve uncompleted jobs by employer
    }

  });

  return (
    /* render freelancer details */
    <>
      {currentFreelancerDetails ? (
        <div className="container-fluid">
          {/* styles */}
          <style>
            {`
              .breadcumb-section {
                background-color: #eafbef;
                padding-top: 80px !important;
              }
              .service-details {
                background-color: white;
              }
              a {
                text-decoration: none;
                color: grey;
              }
            `}
          </style>
          <div className="row my-5">
            <div className="col-md-6">
              <div className="card" style={{ width: '18rem' }}>
                {/* <img src={currentFreelancerDetails?.images[1]} 
                 className="card-img-top" alt="Freelancer Profile" /> */}
                <div className="card-header">{currentFreelancerDetails.name}</div>
                <div className="card-body">
                  {/* <h5 className="card-title"></h5> */}
                  <p className="card-text">{currentFreelancerDetails.gigTitle}</p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Country: {currentFreelancerDetails.country}</li>
                  <li className="list-group-item">Member since {currentFreelancerDetails.registration_date}</li>
                  <li className="list-group-item">
                    Skills <br />
                    {currentFreelancerDetails.skills.split(',').map((value: any, key: any) => (
                      <span className="badge bg-secondary mx-1" key={key}>
                        {value}
                      </span>
                    ))}
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Description</h5>
                  <p className="card-text">{currentFreelancerDetails.gitDescription}</p>
                  <p className="card-text">Starting price: 
                    <span className="badge bg-warning mx-1">
                      {currentFreelancerDetails.starting_price.toString()} CELO
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h3 className="text-warning text-center">User does not exist</h3>
      )}
    </>
  );
}

export default FreelancerPage;
