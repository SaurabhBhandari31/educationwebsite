import React from 'react';
import img4 from './Allpages.jpg';

const Common = (props) => {
    return (
        <>
            <div className="allsection">
                <img src={img4} alt="image" className="aboutpage" />
                <h1 className="commonheading text-center"> {props.name} </h1>
            </div>
        </>
    )
}

export default Common;