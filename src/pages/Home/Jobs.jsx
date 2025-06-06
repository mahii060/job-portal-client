import React, { useEffect, useState } from 'react';
import JobCard from './JobCard';

const Jobs = () => {
    const [jobs, setJobs] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/jobs')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])
    return (
        <div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-5'>
                {
                    jobs.map(job => <JobCard key={job._id} job={job} />)
                }
            </div>
        </div>
    );
};

export default Jobs;