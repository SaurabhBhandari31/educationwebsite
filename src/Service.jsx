import React from 'react';
import Card from './Card';
import Sdata from './Sdata';
import Common from './Common';
import Fotter from './Fotter';

const Service = () => {
    return (
        <>
            <Common name=" Our Services" />
            <div className="container">
                <div className="row gy-4">
                     {
                     Sdata.map((val)=>{
                        return (
                        <Card 
                        image={val.imagesrc}
                        head={val.cardhead}
                        pera={val.cardpera}
                        btn={val.link}
                        />
                        )
                     })
                     }
                </div>
            </div>
            <Fotter />
        </>
    )
}

export default Service;