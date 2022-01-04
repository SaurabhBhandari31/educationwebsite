import React from 'react';
import Common from './Common';
import Fotter from './Fotter';
import { NavLink } from 'react-router-dom';

const About = () => {
    return (
        <>
            <Common name="About Us" />
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
                    <div className="col-lg-4 col-10 offset-1 offset-0">
                        <div className="progress mt-4">
                            <div className="progress-bar progress-bar-striped progress-bar-animated bar1" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">HTML</div>
                        </div>
                        <div className="progress mt-4">
                            <div className="progress-bar progress-bar-striped progress-bar-animated bg-success bar2" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">DIGITAL MARKETING</div>
                        </div>
                        <div className="progress mt-4">
                            <div className="progress-bar progress-bar-striped progress-bar-animated bg-info bar3" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">SEO</div>
                        </div>
                        <div className="progress mt-4">
                            <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning bar4" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">JAVASCRIOT</div>
                        </div>
                        <div className="progress mt-4">
                            <div className="progress-bar progress-bar-striped progress-bar-animated bg-danger bar5" role="progressbar"  aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">WEBSITE DESIGNING</div>
                        </div>
                    </div>
                </div>
            </div>
            <Fotter />
        </>
    )
}

export default About;