import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../pages/shared/Navbar';
import Footer from '../pages/shared/Footer';

const MainLayout = () => {
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