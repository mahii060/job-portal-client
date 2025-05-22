import React from 'react';

const AddJob = () => {
    return (
        <div>
            <h1 className='text-4xl font-semibold text-center text-green-600'>Add a new job here</h1>
            <form className="card-body max-w-3xl mx-auto">
                <fieldset className="fieldset">
                    {/* Job title */}
                    <label className="label">Job Title</label>
                    <input type="text" name='title' className="input w-full" placeholder="Job Title" />
                    {/* Job location */}
                    <label className="label">Job Location</label>
                    <input type="text" name='location' className="input w-full" placeholder="Job Location" />
                    {/* Job type */}
                    <label className="label">Job Type</label>
                    <select name='jobType' defaultValue="Pick a Job type" className="select w-full">
                        <option disabled={true}>Select a Job type</option>
                        <option>Full-time</option>
                        <option>Part-time</option>
                        <option>Intern</option>
                    </select>
                    {/* Job Category */}
                    <label className="label">Job Field</label>
                    <select name='jobCategory' defaultValue="Pick a job field" className="select w-full">
                        <option disabled={true}>Select a Job field</option>
                        <option>Engineering</option>
                        <option>Marketing</option>
                        <option>Finance</option>
                    </select>
                    {/* Salary Range */}
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 items-end'>
                        <div>
                            <label className="label">Salary Range</label>
                            <input type="text" name='min' className="input w-full" placeholder="Min" />
                        </div>
                        <div>
                            {/* <label className="label">Max</label> */}
                            <input type="text" name='max' className="input w-full" placeholder="Max" />
                        </div>
                        <div>
                            {/* <label className="label">Currency</label> */}
                            <select name='currency' defaultValue="Currency" className="select w-full">
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
                    <input type="text" name='companyName' required className="input w-full" placeholder="Company Name" />

                    {/* Submit job */}
                    <button className="btn btn-neutral mt-4">Submit Job</button>
                </fieldset>
            </form>
        </div>
    );
};

export default AddJob;