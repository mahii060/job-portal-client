import React from 'react';

const AddJob = () => {

    const handleAddJob = e => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const initialData = Object.fromEntries(formData.entries())
        const { min, max, currency, ...newJob } = initialData;
        newJob.salary_range = { min, max, currency }
        console.log(newJob)
    }
    return (
        <div>
            <h1 className='text-4xl font-semibold text-center text-green-600'>Add a new job here</h1>
            <form onSubmit={handleAddJob} className="card-body max-w-3xl mx-auto">
                <fieldset className="fieldset">
                    {/* Job title */}
                    <label className="label">Job Title</label>
                    <input type="text" name='job_title' required className="input w-full" placeholder="Job Title" />
                    {/* Job location */}
                    <label className="label">Job Location</label>
                    <input type="text" name='location' required className="input w-full" placeholder="Job Location" />
                    {/* Job type */}
                    <label className="label">Job Type</label>
                    <select name='job_type' required defaultValue="Remote" className="select w-full">
                        <option disabled={true}>Select a Job type</option>
                        <option>Full-time</option>
                        <option>Part-time</option>
                        <option>Intern</option>
                    </select>
                    {/* Job Category */}
                    <label className="label">Job Field</label>
                    <select name='job_category' required defaultValue="Engineering" className="select w-full">
                        <option disabled={true}>Select a Job field</option>
                        <option>Engineering</option>
                        <option>Marketing</option>
                        <option>Finance</option>
                    </select>
                    {/* Salary Range */}
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 items-end'>
                        <div>
                            <label className="label">Salary Range</label>
                            <input type="number" required name='min' className="input w-full" placeholder="Min" />
                        </div>
                        <div>
                            {/* <label className="label">Max</label> */}
                            <input type="number" name='max' required className="input w-full" placeholder="Max" />
                        </div>
                        <div>
                            {/* <label className="label">Currency</label> */}
                            <select name='currency' required defaultValue="Currency" className="select w-full">
                                <option disabled={true}>Select Currency</option>
                                <option>BDT</option>
                                <option>USD</option>
                                <option>INR</option>
                            </select>
                        </div>
                    </div>
                    {/* Job Description */}
                    <label className="label">Job Description</label>
                    <textarea name='description' required className="textarea w-full" placeholder="Job Description"></textarea>

                    {/* Job Requirements */}
                    <label className="label">Job Requirements</label>
                    <textarea name='requirements' required className="textarea w-full" placeholder="Put each requirement in a new line"></textarea>
                    {/* Job Requirements */}
                    <label className="label">Job Responsibilities</label>
                    <textarea name='responsibilities' required className="textarea w-full" placeholder="Write each responsibility in a new line"></textarea>

                    {/* company name*/}
                    <label className="label">Company Name</label>
                    <input type="text" name='company_name' required className="input w-full" placeholder="Company Name" />
                    {/* Hr Name */}
                    <label className="label">HR Name</label>
                    <input type="text" name='hr_name' required className="input w-full" placeholder="HR Name" />
                    {/* Hr Email */}
                    <label className="label">HR Email</label>
                    <input type="email" name='hr_email' required className="input w-full" placeholder="HR Email" />
                    {/* Company logo URL */}
                    <label className="label">Company Logo URL</label>
                    <input type="url" name='company_logo' required className="input w-full" placeholder="Company Logo URL" />
                    {/* Submit job */}
                    <button className="btn btn-neutral mt-4">Submit Job</button>
                </fieldset>
            </form>
        </div>
    );
};

export default AddJob;