import "./topbar.scss"
import {Person, Mail} from "@material-ui/icons"
import { Link } from "@material-ui/core";
import { AttachFile } from "@material-ui/icons";
import { InsertLink } from "@material-ui/icons";

export default function Topbar({menuOpen, setMenuOpen}) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">doru.</a>
                    <div className="itemContainer">
                        <Person className="icon"/>
                        <span>+40 732 094 672</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon"/>
                        <span>dorubota123@gmail.com</span>
                    </div>
                    <div className="itemContainer">
                    <Link
                        href="assets/botaDoruCv.pdf"
                        target="_blank"
                    >
                        <InsertLink style={{fontSize: 32, fill: "white"}} className="icon"/>
                        </Link>
                        <a href="assets/botaDoruCv.pdf" target="_blank" >Resume</a>
                    </div>
                </div>
    
                <div className="right">
                   <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                       <span className="line1"></span>
                       <span className="line2"></span>
                       <span className="line3"></span>
                   </div>
                </div>  
            </div>

        </div>
    )
}
