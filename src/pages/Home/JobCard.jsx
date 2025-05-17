import React from 'react';
import { FaLocationArrow } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const JobCard = ({ job }) => {
    const { _id, title, description, company, location, requirements, salaryRange, company_logo } = job
    return (
        <div className="card bg-base-100 border shadow-xl">
            <div className='flex gap-4 m-4'>
                <figure>
                    <img className='w-12 h-12 object-cover rounded-md border border-blue-600'
                        src={company_logo}
                        alt="Shoes" />
                </figure>
                <div>
                    <h4 className="text-xl font-semibold">{company}</h4>
                    <p className='flex gap-1 items-center'> <FaLocationDot className='text-gray-500' /> {location}</p>
                </div>
            </div>
            <div className="card-body">
                <h2 className="card-title">{title}
                    <div className="badge badge-success">NEW</div>
                </h2>
                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                <div className="card-actions justify-end">
                    <Link to={`/jobs/${_id}`} className="btn btn-primary">Apply</Link>
                </div>
            </div>
        </div>
    );
};

export default JobCard;