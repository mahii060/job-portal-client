import React from 'react';
import { GridLoader } from 'react-spinners';

const Loader = () => {
    return (
        <div className='flex flex-col justify-center items-center min-h-[calc(100vh-116px)]'>
            <GridLoader color="#bb00cd" size={22} />
        </div>
    );
};

export default Loader;