import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Category = () => {
    const course = useLoaderData();
    const { description, image, title, price

    } = course;

    console.log(course);
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl m-auto mt-32">
        <figure><img className='w-full h-48' src={image} alt="Shoes" /></figure>
        <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p>{description}</p>
        </div>
    </div>
    );
};

export default Category;