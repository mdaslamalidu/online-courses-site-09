import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';
import banner from "../../assests/banner.jpg"

const Quizs = () => {
    const quiz = useLoaderData();
    const datas = quiz.data;
    return (
        <div className='grid gap-8 row-gap-5 mb-8 lg:grid-cols-4 lg:row-gap-8 bg-slate-200 p-7'>
            {
                datas.map(data => <Quiz key={data.id} data={data} />)
            }
        </div>
    );
};

export default Quizs;