import "./testimonials.scss"
import Code from "@material-ui/icons";

export default function Testimonials() {

    const data = [
        {
          id: 1,
          name: "Backend",
          title: "",
          img:
            "https://i.ibb.co/d2R1Y4W/1336494.png",
          icon: "",
          desc:
            "Javascript - jQuery - EJS - Node.js - Express.js - mongoDB - mySQL - RESTful API",
        },
        {
          id: 2,
          name: "Frontend",
          title: "",
          img:
            "https://i.ibb.co/1MbmMhd/644585.png" ,
          icon: "",
          desc:
            "ReactJS - CSS - Sass - Bootstrap",
         
          featured: true,
        },
        {
          id: 3,
          name: "Apps",
          title: "",
          img:
            "https://i.ibb.co/ZdFtkf8/2704022.png",
          icon: "",
          desc:
            "Robo3T - Postman - HyperTerminal - Github - VSCode",
        },
      ];

    return (
        <div className="testimonials" id="testimonials">
            <h1>Tehnologies i use.</h1>
            <div className="container">
            {data.map(d=>  (
                <div className={d.featured ? "card featured" : "card"}>
                    <div className="top">
                        <img src="assets/right-arrow.png" className="left" alt="" />
                        <img src={d.img} className="user" alt="" />
                        <img src={d.icon} className="right" alt="" />
                    </div>
                    <div className="center"> {d.desc}
                    </div>
                    <div className="bottom">
                        <h3>
                            {d.name}
                        </h3>
                        <h4>{d.title}</h4>
                    </div>
                </div>
                ))}
            </div>

        </div>
    )
}
