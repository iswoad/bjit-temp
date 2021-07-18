import React from 'react';
import srvcImg from '../../Images/servcicon.JPG';
import ServiceCard from '../ServiceCard/ServiceCard';

const services = [
    {
        name: 'Web Application',
        sicon: srvcImg
    },

    {
        name: 'Web Application',
        sicon: srvcImg
    },

    {
        name: 'Web Application',
        sicon: srvcImg
    },

    {
        name: 'Web Application',
        sicon: srvcImg
    },

    {
        name: 'Web Application',
        sicon: srvcImg
    },

    {
        name: 'Web Application',
        sicon: srvcImg
    },

    {
        name: 'Web Application',
        sicon: srvcImg
    },

    {
        name: 'Web Application',
        sicon: srvcImg
    }
]

const Services = () => {
    return (
        <div>
            <h1 style = {{color: '#473080'}}>What kinds of project do you want to develop?</h1>
            <p>Please choose the required field below. You can choose multiple options</p>
            <div className="d-flex justify-content-center mt-5">
            {
                services.map( service => <ServiceCard service = {service}></ServiceCard>)
            }
            </div>
        </div>
    );
};

export default Services;