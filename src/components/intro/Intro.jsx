import "./intro.scss"
import { init } from 'ityped';
import { useEffect, useRef } from "react";


export default function Intro() {

    const textRef = useRef();

    useEffect(()=> {
        init(textRef.current, {
            showCursor:true,
            backDelay:1500,
            backSpeed: 60,
            strings: ["Development", "Designing", "Freelancing", "Listen to Lo-fi a lot"]
        })
    },[])
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/openpepp1.png" alt=""/>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi there, I'm</h2>
                    <h1>Doru[tu]</h1>
                    <h3>I do <span ref={textRef}></span></h3>
                    
                
                </div>
               
                
                <a href="#portofolio">
                    <img src="assets/down.png" alt=""/>
                </a>
            </div>
        </div>
    )
}
