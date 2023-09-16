import React, { useEffect, useState } from 'react';
import Course from './Course/Course';


const Courses = (props) => {
    const handleCart = props.handleCart;
    const [courses, setCourses] = useState([]);


    useEffect(() => {
        fetch('courses.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    return (
        <div className=' col-span-3 grid grid-cols-3 gap-3 mt-2'>
            {courses.map((course) => <Course
                key={course.id}
                course={course}
                handleCarte={handleCart}
            ></Course>)}
        </div>
    );
};

export default Courses;