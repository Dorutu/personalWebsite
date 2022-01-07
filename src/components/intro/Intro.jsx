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
            strings: ["Developer", "Designer", "Nebun", "Sex", "Oare pot sa scriu la nesfarsit?"]
        })
    },[])
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/me.png" alt=""/>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi there, I'm</h2>
                    <h1>Bota Doru</h1>
                    <h3>Freelance <span ref={textRef}></span></h3>
                </div>
                <a href="#portofolio">
                    <img src="assets/down.png" alt=""/>
                </a>
            </div>
        </div>
    )
}
