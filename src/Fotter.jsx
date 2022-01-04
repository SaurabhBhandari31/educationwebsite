import React from 'react';
import { NavLink } from 'react-router-dom';
const Fotter = () => {
    return (
        <>

            <div className="container-fluid footer mt-2">
                <div className="row">
                    <div className="col-lg-3 col-md-3 col-12 mt-2 footerdiv">
                        <h3 className="fhead">Education</h3>
                        <p className="fpera">Some peragraph goes here goes here. Some peragraph goes here goes
                            here Some peragraph goes here
                            goes here Some peragraph goes here goes here. Some peragraph goes here goes here Some peragraph
                            goes here.
                        </p>
                    </div>
                    <div className="col-lg-3 col-md-3 col-12 mt-2 footerdiv">
                        <h3 className="fhead">Quick Links</h3>
                        <NavLink to="/"><p className="fpera">Home</p></NavLink>
                        <NavLink to="/about"><p className="fpera">About</p></NavLink>
                        <NavLink to="/service"><p className="fpera">Servies</p></NavLink>
                        <NavLink to="/contact"><p className="fpera">Conatct us</p></NavLink>
                    </div>
                    <div className="col-lg-3 col-md-3 col-12 mt-2 footerdiv">
                        <h3 className="fhead">Have a Questions</h3>
                        <p className="fpera">landour clock tower Mussoorie , Dehradun , Uttarakhand 248179</p>
                        <p className="fpera">bhandarisaurabh@gmail.com</p>
                        <p className="fpera">+91 8979991594</p>
                    </div>
                </div>
                <hr/>
                <p className="lastline text-center text-primary">Copyright ©2021 All rights reserved | This template is made by myself</p>
            </div>
        </>
    )
}
export default Fotter;
