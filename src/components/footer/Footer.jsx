import React from 'react';
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Erin Buchanan</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">
                        About
                    </a>
                </li>

                <li>
                    <a href="#skills" className="footer__link">
                        Skills
                    </a>
                </li>

                <li>
                    <a href="#qualifications" className="footer__link">
                        Qualifications
                    </a>
                </li>

                <li>
                    <a href="#portfolio" className="footer__link">
                        Portfolio
                    </a>
                </li>
            </ul>

            <div className="footer__social">
                <a href="https://www.linkedin.com/in/erin-buchanan15" className="footer__social-link" target="_blank">
                    <i class="bx bxl-linkedin-square"></i>
                </a>

                <a href="https://github.com/erinkyle15" className="footer__social-link" target="_blank">
                    <i class="bx bxl-github"></i>
                </a>
            </div>
        </div>
    </footer>
  )
}

export default Footer