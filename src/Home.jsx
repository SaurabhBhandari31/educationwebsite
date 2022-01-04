import React from 'react';
import { NavLink } from 'react-router-dom';
import img1 from './banner1.jpg';
import img3 from './banner3.jpg';
import Fotter from './Fotter';
import Form from './Form';



const Home = () => {
    return (
        <>
            {/* *****************************banner section starts here******************************* */}

            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={img1} className="d-block w-100 banner" alt="guesthouse" />
                     <h1 className="bannersubtitle">Best <span className="bantext"> Online Education</span><br/>Expertise</h1>
                     <NavLink to="/service" type="button" className="btn btn-secondary banbtn">Get Started</NavLink>
                </div>
            </div>

            {/* ******************About section starts heree******************* */}

            <div className="container heading text-center aboutdiv">
                <h1 className="text-center font-weight-bold">About us</h1>
                <p className="text-center text-muted">Welcome to Master Study!</p>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-5 col-10 offset-1 offset-0">
                        <h3>Benefits About Online Learning Expertise</h3>
                        <p className="text-muted">The time has come to bring those ideas and plans to life. This is where we really
                            begin to visualize your napkin sketches and make them into beautiful pixels.Now that your brand is
                            all dressed up and ready to party.The time has come to bring those ideas and plans to life. This is
                            where we really begin to visualize your napkin sketches and make them into beautiful pixels.Now that
                            your brand is all dressed up and ready to party.</p>
                        <NavLink to="/about" type="button" className="btn btn-secondary">Read more</NavLink>
                    </div>
                    <div className="col-lg-5 col-10 offset-1 offset-0">
                        <img src={img3} className="img-fluid mt-5 aboutsection" alt="books" />
                    </div>
                </div>
            </div>




            {/* ***************************Services section starts here***************** */}

            <div className="container heading text-center mt-5">
                <h1 className="text-center font-weight-bold">Our Services</h1>
                <p className="text-center text-muted">Explore Our Popular Online Courses</p>
            </div>
            <section className="header-extradiv">
                <div className="container mt-4">
                    <div className="row">
                        <div className="col-lg-3 col-md-3 col-12 text-center ser">
                            <h3>Online Course</h3>
                            <p className="text-muted">Some peragraph goes here goes here. Some peragraph goes here goes
                                here Some peragraph goes here
                                goes here Some peragraph goes here goes here. Some peragraph goes here goes here Some peragraph
                                goes here.</p>
                            <NavLink to="/service" type="button" className="btn btn-secondary">Read more</NavLink>
                        </div>
                        <div className="col-lg-3 col-md-3 col-12 text-center ser">
                            <h3>Earn A Certificates</h3>
                            <p className="text-muted">Some peragraph goes here goes here. Some peragraph goes here goes
                                here Some peragraph goes here
                                goes here Some peragraph goes here goes here. Some peragraph goes here goes here Some peragraph
                                goes here.</p>
                            <NavLink to="/service" type="button" className="btn btn-secondary">Read more</NavLink>
                        </div>
                        <div className="col-lg-3 col-md-3 col-12 text-center ser">
                            <h3>Learn with Expert</h3>
                            <p className="text-muted">Some peragraph goes here goes here. Some peragraph goes here goes
                                here Some peragraph goes here
                                goes here Some peragraph goes here goes here. Some peragraph goes here goes here Some peragraph
                                goes here.</p>
                            <NavLink to="/service" type="button" className="btn btn-secondary">Read more</NavLink>
                        </div>
                    </div>
                </div>
            </section>

            <Form/>


            {/* ***********************************footer starts here******************************************** */}
             <Fotter/>
        </>
    )
}

export default Home;