import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const SlickCarusel = ({ student }) => {
    const { description, image, name } = student;
    return (
        <div>
            <Slider>
                <div className="card w-32 bg-base-100 shadow-xl">
                    <figure><img src={image} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {name}
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>{description}</p>
                    </div>
                </div>
            </Slider>
        </div>
    );
};

export default SlickCarusel;