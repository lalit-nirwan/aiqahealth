import React, { useState } from 'react';
import axios from 'axios';
import About from './About'
import Individual from '../forms/Individual';
import Business from '../forms/Business';
import Waitlist from '../forms/Waitlist';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

function Home1() {

  const [data, setData] = useState('Hello')

  const [formValues, setFormValues] = useState({
    name: '',
    mobile: '',
    email: '',
    pin: '',
    message: ''
  });

  function handleClick(value) {
    setData(value);
  }


  function handleChange(name, value) {
    setFormValues({ ...formValues, name: value })
  }


  function submitClick() {

    axios.post(global.config.apiUrl + 'lead', formValues)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

return (
     <div>
      <section id="hero" className="pt-0">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className=" col-lg-8 offset-lg-2" data-aos=" fade-right ">
              <div className="heading text-center">
              <h1>Aiqa Health</h1>
              <h5>Sampoorna swasthya surakhsha, sirf Rs 6 per day per member</h5>
              <a href="tel:1234567890" className="btn-border">Call back paayein</a>
              <Waitlist></Waitlist>
              </div>
            </div>
            {/* <div className=" col-lg-5 order-1 order-lg-2 hero-img " data-aos=" fade-left ">
              <img src=" assets/img/banner.png " className=" img-fluid " alt=" " />
            </div> */}
          </div>
        </div>

      </section>
      <main id="main mt-5 ">
        {/* <section className="section-bg welcome section pb-0">
          <div className="container ">
            <div className="row ">
              <div className="col pb-4" ata-aos="fade-in ">
                <h3 data-aos="fade-in " data-aos-delay="100 ">Hey, nice to meet you. We're aiqahealth</h3>
                <p className="font-23" data-aos="fade-in " data-aos-delay="100 ">Welcome to care that meets your need.
                  See how we are building a better experience for people just like you.</p>
              </div>
            </div>
          </div>
        </section>
        <section id=" team " className=" team section-bg ">
          <div className=" container ">

            <div className=" row row-cols-1 row-cols-md-3 fadeInUp ">

              <div className=" col">
                <div className=" member" data-aos-delay="100 ">
                  <div className=" heading col-12 pt-4 text-left ">Unlimited Doctor Consultation</div>
                  <img src=" assets/img/online-doctor.PNG " className=" img-fluid " alt=" " />
                </div>
              </div>

              <div className=" col ">
                <div className=" member aos-init aos-animate" data-aos=" fade-up " data-aos-delay=" 200 ">
                  <div className=" heading col pt-4 text-left "> ₹0 Upfront Cost Health Cover 
                 
                  </div>

                  <img src=" assets/img/hospitalization.png " className="img-fluid  " alt=" " />
                </div>
              </div>

              <div className=" col ">
                <div className=" member aos-init aos-animate " data-aos=" fade-in " data-aos-delay=" 300 ">
                  <div className=" heading col pt-4 text-left ">Digital Lifestyle and Health Tracker </div>


                  <img src=" assets/img/checkup.PNG" className=" img-fluid " alt=" " />
                </div>
              </div>
            </div>

          </div>
        </section> */}
        {/* <section className="section-plan  section ">
          <div className="container ">
            <div className="row ">

              <div className="col-lg-9 col-md-9 d-flex align-items-center  aos-init aos-animate" ata-aos="fade-in ">
              <div className=" section-title ">
                <h2>Plans</h2>
                <p className="font-23">Kare sabse phle apni dekhbal. Paye 360 degree medical care,  swastha beema aur dhurghatna beema</p>
                <p>Rs. 2.5/daily se shuru.</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 d-flex align-items-center  aos-init aos-animate " ata-aos="fade-in ">
              <Link to="/plan" className="btn-get-started">View Our Plan</Link>
              </div>
            </div>
          </div>
        </section>             */}
        <section className="welcome section">
            <div className="container  py-5">
                <div className="row ">
                    <div className="col-lg12 col-md-12 d-flex align-items-center  aos-init aos-animate" ata-aos="fade-in ">
                        <div className=" section-title ">
                            <h2>Hey, nice to meet you. We're aiqahealth</h2>
                            <p className="font-23">Welcome to care that meets your need. See how we are building a better experience for people just like you.</p>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 d-flex align-items-stretch">
                        <div className="plan-card card bg-warning border-0 rounded-0 shadow">
                            <div className="card-header text-center text-white border-0">
                              <img src="assets/img/icon/1.png " alt="Img"/>
                                <h2>Unlimited doctor consultations </h2>
                            </div>
                            <div className="card-body bg-white">
                                <ul className="list-unstyled">
                                    <li> <i className="fa fa-lg fa-check-circle"></i> 20 specialties </li>
                                    <li> <i className="fa fa-lg fa-check-circle"></i> 24/7 availability</li>
                                    <li> <i className="fa fa-lg fa-check-circle"></i> Visit our clinic or use our app</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 d-flex align-items-stretch">
                        <div className="plan-card card bg-success border-0 rounded-0 shadow">
                            <div className="card-header text-center text-white border-0">
                            <img src="assets/img/icon/2.png " alt="Img"/>
                                <h2>Swasthya beema taaki family rahein nishchint</h2>
                            </div>
                            <div className="card-body bg-white">
                                <ul className="list-unstyled">
                                    <li> <i className="fa fa-lg fa-check-circle"></i> Daily cash for 50 days</li>
                                    <li> <i className="fa fa-lg fa-check-circle"></i> All hospitals covered</li>
                                    <li> <i className="fa fa-lg fa-check-circle"></i> No bills required</li>
                                </ul>
                               
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 d-flex align-items-stretch">
                        <div className="plan-card card bg-info border-0 rounded-0 shadow">
                            <div className="card-header text-center text-white border-0">
                            <img src="assets/img/icon/3.png " alt="Img"/>
                                <h2>Accident me paiso ki fikar nahi </h2>
                            </div>
                            <div className="card-body bg-white">
                                <ul className="list-unstyled">
                                    <li> <i className="fa fa-lg fa-check-circle"></i> 10 lac Rs. tak surakhsit</li>
                                    <li> <i className="fa fa-lg fa-check-circle"></i> Covers disability and death </li>
                                </ul>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </section> 
            <section className="section-plan section-bg section ">
              <div className="container ">
                <div className="row ">
                  <div className="col-lg-9 col-md-9 d-flex align-items-center  aos-init aos-animate" ata-aos="fade-in ">
                  <div className=" section-title ">
                    <h2>Plans</h2>
                    <p className="font-23">All inclusive plans starting from 3 Rs. per day per member.</p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3 d-flex align-items-center  aos-init aos-animate " ata-aos="fade-in ">
                  <Link to="/plan" className="btn-get-started">View Our Plan</Link>
                  </div>
                </div>
              </div>
            </section> 
        <section className="screenApp">
          <div className=" container " data-aos=" zoom-in ">
             <div className=" row align-items-center">
              <div className="col-lg-12">
                <div className=" section-title ">
                  <h2>Financial Suraksha 4 easy steps mein</h2>
                </div>
               </div>
               <div className="col-lg-2 "></div>
               <div className="col-lg-3 ">
                  <div className="plan-card card bg-info border-0 rounded-0 shadow">
                    <div className="card-header text-center text-white border-0">
                      <h2>Call karein ya humari website/app par plan chunein  </h2>
                    </div>
                  </div>
                  <br/>
                   <div className="plan-card card bg-success border-0 rounded-0 shadow">
                    <div className="card-header text-center text-white border-0">
                      <h2>Apni <br/>information<br/> bhariye  </h2>
                    </div>
                  </div>
                  <br/>
                  <div className="plan-card card bg-warning border-0 rounded-0 shadow">
                    <div className="card-header text-center text-white border-0">
                       <h2>Online <br/>payment<br/> kariye  </h2>
                    </div>
                  </div>
                  <br/>
                   <div className="plan-card card bg-danger border-0 rounded-0 shadow">
                    <div className="card-header text-center text-white border-0">
                       <h2>Rahiye <br/>worry<br/> free  </h2>
                    </div>
                  </div>
               </div>

               <div className="col-lg-5 ">
               <div className="iphoneBack">
                  <div className="screen">
                    
                   <div className="swiper-container">
                      
                      <div className="swiper-wrapper">
                        <div className="swiper-slide slide1">
                          <img src="assets/img/screen/1.jpg"/>
                         </div>
                        <div className="swiper-slide slide2">
                        <img src="assets/img/screen/2.jpg"/>
                        </div>
                        
                      </div>
                      <div className="swiper-pagination"></div>

                    </div>
                  </div>
                </div>
               </div>
               <div className="col-lg-2 "></div>
            </div>
          </div>
        </section>

        <section className="section section-bg">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section-title">
                    <h2>Aiqahealth vs Standard health insurance</h2>
                  </div>
                   <div className="table-responsive ">
                      <table className="table table-bordered ">
                          <thead>
                            <tr>
                              <th>Standard</th>
                              <th>Aiqahealth</th>
                            </tr>
                            <tr>
                              <td>Expensive, Mostly premium starts from Rs. 8,000/- yearly</td>
                              <td>Cheap, Plan starts from Rs. 1999/- yearly</td>
                            </tr>
                            <tr>
                              <td>Paid doctor consultation</td>
                              <td>Unlimited free doctor consultation</td>
                            </tr>
                            <tr>
                              <td>Bills required in case of hospitalisation</td>
                              <td>No Bills required in case of hospitalisation</td>
                            </tr>
                            <tr>
                              <td>Difficult claim process</td>
                              <td>Digital first, Very easy claim process</td>
                            </tr>
                          </thead>
                      </table>
                    </div>
                    </div>
              </div>
            </div>
        </section>
      <section className="section">
        <div className=" container " data-aos=" zoom-in ">
          <div className=" row justify-content-around">
            <div className="col-lg-12 ">
              <div className=" section-title text-center">
                <h2>News</h2>
              </div>
            </div>
            <div className="col-lg-4 ">
              <div className=" media-news">
              <Link to="/" target="_blank">
                <img src="assets/img/media/1.jpg" alt="Media"/>
                <i className="fa fa-eye" aria-hidden="true"></i>
              </Link>
              </div>
            </div>
            <div className="col-lg-4 ">
              <div className=" media-news">
              <Link to="/" target="_blank">
                <img src="assets/img/media/2.jpg" alt="Media"/>
                <i className="fa fa-eye" aria-hidden="true"></i>
              </Link>
              </div>
            </div>
            <div className="col-lg-4 ">
              <div className=" media-news">
              <Link to="/" target="_blank">
                <img src="assets/img/media/3.jpg" alt="Media"/>
                <i className="fa fa-eye" aria-hidden="true"></i>
              </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section customer-feedback section-bg">
      <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className=" section-title text-center">
                    <h2>Happy Customers</h2>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="offset-lg-2  col-lg-10">
                  <div className="owl-carousel feedback-slider">

                    <div className="feedback-slider-item">
                      <img src="/assets/img/customer/customer1.jpg" className="center-block img-circle" alt="Customer"/>
                      <h3 className="customer-name">Lisa Redfern</h3>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. It is a long established fact that a reader will be distracted by the readable its layout.</p>
                      <span className="light-bg customer-rating" data-rating="5">	5<i className="fa fa-star"></i></span>
                    </div>
                    <div className="feedback-slider-item">
                      <img src="assets/img/customer/customer2.jpg" className="center-block img-circle" alt="Customer"/>
                      <h3 className="customer-name">Cassi</h3>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. It is a long established fact that a reader will be distracted by the readable its layout.</p>
                     
                    </div>
                    <div className="feedback-slider-item">
                      <img src="assets/img/customer/customer3.jpg" className="center-block img-circle" alt="Customer Feedback"/>
                      <h3 className="customer-name">Md Nahidul</h3>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. It is a long established fact that a reader will be distracted by the readable its layout.</p>
                    
                    </div>
                  </div>
                 
                
                </div>
              </div>
            </div>
      </section>
      <section className="section ">
        <img src="assets/img/plan-banner.jpg" alt="Banner Plan"/>
      </section>
      <section className="section ">
          <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className=" section-title text-center">
                    <h2>Download Application</h2>
                    <Link className="storebtn" to="https://apps.apple.com/in/app/aiqahealth/id1588240478" target="_blank"><i class="fa fa-apple" aria-hidden="true"></i> Store</Link>
                    <Link className="storebtn" to="https://play.google.com/store/apps/details?id=com.aiqahealth" target="_blank"><i class="fa fa-android" aria-hidden="true"></i>  Store </Link>
                  </div>
                </div>
              </div>
              
            </div>
        </section>


        {/* <section id="services" className="services section-bg">
          <div className="container aos-init aos-animate" data-aos="fade-up">

            <div className="section-title">
              <h2>Aiqahealth vs Standard health insurance</h2>
            </div>

            <div className="row">
              <div className="col-lg-6 col-md-6   aos-init aos-animate" data-aos="zoom-in" data-aos-delay="100">
                <div className="icon-box iconbox-blue">
                  <div className="icon">
                    <img src="assets/img/upfront-premium.png" className="img-responsive">
                    </img>
                  </div>
                  <h4><a href="">Expensive, Mostly premium starts from Rs. 8,000/- yearly </a></h4>
                  <p>Cheap, Plan starts from Rs. 1999/- yearly</p>
                </div>
              </div>

              <div className="col-lg-6 col-md-6 aos-init aos-animate" data-aos="zoom-in" data-aos-delay="200">
                <div className="icon-box iconbox-orange ">
                  <div className="icon">
                    <img src="assets/img/co-pay.png" className="img-responsive">
                    </img>

                  </div>
                  <h4><a href="">Paid doctor consultation </a></h4>
                  <p>Unlimited free doctor consultation</p>
                </div>
              </div>

              <div className="col-lg-6 col-md-6  aos-init aos-animate" data-aos="zoom-in" data-aos-delay="300" > 
                <div className="icon-box iconbox-pink">
                  <div className="icon">
                    <img src="assets/img/disease.png" className="img-responsive">
                    </img>
                  </div>
                  <h4><a href="">Bills required in case of hospitalisation</a></h4>
                  <p>No Bills required in case of hospitalisation</p>
                </div>
              </div>

              <div className="col-lg-6 col-md-6   aos-init aos-animate" data-aos="zoom-in"  data-aos-delay="100" >
                <div className="icon-box iconbox-yellow">
                  <div className="icon">

                    <img src="assets/img/no-waiting.png" className="img-responsive">
                    </img>
                  </div>
                  <h4><a href="">Difficult claim process </a></h4>
                  <p>Digital first, Very easy claim process</p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 aos-init aos-animate" data-aos="zoom-in"
                data-aos-delay="200">
                <div className="icon-box iconbox-red">
                  <div className="icon">
                    <img src="assets/img/treatment.png" className="img-responsive">
                    </img>

                  </div>
                  <h4><a href="">Daycare treatment is covered</a></h4>
                  <p>
                  We at aiqahealth will cover your daycare treatments unlike traditional insurance which insist to cover treatment involving a minimum of 24 hours at the hospital.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 aos-init aos-animate" data-aos="zoom-in"
                data-aos-delay="300">
                <div className="icon-box iconbox-teal">
                  <div className="icon">
                    <img src="assets/img/consult.png" className="img-responsive">
                    </img>

                  </div>
                  <h4><a href="">Fit-care, not sick-care</a></h4>
                  <p>We at aiqahealth support you with digital health trackers and unlimited OPDs work to keep you fit.</p>
                </div>
              </div>

            </div>

          </div>
        </section> */}
      </main>

     


      <div className="modal" id="myModal">
        <div className="modal-dialog">
          <div className="modal-content">

            <div className="modal-header">
              <h4 className="modal-title">Request a quote </h4>
              <button type="button" className="close" data-dismiss="modal">&times;</button>
            </div>

            {data == 'individual' ?

              <Individual></Individual>
              : null}


            {data != 'individual' ?
              <Business></Business>
              : null}


          </div>
        </div>
      </div>

    </div>


  );
}
export default Home1;