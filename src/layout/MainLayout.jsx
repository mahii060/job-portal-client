import React, { useContext } from 'react';
import { Outlet, } from 'react-router-dom';
import Navbar from '../pages/shared/Navbar';
import Footer from '../pages/shared/Footer';
import Loader from '../component/Loader';
import { AuthContext } from '../context/AuthContext/AuthContext';

const MainLayout = () => {
    const { loading } = useContext(AuthContext)

    if (loading) return <Loader />

    return (
        <div className='max-w-7xl mx-auto min-h-screen flex flex-col'>
            <div className='h-[65px]'>
                <Navbar />
            </div>
            <div className='flex-1'>
                <Outlet></Outlet>
            </div>
            <div className='h-[220px]'>
                <Footer />
            </div>
        </div>
    );
};

export default MainLayout;