import React from 'react';
import { useLoaderData } from 'react-router-dom';

const JobDetails = () => {
    const job = useLoaderData();
    // console.log(job);
    return (
        <div>
            <h1 className="text-3xl text-center">Job Details here{job.title}</h1>
        </div>
    );
};

export default JobDetails;