import React from 'react';
import { useLoaderData } from 'react-router-dom';
import image from '../image/image-home.jpg';
import SlickCarusel from './SlickCarusel';

const Home = () => {
    const students = useLoaderData();
    console.log(students)
    return (
        <div>
                <img className='w-full relative ' src={image} alt="" />
            <div className='flex justify-center'>
            <div className='absolute md:top-28 sm:top-16 bg-inherit m-auto'>
                <h3 className='text-center text-3xl font-bold text-slate-100'>Let the journey of organizing your own learning begin</h3>
                <p className='text-center text-lg text-slate-100'>Online educational platform ;side name; has raised $2 million in speed funding surge,
                    <br />
                    sequoia capital Bangladesh rapid scale-up our course to increase investment in product and technology.</p>
                <div className='flex justify-center mt-10'>
                    <button className="btn btn-outline btn-info">explore Now</button>
                </div>
            </div>
            </div>
            {/* {
                students.map(student =><SlickCarusel key={student.id} student={student}></SlickCarusel>)
            } */}
        </div>
    );
};

export default Home;