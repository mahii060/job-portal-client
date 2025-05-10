import Lottie from 'lottie-react';
import React, { useContext, useState } from 'react';
import registerLottieData from '../../../src/assets/lottie/register.json'
import { AuthContext } from '../../context/AuthContext/AuthContext';

const Register = () => {
    const { createUser, setLoading, } = useContext(AuthContext)
    const [showPassword, setShowPassword] = useState(false)

    // Register new user
    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        // password validation
        // 6 character validation
        if (password.length < 6 || password.length > 20) {
            return alert("Password MUST be between 6 and 20 characters long")

        }

        // Uppercase validation
        if (!(/^(?=.*[A-Z])/).test(password)) {
            return alert("Password Must Contain a uppercase letter")

        }
        // number validation
        if (!(/^(?=.*\d)/).test(password)) {
            return alert("Password Must Contain a number")

        }

        createUser(email, password)
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col-reverse lg:flex-row-reverse">
                <div className="text-center lg:w-1/4 lg:text-left">
                    <Lottie animationData={registerLottieData}></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <h1 className="ml-8 mt-4 text-5xl font-bold">Register now!</h1>
                    <form onSubmit={handleRegister} className="card-body">
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
                            <button type='submit' className="btn btn-primary">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;