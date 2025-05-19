import React, { useEffect, useState } from 'react';
import useAuth from '../../component/useAuth';

const MyApplications = () => {
    const { user, setLoading } = useAuth()
    const [jobApplications, setJobApplications] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/job-applications?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setJobApplications(data)
                setLoading(false)
            })
    }, [user?.email])


    return (
        <div>
            <h3 className='text-center text-9xl font-black text-green-600'>{jobApplications.length} </h3>
        </div>
    );
};

export default MyApplications;