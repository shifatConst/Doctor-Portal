import React from 'react';
import Cavity from '../../../images/Cavity.png'
import Fluoride from '../../../images/Fluoride.png'
import Whitening from '../../../images/Whitening.png'
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const Services = () => {

    const servicesData = [
        {
            name: 'Fluoride Treatment',
            image: Fluoride
        },
        {
            name: 'Cavity Filling',
            image: Cavity
        },
        {
            name: 'Teath Whitening',
            image: Whitening
        }
    ]
    return (
        <section className="services-container mt-5">
            <div className="text-center">
                <h5 style={{color: '#1CC7C1'}}>OUR SERVICES</h5>
                <h2>Services We Provide</h2>
            </div>
            <div className="d-flex justify-content-center">
                <div className="row w-75 mt-5 pt-3">
                    {
                        servicesData.map(service => <ServiceDetail service={service}></ServiceDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;