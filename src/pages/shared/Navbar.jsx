import { Link, NavLink } from 'react-router-dom';
import jobIcon from "../../assets/icons/jobPortal2.png"
import useAuth from '../../component/useAuth';

const Navbar = () => {
    const { user, signOutUser, setLoading } = useAuth();
    // console.log(user);
    const handleSignOut = () => {
        signOutUser()
            .then(() => {
                setLoading(false)
            })
            .catch(error => {
                console.log(error);
            })
    }
    const links = <>
        <li><NavLink to='/'>Home</NavLink> </li>
        <li><NavLink to='/addJob'>Add a Job</NavLink> </li>
        <li><NavLink to='/myApplications'>My Applications</NavLink> </li>
        <li><NavLink to='/myPostedJobs'>My Posted Jobs</NavLink> </li>
    </>
    return (
        <div className="navbar bg-blue-50 rounded ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost text-xl">
                    <img src={jobIcon} className='w-8 md:w-12' alt="" />
                    <h3 className=' md:text-3xl text-gray-700 font-semibold'>Job Portal</h3>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <>
                        <button onClick={handleSignOut} className="btn btn-error btn-sm md:btn-md">Sign Out</button>
                    </> : <>
                        <Link to='/register' className="link link-primary">Register</Link>
                        <Link to='/signIn' className="btn btn-success">Sign In</Link>
                    </>
                }
            </div>
        </div>
    );
};

export default Navbar;