import React from 'react';
import { FaLocationArrow } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const JobCard = ({ job }) => {
    const { _id, title, job_title, description, company, location, requirements, salaryRange, company_logo,
        company_name } = job
    return (
        <div className="card bg-base-100 border shadow-xl">
            <div className='flex gap-4 m-4'>
                <figure>
                    <img className='w-12 h-12 object-cover rounded-md border border-blue-600'
                        src={company_logo}
                        alt="Company Logos"
                        onError={(e) => {
                            e.target.onerror = null; // prevent infinite loop if default image also fails
                            e.target.src = "https://i.pinimg.com/736x/56/3f/90/563f90e42422a6e307b161221e5636ba.jpg";
                        }}
                    />


                </figure>
                <div>
                    <h4 className="text-xl font-semibold">{company ? company : company_name}</h4>
                    <p className='flex gap-1 items-center'> <FaLocationDot className='text-gray-500' /> {location}</p>
                </div>
            </div>
            <div className="card-body">
                <h2 className="card-title">{title ? title : job_title}
                    <div className="badge badge-success">NEW</div>
                </h2>
                <p>
                    {description ? description : "A card component has a figure, a body part, and inside body there are title and actions parts"}
                </p>
                <div className="card-actions justify-end">
                    <Link to={`/jobs/${_id}`} className="btn btn-primary">Apply</Link>
                </div>
            </div>
        </div>
    );
};

export default JobCard;