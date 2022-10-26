import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from './Course';

const Courses = () => {
    const courses = useLoaderData();
    console.log(courses);
    return (
        <div className='flex'>
           <div className='w-1/3'>
            <h1>course name section</h1>
           </div>
           {
            courses.map(course =><Course key={course.id} course={course}></Course>)
           }
        </div>
    );
};

export default Courses;