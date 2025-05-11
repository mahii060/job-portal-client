import React from 'react';
import { motion } from "motion/react"
import team from '../../assets/team/team.jpg'

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='flex-1'>
                    <motion.img
                        animate={{ y: [0, 30, 0] }}
                        transition={{ duration: 7, repeat: Infinity }}

                        src={team} className='md:w-96 rounded-t-[40px] rounded-br-[40px] borde border-l-8 border-b-8 border-indigo-600'
                    />
                </div>
                <div className='flex-1'>
                    <motion.h1
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: .95 }}
                        transition={{ duration: .3 }}
                        className="text-5xl font-bold">Latest JOb News!</motion.h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <motion.button whileTap={{ scale: .90 }} className="btn btn-primary">Get Started</motion.button>
                </div>
            </div>
        </div>
    );
};

export default Banner;