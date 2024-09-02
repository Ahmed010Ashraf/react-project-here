import React from 'react'
import image1 from '../../assets/images/Screenshot (19).png'
import image2 from '../../assets/images/لقطة شاشة 2023-05-17 084708.png'
import image3 from '../../assets/images/مبرمج.png'
import "./about.css"
const About = () => {
  return (
    <div className="about" id='about'>
       
        <div className="image-box">
            <div>
                <img src={image1} alt="" />
                <div className="img-desc">
                    <h2>lock screan</h2>
                    <i className="fa-solid fa-arrows-up-down-left-right"></i>
                </div>
            </div>
            <div>
                <img src={image2} alt="" />
                <div className="img-desc">
                    <h2>food section</h2>
                    <i className="fa-solid fa-arrows-up-down-left-right"></i>
                </div>
            </div>
            <div>
                <img src={image3} alt="" />
                <div className="img-desc">
                    <h2>main section</h2>
                    <i className="fa-solid fa-arrows-up-down-left-right"></i>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About