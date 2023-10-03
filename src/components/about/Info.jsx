import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
            <i class="bx bx-award about__icon"></i>
            <h3 className="about__title">Interdisciplinary Expertise</h3>
            <span className="about__subtitle">Blending speech therapy and software skills for unique problem-solving</span>
        </div>

        <div className="about__box">
            <i class="bx bx-code about__icon"></i>
            <h3 className="about__title">Innovative Developer</h3>
            <span className="about__subtitle">Skilled in full-stack development, always seeking creative solutions</span>
        </div>

        <div className="about__box">
            <i class="bx bx-captions about__icon"></i>
            <h3 className="about__title">Impact Driven</h3>
            <span className="about__subtitle">Committed to creating software that betters lives and ensures accessibility for all</span>
        </div>

    </div>
  )
}

export default Info