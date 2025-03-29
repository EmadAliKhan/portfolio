import React from "react";
import Navbar from "./Navbar";
import { useTypewriter } from "react-simple-typewriter";
import Emad5 from "../../images/Emad5.jpeg";

import { HashLink as Link } from "react-router-hash-link";
const Home = () => {
  // const [text] = useTypewriter({
  //   words: [""],
  //   loop: {}
  // })

  return (
    <>
      <div className="container" id="home">
        <section className="row">
          <div
            className="col-12 col-md-8 mt-5 text-white"
            data-aos="fade-right"
          >
            <h2 className="fw-bold" style={{ fontSize: "40px" }}>
              Hello, my name is{" "}
              <span className="text-danger dancing-script">Emad Ali Khan</span>
            </h2>
            <h2 className="fw-bold" style={{ fontSize: "40px" }}>
              I'm a{" "}
              <span className="text-danger dancing-script">
                mernStack developer
              </span>
            </h2>
            <p
              className="pt-3"
              style={{ lineHeight: "30px", fontSize: "17px" }}
            >
              "I am a web designer with extensive experience of over one year.
              My expertise is in creating websites that are visually appealing,
              user-friendly, and fully responsive. I am a complete MERN stack
              developer, skilled in using MongoDB, Express.js, React.js, and
              Node.js to build robust and scalable web applications from
              front-end to back-end."
            </p>
            <Link to="#about">
              <button className="button mt-3 dancing-script">
                More About Me
              </button>
            </Link>
          </div>

          <div
            className="col-12 col-md-4 d-flex justify-content-center align-items-center mt-5"
            data-aos="fade-left"
          >
            <img
              style={{ border: "2px solid black", borderRadius: "50%" }}
              src={Emad5}
              alt="Personal Branding"
              width="100%"
              height="350px"
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
