import React, { useContext, useState } from 'react';
import Lottie from 'lottie-react';

import signInLottie from '../../../src/assets/lottie/signInLottie.json'
import { AuthContext } from '../../context/AuthContext/AuthContext';
import { useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from '../shared/SocialLogin';


const SignIn = () => {
    const { signInUser, setLoading } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    console.log(location);

    const [showPassword, setShowPassword] = useState(false)
    const handleSignIn = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signInUser(email, password)
            .then(result => {
                setLoading(false)
                navigate(location?.state || '/')
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col-reverse lg:flex-row-reverse">
                <div className="text-center lg:w-[600px] lg:text-left">
                    <Lottie animationData={signInLottie}></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <h1 className="ml-8 mt-4 text-5xl font-bold">Sign In now!</h1>
                    <form onSubmit={handleSignIn} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>

                            <div>
                                <input type={showPassword ? "text" : "password"} name='password' placeholder="password" className="input input-bordered" required />
                                <span
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="cursor-pointer text-base font-semibold text-blue-600 my-2"
                                >
                                    {showPassword ? "Hide" : "Show"}
                                </span>
                            </div>

                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary w-full">Sign In</button>
                        </div>
                    </form>
                    <SocialLogin />
                </div>
            </div>
        </div>
    );
};

export default SignIn;