import React from 'react';
import useService from '../../hooks/useService';
import Service from './Service';

const Services = () => {
    const [services] = useService();
    return (
        <div>
            <div className='w-100 grid grid-cols-1 lg:grid-cols-3 my-6 justify-items-center items-center gap-4'>
            {
                services.map(service => <Service 
                    key={service._id}
                    service={service}
                ></Service>)
            }
            </div>
        </div>
    );
};

export default Services;