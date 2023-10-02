import React from 'react';
import "./portfolio.css";
import { Data } from './Data';

const Portfolio = () => {
  return (
    <section className="portfolio container section" id='portfolio'>
        <h2 className="section__title">Portfolio</h2>
        <span className="section__subtitle">Most recent work</span>
        
        <div className="portfolio__container">
            {Data.map(({id, image, title, description}) => {
                return (
                    <div className="testimonial__card" key={id}>
                        <img src={image} alt=""
                        className="testimonial__img" />

                        <h3 className='testimonial__name'>{title}</h3>
                        <p className="testimonial__description">{description}</p>

                    </div>
                )
            })}
        </div>
    </section>
  )
}

export default Portfolio;