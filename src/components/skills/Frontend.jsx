import React from 'react'

const Frontend = () => {
  return (
    <div className="skills__content">
        <h3 className="skills__title">Frontend Experience</h3>

        <div className="skills__box">
            <div className="skills__group">
                <div className="skills__data">
                    <i class='bx bxl-html5'></i>
                    
                    <div>
                        <h3 className="skills__name">HTML</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i class='bx bxl-css3'></i>
                    
                    <div>
                        <h3 className="skills__name">CSS</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i class='bx bxl-vuejs'></i>
                    
                    <div>
                        <h3 className="skills__name">Vue</h3>
                        <span className="skills__level">Basic</span>
                    </div>
                </div>
                
            </div>

            <div className="skills__group">
                <div className="skills__data">
                    <i class='bx bxl-react'></i>
                    
                    <div>
                        <h3 className="skills__name">React</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i class='bx bxl-typescript'></i>
                    
                    <div>
                        <h3 className="skills__name">Typescript</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i class='bx bxl-angular'></i>
                    
                    <div>
                        <h3 className="skills__name">AngularJS</h3>
                        <span className="skills__level">Basic</span>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Frontend