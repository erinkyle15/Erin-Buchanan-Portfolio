import React from 'react'

const ScrollDown = () => {
  return (
    <div className="home__scroll">
        <a href="#about" className="home__scroll-button button--flex">
        <svg 
            width="32px" 
            height="32px" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            class="home__scroll-mouse"
            style={{
                fillRule: "evenodd",
                clipRule: "evenodd",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeMiterlimit: "1.5",
            }}>
            <path 
                id="mouse" 
                d="M5 9C5 5.13401 8.13401 2 12 2C15.866 2 
                19 5.13401 19 9V15C19 18.866 15.866 22 12 22C8.13401 
                22 5 18.866 5 15V9Z" 
                style={{
                    fill: "none",
                    stroke: "var(--title-color)",
                    strokeWidth: "1.5",
                }}
            />
            <path 
                class="wheel"
                d="M12 5V8" 
                style={{
                    fill: "none",
                    stroke: "var(--title-color)",
                    strokeWidth: "1.5",
                }}
            />
        </svg>
        <span className="home__scroll-name">Scroll Down</span>
        <i class="uil uil-arrow-down home__scroll-arrow"></i>
        </a>
    </div>

  )
}

export default ScrollDown