import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Course from './Course';

const Courses = () => {
  const [categories,setCategories] = useState([]);

  useEffect( () =>{
    fetch('https://assignment-10-server-obaidulislam1.vercel.app/category')
    .then(res =>res.json())
    .then(data => setCategories(data))
  },[])
    const courses = useLoaderData();
    console.log(courses);
    return (
        <div className='md:flex w-10/12 m-auto'>
           <div className='w-1/4 m-4'>
           {
            categories.map(category => <p key={category.id}>
              <Link>{category.category}</Link>
            </p>)
           }
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