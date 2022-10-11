import React from 'react';
import "./SingleQuiz.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SingleQuiz = ({data, index}) => {
    console.log(data)
    const { correctAnswer, id, options, question} = data;
    const qs = question.split('<p>')[1];
    const q = qs.split('</p>')[0];
console.log(index)
    const handleClick = (e) => {
        const value = e.target.innerText;
        if(value === correctAnswer){
            toast.success('Correct Answer !', {
                position: toast.POSITION.TOP_CENTER
            });
        }else{
            toast.error('Incorrect Answer !', {
                position: toast.POSITION.TOP_CENTER
            });
        }
    }

    return (
        <div className='lg:w-1/2 mx-auto bg-slate-200 p-5 mb-2 rounded-lg'> 
            <div>
                <h3 className='mb-3'>Quiz-{index + 1}: {q}</h3>
                <div className='grid lg:grid-cols-2 m-3'>
                        {
                            options.map((option, index) => <p onClick={handleClick} className='border border-gray-400 hover:bg-blue-200 bg-white p-2 rounded m-3 text-left' key={index}>{option}</p>)
                        }
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
};

export default SingleQuiz;