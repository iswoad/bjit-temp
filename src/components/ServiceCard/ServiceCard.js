import React from 'react';

const ServiceCard = (props) => {
    console.log(props);
    const {name, sicon} = props.service;
    return (
        <div className="col-md-3 text-center card ms-3 selectable">
            <img style={{ height: '400px' }} src={sicon} alt="services" />
            <p className="text-secondary">{name}</p>
        </div>
    );
};

export default ServiceCard;