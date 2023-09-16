import React, { useEffect, useState } from 'react';

const CourseName = (props) => {
    const courss = props.data;
    const id = props.id;
    const reamining = props.reamining;
    const totaCredit = props.totaCredit;
    const totaCost = props.totaCost;








    return (
        <div>
            <div>
                <h1 className='text-[#2F80ED] text-lg font-bold mb-4' >Credit Hour Remaining <span>{reamining}</span> hr</h1>
            </div>
            <hr className='w-full' />
            <div>
                <h1 className='text-[#1C1B1B] text-xl font-bold mt-5 mb-4'>Course Name</h1>
                <ul className='list-disc'>
                    {courss.map((course) => <li className='ml-5' key={course.id}>{course.course_name}</li>)}
                </ul>
            </div>
            <hr className='w-full mt-4 mb-4' />
            <div>
                <p className='text-[#1C1B1BCC] text-base font-medium'>Total Credit Hour : <span>{totaCredit}</span></p>
            </div>
            <hr className='w-full my-4' />
            <div>
                <p className='text-[#1C1B1BCC] text-base font-semibold'>Total Price : <span>{totaCost}</span> USD</p>
            </div>

        </div>
    );
};

export default CourseName;