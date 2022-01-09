import "./menu.scss"

export default function Menu({menuOpen, setMenuOpen}) {
    return (
        <div className={"menu "+(menuOpen && "active")}>
            <ul>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#intro">Home</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#portofolio">Portfolio</a>
                </li>
                {/* <li onClick={()=>setMenuOpen(false)}>
                    <a href="#works">Works</a>
                </li> */}
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#testimonials">Tehnologies</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#contact">Contact</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="assets/botaDoruCv.pdf" target="_blank">Resume</a>
                </li>
            </ul>
        </div>
    )
}
