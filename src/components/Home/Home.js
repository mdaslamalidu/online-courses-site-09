import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import banner from "../../assests/banner.jpg"
import Quiz from '../Quiz/Quiz';

const Home = () => {
    const quiz = useLoaderData();
    const datas = quiz.data;

    return (
         <div>
            <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:flex-row lg:justify-between">
                <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                    <h1 className="md:text-5xl font-bold sm:text-6xl">Build Your Skills in any 
                        <span className="dark:text-violet-400"> Categories</span>
                    </h1>
                </div>
                <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                    <img src={banner} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                </div>
            </div>

            <div>
                <div className='grid gap-8 row-gap-5 mb-8 lg:grid-cols-4 lg:row-gap-8 bg-slate-200 p-7'>
                    {
                        datas.map(dt => <Quiz key={dt.id} data={dt}/>)
                    }
                </div>
            </div>
         </div>
    );
};

export default Home;