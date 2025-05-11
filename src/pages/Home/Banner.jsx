import React from 'react';
import { motion } from "motion/react"
import team from '../../assets/team/team.jpg'
import team2 from '../../assets/team/team2.jpg'

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='hidden lg:flex-1 lg:block'>
                    <motion.img
                        animate={{ y: [50, 100, 50] }}
                        transition={{ duration: 10, repeat: Infinity }}

                        src={team} className='md:w-96 rounded-t-[50px] rounded-br-[40px] border-l-8 border-b-8 border-indigo-600'
                    />
                    <motion.img
                        animate={{ x: [100, 150, 100] }}
                        transition={{ duration: 10, delay: 3, repeat: Infinity }}

                        src={team2} className='md:w-96 rounded-t-[50px] rounded-br-[40px] border-l-8 border-b-8 border-indigo-600'
                    />
                </div>
                <div className='flex-1'>
                    <h1 className="text-5xl font-bold text-inherit">Latest <motion.span
                        animate={{ color: ["#a704ed", "#f201a2 ", "#090dff", "#20c2ff", "#a704ed"] }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            repeatType: "loop"
                        }}
                    >
                        JOb
                    </motion.span> News!</h1>
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