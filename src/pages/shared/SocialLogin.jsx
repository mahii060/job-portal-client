import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext/AuthContext';

const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext)
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className='mt-3'>
            <div className="divider">OR</div>
            <button onClick={handleGoogleSignIn} className='btn btn-primary w-full'>Google Login</button>
        </div>
    );
};

export default SocialLogin;