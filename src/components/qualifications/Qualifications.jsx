import React, { useState } from 'react';
import "./qualifications.css";

const Qualifications = () => {
    const [toggleState, setToggleState]  = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

  return (
    <section className="qualifications section" id="qualifications">
        <h2 className="section__title">Qualifications</h2>
        <span className="section__subtitle">Development Journey</span>

        <div className="qualifications__container container">
            <div className="qualifications__tabs">
                <div className={toggleState === 1 ? "qualifications__button qualifications__active button--flex" : "qualifications__button button--flex"} onClick={() => toggleTab(1)}>
                    <i className="uil uil-briefcase-alt qualifications__icon"></i> Experience
                </div>

                <div className={toggleState === 2 ? "qualifications__button qualifications__active button--flex" : "qualifications__button button--flex"} onClick={() => toggleTab(2)}>
                    <i className="uil uil-graduation-cap qualifications__icon"></i> Education
                </div>
            </div>

            <div className="qualifications__section">
                <div className={toggleState === 2 ? "qualifications__content qualifications__content-active" : "qualifications__content"}>
                    <div className="qualifications__data">
                        <div>
                            <h3 className="qualifications__title">MSc Software Development</h3>
                            <span className="qualifications__subtitle">Queen's University Belfast</span>
                            <div className="qualifications__calendar">
                                <i className="uil uil-calendar-alt"></i> 2021 - 2022
                            </div>
                        </div>

                        <div>
                            <span className="qualifications__rounder"></span>
                            <span className="qualifications__line"></span>
                        </div>
                    </div>

                    <div className="qualifications__data">
                        <div></div>
                        <div>
                            <span className="qualifications__rounder"></span>
                            <span className="qualifications__line"></span>
                        </div>

                        <div>
                            <h3 className="qualifications__title">BSc Speech and Language Therapy</h3>
                            <span className="qualifications__subtitle">Ulster University</span>
                            <div className="qualifications__calendar">
                                <i className="uil uil-calendar-alt"></i> 2018 - 2021
                            </div>
                        </div>
                    </div>
                </div>

                <div className={toggleState === 1 ? "qualifications__content qualifications__content-active" : "qualifications__content"}>
                    <div className="qualifications__data">
                        <div>
                            <h3 className="qualifications__title">Specialist Software Engineer</h3>
                            <span className="qualifications__subtitle">BT Group</span>
                            <div className="qualifications__calendar">
                                <i className="uil uil-calendar-alt"></i> September 2023 - Present
                            </div>
                        </div>

                        <div>
                            <span className="qualifications__rounder"></span>
                            <span className="qualifications__line"></span>
                        </div>
                    </div>

                    <div className="qualifications__data">
                        <div></div>
                        <div>
                            <span className="qualifications__rounder"></span>
                            <span className="qualifications__line"></span>
                        </div>

                        <div>
                            <h3 className="qualifications__title">Software Engineer</h3>
                            <span className="qualifications__subtitle">American Dynamics</span>
                            <div className="qualifications__calendar">
                                <i className="uil uil-calendar-alt"></i> May 2023 - September 2023
                            </div>
                        </div>
                    </div>

                    <div className="qualifications__data">
                        <div>
                            <h3 className="qualifications__title">Full Stack Software Engineer</h3>
                            <span className="qualifications__subtitle">Decision Time</span>
                            <div className="qualifications__calendar">
                                <i className="uil uil-calendar-alt"></i> June 2022 - May 2023
                            </div>
                        </div>

                        <div>
                            <span className="qualifications__rounder"></span>
                            <span className="qualifications__line"></span>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    </section>
  );
};

export default Qualifications;