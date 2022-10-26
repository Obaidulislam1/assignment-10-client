import React from 'react';
import { Link } from 'react-router-dom';

const Course = ({ course }) => {
    console.log(course)
    const { description, image, title, price

    } = course;
    return (
        <div>
        <div className="card card-compact w-full bg-base-100 shadow-xl">
                <figure><img className='w-full h-48' src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{
                    description.length > 100 ?
                    <p>{description.slice(0,100) + '...'} <Link>Read more</Link></p>:
                    <p>{description}</p>

                    }</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Course;