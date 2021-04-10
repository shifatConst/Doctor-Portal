import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faPhone, faClock, faMapMarker } from '@fortawesome/free-solid-svg-icons'

const infosData = [
    {
        title: 'Opening Hours',
        description: 'We are open 24x7 days',
        icon: faClock,
        background: 'primary'
    },
    {
        title: 'Visit Our Location',
        description: 'Brooklyn, NY 10036, United States',
        icon: faMapMarker,
        background: 'dark'
    },
    {
        title: 'Contact Us Now',
        description: '+000123456789',
        icon: faPhone,
        background: 'primary'
    }
]
const BusinessInfo = () => {
    return (
        <section className="d-flex justify-content-center">
            <div className="row w-75">
                {
                    infosData.map(info => <InfoCard info={info}></InfoCard>)
                }
            </div>
        </section>
    );
};

export default BusinessInfo;