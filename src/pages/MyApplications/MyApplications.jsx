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
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {jobApplications.map(job => <tr key={job._id}>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src={job.company_logo}
                                                alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{job.title}</div>
                                        <div className="text-sm opacity-50">{job.location}</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                {job.company}
                                <br />
                                <span className="badge badge-info badge-sm">Desktop Support Technician</span>
                            </td>
                            <td>Purple</td>
                            <th>
                                <button className="btn btn-ghost btn-xs">details</button>
                            </th>
                        </tr>)}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyApplications;