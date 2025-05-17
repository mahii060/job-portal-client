import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../component/useAuth';

const SocialLogin = () => {
    const { googleSignIn, setLoading } = useAuth()
    const navigate = useNavigate()
    const location = useLocation()

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                setLoading(false)
                navigate(location?.state || '/')
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