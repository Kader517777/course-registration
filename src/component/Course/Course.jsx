import React from 'react';

const Course = (props) => {
    const { course_details, course_name, credie, id, img, price } = props.course;

    const handleCarte = props.handleCarte;



    return (
        <div className="card bg-base-100 shadow-xl p-4">
            <img src={img} alt="Shoes" className="rounded-xl" />
            <div className="items-center">
                <h2 className=" text-lg font-semibold mt-4 mb-3 ">{course_name}</h2>
                <p className='text-[#1C1B1B99] mb-5 text-base'>{course_details}</p>
                <p className='mb-6 text-2xl flex flex-row justify-around'>$ <span className='mx-3 text-[#1C1B1B99]'>price: {price}</span> <span className='text-[#1C1B1B99]'>Credit: {credie}hr</span></p>
                <button className="btn btn-primary w-full text-xl font-bold" onClick={() => handleCarte(props, id)}>Select</button>
            </div>
        </div>
    );
};

export default Course;