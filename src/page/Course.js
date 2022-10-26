import React from 'react';

const Course = ({ course }) => {
    console.log(course)
    const { description, image, title, price

    } = course;
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl ">
                <figure><img className='w-50 h-40' src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Course;