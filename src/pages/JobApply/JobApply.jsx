import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useAuth from '../../component/useAuth';
import Swal from "sweetalert2"

const JobApply = () => {
    const { id } = useParams()
    const { user } = useAuth()
    const navigate = useNavigate()
    // console.log(id);
    const submitJobApplication = event => {
        event.preventDefault()
        const form = event.target;
        const linkedIn = form.linkedIn.value;
        const github = form.github.value;
        const resume = form.resume.value;

        const jobApplication = {
            job_id: id,
            applicant_email: user?.email,
            linkedIn,
            github,
            resume,
        }

        fetch('http://localhost:5000/job-applications', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(jobApplication)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: "Congratulations!",
                        text: "You successfully applied to the job!",
                        icon: "success"
                    });
                    form.reset()
                    navigate('/myApplications')
                }
            })

    }
    return (

        <div className="card bg-base-100 mx-auto w-full max-w-xl shadow-2xl">
            <div className="card-body">
                <h1 className="text-5xl font-bold text-center">Apply Job and Good Luck</h1>
                <form onSubmit={submitJobApplication}>
                    <fieldset className="fieldset">
                        <label className="label">LinkedIn URL</label>
                        <input type="url" name='linkedIn' className="input w-full" required placeholder="LinkedIn URL" />
                        <label className="label">Github URL</label>
                        <input type="url" name='github' className="input w-full" required placeholder="Github URL" />
                        <label className="label">Resume URL</label>
                        <input type="url" name='resume' className="input w-full" required placeholder="Resume URL" />
                        <button type='submit' className="btn btn-primary mt-4">Apply</button>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default JobApply;