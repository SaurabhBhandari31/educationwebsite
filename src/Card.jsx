import React from 'react';
import { NavLink } from 'react-router-dom';
const Card = (study) => {
    return (
        <>
            <div className="col-md-4 col-10 mx-auto">
                <div className="card">
                    <img src={study.image} className="card-img-top" alt="courses" />
                    <div className="card-body">
                        <h5 className="card-title font-weight-bold">{study.head}</h5>
                        <p className="card-text text-muted">{study.pera}</p>
                        <NavLink to={study.btn} className="btn btn-secondary">Get Started</NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Card;