import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleQuiz from '../SingleQuiz/SingleQuiz';

const ShowQuiz = () => {
    const [correctNum, setCorrectNum] = useState(0)
    const [inCorrectNum, setInCorrectNum] = useState(0)
    const quizData = useLoaderData();
    const datas = quizData.data.questions;
    const topic = quizData.data.name;
    const totalQuiz = quizData.data.total;
    return (
        <div className='mt-5'>
            <h3 className='text-3xl mb-1 font-bold'>Quiz of {topic}</h3>
            <h2 className='text-xl mb-7 font-bold'>Total {topic} quiz: {totalQuiz}</h2>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-3 mb-8" onClick={() => {
                alert(`your correct answer ${correctNum}`)
            }}>Show Your Correct Answer</button>
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mb-8" onClick={() => {
                alert(`your incorrect answer ${inCorrectNum}`)
            }}>Show Your InCorrect Answer</button>
            {
                datas.map((data, index) => <SingleQuiz key={data.id} data={data} index={index} correctNum={correctNum} setInCorrectNum={setInCorrectNum} inCorrectNum={inCorrectNum} setCorrectNum={setCorrectNum}/>)
            }
        </div>
    );
};

export default ShowQuiz;



