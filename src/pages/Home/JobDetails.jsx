import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const JobDetails = () => {
    const { category, description, location, salaryRange, company_logo, title, _id, responsibilities } = useLoaderData();
    // console.log();
    return (
        <div className='border rounded-lg border-red-500 p-2 my-5'>
            <div className='flex justify-center'>
                <img src={company_logo} alt="Company" className='w-36 border ' />
            </div>
            <div className='md:flex justify-around items-center my-4'>
                <h1 className="text-3xl text-center text-indigo-700">{title}</h1>
                <Link to={`/jobApply/${_id}`} className='btn btn-primary btn-xl hover:bg-blue-800 hover:text-gray-50 hover:-translate-y-1 transition-all duration-200'>Apply Now</Link>
            </div>

        </div>
    );
};

export default JobDetails;