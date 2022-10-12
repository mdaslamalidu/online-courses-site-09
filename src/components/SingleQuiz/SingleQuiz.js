import React from 'react';
import "./SingleQuiz.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'


const SingleQuiz = ({ data, index, setCorrectNum, correctNum, setInCorrectNum, inCorrectNum }) => {
    const { options, question } = data;
    let { correctAnswer } = data;
    const qs = question.split('<p>')[1];
    const q = qs.split('</p>')[0];

    const showAnswer = () => {
        toast((correctAnswer), {
            position: toast.POSITION.TOP_CENTER
        })
    }

    const handleClick = (e) => {
        const value = e.target.innerText;
        const element = e.target;
        console.log(correctAnswer)

        if (correctAnswer === "building  User Interface") {
            correctAnswer = "building User Interface"
        }
        if (correctAnswer === "const [name, setName] =  useState(“JingaLala”);") {
            correctAnswer = "const [name, setName] = useState(“JingaLala”);"
        }
        if (correctAnswer === "function  Nayika() { return <h3> Mousumi </h3>   }") {
            correctAnswer = "function Nayika() { return <h3> Mousumi </h3> }"
        }

        if (value === correctAnswer) {
            setCorrectNum(correctNum + 1)
            toast.success('Correct Answer !', {
                position: toast.POSITION.TOP_CENTER
            });
            element.setAttribute("class", "bg-color")
        } else {
            setInCorrectNum(inCorrectNum + 1)
            toast.error('Incorrect Answer !', {
                position: toast.POSITION.TOP_CENTER
            });

        }
    }

    return (
        <div>
            <div className='lg:w-1/2 mx-auto bg-slate-200 p-5 mb-2 rounded-lg'>
                <div className='flex justify-between items-center'>
                    <h3 className='mb-3 text-xl mr-4'>Quiz-{index + 1}: {q}</h3>
                    <FontAwesomeIcon onClick={showAnswer} icon={faEye} />
                </div>
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