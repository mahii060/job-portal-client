import React from 'react';
import marketingIcon from '../../assets/icons/marketing.png'
import customerHelp from '../../assets/icons/customerHelp.png'
import financeIcon from '../../assets/icons/finance.png'
import software from '../../assets/icons/software.png'
import humanResource from '../../assets/icons/humanResource.png'

const Categories = () => {
    return (
        <div className='my-16 '>
            <div className='text-center space-y-3'>
                <h1 className='text-4xl font-bold text-slate-800'>Browse by Category</h1>
                <h4 className='text-lg font-semibold text-gray-500'>Find the job that is perfect for you. about 800+ new jobs everyday</h4>
            </div>
            <div className='md:flex gap-4 justify-between mt-10'>
                <div className='flex justify-center items-center gap-3 border hover:border-blue-300 transition-transform duration-700 hover:shadow-lg rounded-2xl py-4 px-2 hover:-translate-y-1'>
                    <img src={marketingIcon} className='w-10 h-10' alt="" />
                    <div>
                        <h3 className="text-base font-bold">Marketing and Sale</h3>
                        <p className='text-sm text-gray-500 font-medium'>1526 Jobs Available</p>
                    </div>
                </div>
                <div className='flex justify-center items-center gap-3 border hover:border-blue-300 transition-transform duration-700 hover:shadow-lg rounded-2xl py-4 px-2 hover:-translate-y-1'>
                    <img src={financeIcon} className='w-10 h-10' alt="" />
                    <div>
                        <h3 className="text-base font-bold">Finance</h3>
                        <p className='text-sm text-gray-500 font-medium'>1526 Jobs Available</p>
                    </div>
                </div>
                <div className='flex justify-center items-center gap-3 border hover:border-blue-300 transition-transform duration-700 hover:shadow-lg rounded-2xl py-4 px-2 hover:-translate-y-1'>
                    <img src={software} className='w-10 h-10' alt="" />
                    <div>
                        <h3 className="text-base font-bold">Software</h3>
                        <p className='text-sm text-gray-500 font-medium'>1526 Jobs Available</p>
                    </div>
                </div>
                <div className='flex justify-center items-center gap-3 border hover:border-blue-300 transition-transform duration-700 hover:shadow-lg rounded-2xl py-4 px-2 hover:-translate-y-1'>
                    <img src={humanResource} className='w-10 h-10' alt="" />
                    <div>
                        <h3 className="text-base font-bold">Human Resource</h3>
                        <p className='text-sm text-gray-500 font-medium'>1526 Jobs Available</p>
                    </div>
                </div>
                <div className='flex justify-center items-center gap-3 border hover:border-blue-300 transition-transform duration-700 hover:shadow-lg rounded-2xl py-4 px-2 hover:-translate-y-1'>
                    <img src={customerHelp} className='w-10 h-10' alt="" />
                    <div>
                        <h3 className="text-base font-bold">Customer Help</h3>
                        <p className='text-sm text-gray-500 font-medium'>1526 Jobs Available</p>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Categories;