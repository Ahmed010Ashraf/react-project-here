import React, { useRef } from "react";
import slide1 from "../../assets/images/network.png";
import slide2 from "../../assets/images/فلوس.png";
import slide3 from "../../assets/images/مبرمج.png";
import slide4 from "../../assets/images//هكر.png";
import "./slider.css";

function Slider() {
    let slid = useRef();
    let x = 0;
    let count = 0;

    function goDown() {
        
        if (x > -50) {
            
            x -= 25;
            slid.current.style.transform = `translateX(${x}%)`;
        }
    }

    function goUp() {
        
        if (x < 0) {
            
            x += 25;
            slid.current.style.transform = `translateX(${x}%)`;
        }
    }


    function goDown2() {
        
        if (count > -75 ) {
            
            count -= 25;
            slid.current.style.transform = `translateX(${count}%)`;
        }
    }

    function goUp2() {
        
        if (count < 0) {
            
            count += 25;
            slid.current.style.transform = `translateX(${count}%)`;
        }
    }


    return (
        <div className="slider" id="testmonials">
            <i onClick={() => {
                if(window.innerWidth <= 768){
                    goDown2()
                }else {
                    goDown()
                }
            }} className="fa-solid fa-arrow-right"></i>
            <i onClick={() => {
                if(window.innerWidth <= 768){
                    goUp2()
                }else {
                    goUp()
                }
            }} className="fa-solid fa-arrow-left"></i>
            <div className="container">
                <div ref={slid} className="content">
                    <div className="slide">
                        <div className="has">
                            <div>
                                <img src={slide1} alt="" />
                                <div>
                                    <h3>ahmed</h3>
                                    <p>ceo of company</p>
                                </div>
                            </div>
                            <p className="p">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                                officia explicabo expedita eligendi velit cupiditate.ceo of company
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, at!
                            </p>
                        </div>
                    </div>
                    <div className="slide">
                        <div className="has">
                            <div>
                                <img src={slide2} alt="" />
                                <div>
                                    <h3>ali</h3>
                                    <p>scrom master</p>
                                </div>
                            </div>
                            <p className="p">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                                officia explicabo expedita eligendi velit cupiditate. scrom master
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, maxime!
                            </p>
                        </div>
                    </div>
                    <div className="slide">
                        <div className="has">
                            <div>
                                <img src={slide3} alt="" />
                                <div>
                                    <h3>mona</h3>
                                    <p>product manager</p>
                                </div>
                            </div>
                            <p className="p">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                                officia explicabo expedita eligendi velit cupiditate. product manager
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, ex.
                            </p>
                        </div>
                    </div>
                    <div className="slide">
                        <div className="has">
                            <div>
                                <img src={slide4} alt="" />
                                <div>
                                    <h3>nancy</h3>
                                    <p>software engneer</p>
                                </div>
                            </div>
                            <p className="p">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                                officia explicabo expedita eligendi velit cupiditate.software engneer
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, magnam?
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Slider;
