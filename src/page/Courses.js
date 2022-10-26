import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from './Course';

const Courses = () => {
    const courses = useLoaderData();
    console.log(courses);
    return (
        <div className='md:flex w-10/12 m-auto'>
           <div className='w-1/4 m-4'>
            <h1>Digital marketing</h1>
            <h1>Graphics Design</h1>
            <h1>PHP Language</h1>
            <h1>Jquery Click</h1>
            <h1>Al Quran</h1>
            <h1>Robotics</h1>
           </div>
          <div className='grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10'>
          {
            courses.map(course =><Course key={course.id} course={course}></Course>)
           }
          </div>
        </div>
    );
};

export default Courses;