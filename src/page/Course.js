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
                            <p>{description.slice(0, 100) + '...'} <Link>Read more</Link></p> :
                            <p>{description}</p>

                    }</p>
                    <div className="card-actions justify-end">

                        <label htmlFor="my-modal-6" className="btn modal-button">open modal</label>

                        <input type="checkbox" id="my-modal-6" className="modal-toggle" />
                        <div className="modal modal-bottom sm:modal-middle">
                            <div className="modal-box">
                                <h3 className="font-bold text-lg">Congratulations random Internet user!</h3>
                                <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                                <div className="modal-action">
                                    <label htmlFor="my-modal-6" className="btn">Yay!</label>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Course;