import React, { useState } from 'react';

import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
function Footer() {

    const [data, setData] = useState('Hello')

    function handleClick(value) {
        setData(value);
      }

    return (

        <footer id="footer">

            <div className="footer-top">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-3 col-md-6 footer-contact">
                            <h4>Office Address</h4>
                            <p>
                            Doctor On Call, 5th Floor, Tower B, SAS Tower, Sector 38, Gurugram, Haryana 122001 <br /><br />
                                <strong>Phone:</strong> +91 6262 306 306<br />
                                <strong>Email:</strong> <a href="mailto:care@aiqahealth.com"></a>care@aiqahealth.com<br />
                            </p>
                        </div>

                        <div className="col-lg-3 col-md-6 footer-links">
                            <h4>Useful Links</h4>
                            <ul>
                                <li><i className="bx bx-chevron-right"></i>
                                <Link to="/">Home</Link></li>
                                <li><i className="bx bx-chevron-right"></i> 
                                <Link to="/about">About</Link></li>
                                <li><i className="bx bx-chevron-right"></i> 
                                <Link to="/plan">Plans</Link></li>
                                <li><i className="bx bx-chevron-right"></i> <Link to="/terms">Terms of Use</Link></li>
                                <li><i className="bx bx-chevron-right"></i> <Link to="/blogs">Blogs</Link></li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6 footer-links">
                            <h4>Our Plans</h4>
                            <ul>
                                <li><i className="bx bx-chevron-right"></i> <a data-toggle="modal" data-target="#myModal" onClick={() => handleClick('individual')} >Plans for
                                    Individual & Family</a></li>

                                <li><i className="bx bx-chevron-right"></i> <a onClick={() => handleClick('business')} data-toggle="modal" data-target="#myModal">Plans for
                                    business</a></li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6 footer-links">
                            <h4>Our Social Networks</h4>
                            <div className="social-links mt-3">
                                <a target="_blank" href="https://www.facebook.com/doctoroncallindia/" className="facebook"><i className="bx bxl-facebook"></i></a>
                                <a target="_blank" href="https://www.linkedin.com/company/doctoroncallindia" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="container footer-bottom clearfix">
                <div className="copyright">
                    © Copyright <strong><span>aiqahealth</span></strong>. All Rights Reserved
                </div>
                <div className="credits">
                    Designed by <a href="https://doctoroncall.org" target="_blank">Doctor On Call</a>
                </div>
            </div>
        </footer>

    )
}

export default Footer