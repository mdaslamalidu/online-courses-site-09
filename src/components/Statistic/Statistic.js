import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend  } from 'recharts';


const Statistic = () => {
    const datas = useLoaderData();
    const data = datas.data;
    return (
            <div>
                <h3 className='text-3xl text-red-300'>Total Question of Every Topics</h3>
                <div className='flex justify-center mt-12'>
                <BarChart
                    width={340}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 10,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="total" fill="#8884d8" />
                    <Bar dataKey="name" fill="#82ca9d" />
                </BarChart>
                </div>
            </div>
    );
};

export default Statistic;