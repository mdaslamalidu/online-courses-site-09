import React from 'react';
import { Link } from 'react-router-dom';

const Quiz = ({data}) => {
    console.log(data.total)
    return (
        <div className='bg-gray-100 p-6 rounded shadow-lg'>
            <img
                className='object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80'
                src={data.logo}
                alt=''
            />
            <p className='mb-2 text-xl font-bold leading-none sm:text-2xl'>{data.name}</p>
            <p className='font-blod text-lg'>Total Quiz: {data.total}</p>
            <Link to={`/quiz/${data.id}`}>
                <button
                    className='px-8 block w-full mt-4 py-3 font-semibold rounded-full bg-cyan-200 text-gray-800 hover:bg-cyan-400'
                > Start Practice
                </button>
            </Link>
        </div>
    );
};

export default Quiz;