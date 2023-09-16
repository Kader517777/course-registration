import React, { useEffect, useState } from 'react';

const CourseName = (props) => {
    const courss = props.data;
    const id = props.id;
    const [last, setLast] = useState([]);
    // console.log(last);






    return (
        <div>
            <div>
                <h1>Credit Hour Remaining <span>7</span> hr</h1>
            </div>
            <hr className='w-full' />
            <div>
                <h1>Course Name</h1>
                <ul className='list-disc'>
                    {courss.map((course) => <li key={course.id}>{course.course_name}</li>)}
                </ul>
            </div>
            <hr className='w-full' />
            <div>

                <p>Total Credit Hour : <span>13</span></p>
            </div>
            <div>

                <p>Total Price : <span>48000</span> USD</p>
            </div>
            <hr className='w-full' />
        </div>
    );
};

export default CourseName;