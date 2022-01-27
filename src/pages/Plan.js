import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

function Plan() {
    return (
        <main id="main">
            <section className="breadcrumbs">
                <div className="container">
                    <div className="d-flex justify-content-between align-items-center">
                        <h2>Our Plans</h2>
                         <ol>
                            <li><Link to="/">Home</Link></li>
                            <li>Plans</li>
                        </ol>
                    </div>

                </div>
            </section>

            <section className="welcome section">
            <div className="container  py-5">
                <div className="row ">
                    <div className="col-lg12 col-md-12 d-flex align-items-center  aos-init aos-animate" ata-aos="fade-in ">
                        <div className=" section-title ">
                            <h2>Plans</h2>
                            <p className="font-23">Kare sabse phle apni dekhbal. Paye 360 degree medical care,  swastha beema aur dhurghatna beema</p>
                            <p>Rs. 3/daily se shuru.</p>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 d-flex align-items-stretch">
                        <div className="plan-card card bg-warning border-0 rounded-0 shadow">
                            <div className="card-header text-center text-white border-0">
                                <h2>Unlimited Doctor On Call Consultation for family</h2>
                            </div>
                            <div className="card-body bg-white">
                                <h5>Benefits:</h5>
                                <ul className="list-unstyled">
                                    <li> <i className="fa fa-lg fa-check-circle"></i> 24*7 doctor se baat kar sakte h</li>
                                    <li> <i className="fa fa-lg fa-check-circle"></i> 20% discount lab test aur medicnes pe</li>
                                </ul>
                                <hr/>
                                <h5>Service hours:</h5>
                                <ul className="list-unstyled">
                                    <li> <i className="fa fa-lg fa-check-circle"></i> 24*7 365 days (excluding some blackout days)</li>
                                </ul>
                                <hr/>
                                <h5>Empaneled doctors:</h5>
                                <ul className="list-unstyled">
                                    <li> <i className="fa fa-lg fa-check-circle"></i> MBBS or MD medicine or equivalent</li>
                                </ul>
                                <hr/>
                                <h5>Specialities:</h5>
                                <ul className="list-unstyled">
                                    <li> <i className="fa fa-lg fa-check-circle"></i> Acidity, Breathlessness, Cold & Fever, COVID, Dental, Diabetes, Eye Related, Hairfall, Hypertension, Diarrhea, Skin, Nose, etc.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 d-flex align-items-stretch">
                        <div className="plan-card card bg-success border-0 rounded-0 shadow">
                            <div className="card-header text-center text-white border-0">
                                <h2>Hospital <br/>Cash </h2>
                            </div>
                            <div className="card-body bg-white">
                                <h5>Benefits:</h5>
                                <ul className="list-unstyled">
                                    <li> <i className="fa fa-lg fa-check-circle"></i> Apki income loss ko protect karta h</li>
                                    <li> <i className="fa fa-lg fa-check-circle"></i> Kisi bhi hospital m admit ho sakte h pure desh m</li>
                                    <li> <i className="fa fa-lg fa-check-circle"></i> Hospital Cash Benefits 50 days/year </li>
                                    <li> <i className="fa fa-lg fa-check-circle"></i> Existing medical policy pe nirbhar nai</li>
                                </ul>
                                <hr/>
                                <h5>Excursions:</h5>
                                <ul className="list-unstyled">
                                    <li> <i className="fa fa-lg fa-check-circle"></i>30 days wait period in case of non accidentals hospitalisation</li>
                                    <li> <i className="fa fa-lg fa-check-circle"></i> 12 months waiting period for diseases (Click here for more information)</li>
                                    <li> <i className="fa fa-lg fa-check-circle"></i> Medically unnecessary treatments</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 d-flex align-items-stretch">
                        <div className="plan-card card bg-info border-0 rounded-0 shadow">
                            <div className="card-header text-center text-white border-0">
                                <h2>Personal Accident<br/> Insurance </h2>
                            </div>
                            <div className="card-body bg-white">
                                <h5>Benefits:</h5>
                                <ul className="list-unstyled">
                                    <li> <i className="fa fa-lg fa-check-circle"></i> Accident coverage phele din se</li>
                                    <li> <i className="fa fa-lg fa-check-circle"></i> Provides financial security to your family and loved ones.</li>
                                    <li> <i className="fa fa-lg fa-check-circle"></i> Aasan claim process</li>
                                </ul>
                                <hr/>
                                <h5>Excursions:</h5>
                                <ul className="list-unstyled">
                                    <li> <i className="fa fa-lg fa-check-circle"></i> Any Injury while performing duty in army, navy, air force, paramilitary force, police or any other such institution.</li>
                                    <li> <i className="fa fa-lg fa-check-circle"></i> Intentional self- Injury, suicide or attempted suicide</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </section>     

        </main>
    )
}

export default Plan;