import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleQuiz from '../SingleQuiz/SingleQuiz';

const ShowQuiz = () => {
    const quizData = useLoaderData();
    const datas = quizData.data.questions;
    const topic = quizData.data.name;
    return (
        <div className='mt-5'>
            <h3 className='text-3xl mb-7 font-bold'>Quiz: {topic}</h3>
            {
                datas.map((data, index) => <SingleQuiz key={data.id} data={data} index={index}/>)
            }
        </div>
    );
};

export default ShowQuiz;



