// import { useState } from "react";
import "./contact.scss";
import { Instagram } from "@material-ui/icons";
import { Email } from "@material-ui/icons";
import { GitHub } from "@material-ui/icons";
import { LinkedIn } from "@material-ui/icons";
import { Link } from "@material-ui/core";




export default function Contact() {

   function handlePageChange()  {
        window.location.href = "https://www.google.com"
        window.target="_blank"
     }

    // const [message, setMessage] = useState(false)

    // const handleSubmit = (e)=>{
    //     e.preventDefault();
    //     setMessage(true)
    // }
    return (
        <div className='contact' id="contact">
            <div className="left">
                <h1>Interested in working together?</h1>
                <h2>Email me or text me on social media</h2>
                <h3>Looking forward to hear from <span>you</span>!</h3>
            </div>


            <div className="right">
                <h2>Contact.</h2>
                {/* <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Email"/>
                    <textarea placeholder="Message"></textarea>
                    <button type="submit">Send</button>
                    {message && <span>Thanks, I will reply ASAP</span>}
                </form> */}
                <div className="icons">
               <Link
               href="https://instagram.com/dorutu.exe"
               target="_blank"
               >
               <Instagram
                style={{ fontSize: 80 }}
                />
                </Link>
                
                <Link
               href="mailto:dorubota123@gmail.com"
               target="_blank"
               >
                   <Email style={{ fontSize: 80 }}/>
               </Link>
                
               <Link
               href="https://github.com/Dorutu"
               target="_blank"
               >
                   <GitHub style={{ fontSize: 80 }}/>
               </Link>
                
               <Link
               href="https://www.linkedin.com/in/bota-doru-a85840202/"
               target="_blank"

               >
                   <LinkedIn style={{ fontSize: 80 }}/>
               </Link>
                
                </div>
                
            </div>
        </div>
    )
}
