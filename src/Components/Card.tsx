// import React, { type ReactNode } from 'react'
// import { Link } from 'react-router-dom';

interface CardProps {
    owner : {
        full_name : string;
        other_info: string;
        travel_agency_name: string;
    };
}
function Card({owner} : CardProps) {
  return (
    <div className='card w-96 bg-base-100 shadow-sm'>
        <div className='card-body'>
            <h2 className='card-title'>
                {owner.full_name}
                <div className='badge badge-primary'>{owner.travel_agency_name}</div>
            </h2>
            <p>{owner.other_info}</p>
        </div>
    </div>
    
  )
}

export default Card