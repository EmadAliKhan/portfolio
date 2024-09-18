import React from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import SchoolIcon from "@mui/icons-material/School";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import EmadCV from "../../images/EmadCV.pdf";
import { HashLink as Link } from "react-router-hash-link";
// import Emad5 from "../../images/Emad5.jpeg"
const About = () => {
   
  return (
    <>
      <div
        className="container text-white"
        style={{ marginTop: "140px" }}
        id="about"
      >
        <section className="row">
          <div className="col-12">
            <h1
              style={{ fontSize: "40px", fontWeight: "bolder" }}
              className="double-underline"
            >
              {" "}
              About Me{" "}
            </h1>

            <h2 className="fw-bold pt-4">
              I'm Emad Ali Khan and{" "}
              <span className="text-danger dancing-script">Web Developer</span>
            </h2>
          </div>

          <div className="col-12">
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
          </div>

          <div className="col-12 col-md-3 mt-3" data-aos="fade-right">
            <ul className="list-unstyled">
              <li>Birthday : 13-October-2003</li>
              <hr />
              <li>Degree : CSE</li>
              <hr />
              <li>City : Karachi</li>
              <hr />
            </ul>
            <a href={EmadCV} download="resume">
              <button className="button mt-3">Download CV</button>
            </a>
          </div>

          <div className="col-12 col-md-3 mt-3" data-aos="fade-right">
            <ul className="list-unstyled">
              <li>Age : 20</li> <hr />
              <li>Email : emadalikhan5@gmail.com</li> <hr />
              <li>Phone : 0318-6342262</li> <hr />
            </ul>

            <Link to="#contact">
              <button className="button mt-3">Hire Me</button>
            </Link>
          </div>

          <div className="col-12 col-md-6" data-aos="fade-left">
            <ul className="list-unstyled">
              <li
                style={{
                  position: "relative",
                  margin: "20px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
                className="HTML"
              >
                HTML <span></span> 75%
              </li>
              <li
                style={{
                  position: "relative",
                  margin: "20px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
                className="HTML"
              >
                CSS <span></span> 75%
              </li>
              <li
                style={{
                  position: "relative",
                  margin: "20px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
                className="HTML"
              >
                JavaScript <span></span> 75%
              </li>
              <li
                style={{
                  position: "relative",
                  margin: "20px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
                className="HTML"
              >
                React.js <span></span> 75%
              </li>
              <li
                style={{
                  position: "relative",
                  margin: "20px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
                className="HTML"
              >
                Express <span></span> 75%
              </li>
              <li
                style={{
                  position: "relative",
                  margin: "20px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
                className="HTML"
              >
                Node.js <span></span> 75%
              </li>
              <li
                style={{
                  position: "relative",
                  margin: "20px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
                className="HTML"
              >
                MongoDB <span></span> 75%
              </li>
            </ul>
          </div>

          {/* Education */}
          <div className="col-12 col-md-6 mt-3" data-aos="fade-right">
            <h3 className="fw-bold double-underline">Education</h3>
            <div
              style={{
                width: "100%",
                border: "2px solid red",
                height: "auto",
                marginTop: "15px",
              }}
            >
              <div className="ps-3 pt-2">
                <p className="pb-2">
                  {" "}
                  <SchoolIcon />{" "}
                  <span className="ps-1 fw-bold">
                    <u>SECONDARY</u>
                  </span>
                </p>
                <p style={{ lineHeight: "10px" }}>
                  St.Patrick High School, Karachi{" "}
                </p>
                <p style={{ lineHeight: "10px" }}>
                  <CalendarMonthIcon /> 2012 - 2020
                </p>
              </div>

              <div className="ps-3 pt-2">
                <p className="pb-2">
                  {" "}
                  <SchoolIcon />{" "}
                  <span className="ps-1 fw-bold">
                    <u>INTERMEDIATE</u>
                  </span>
                </p>
                <p style={{ lineHeight: "10px" }}>
                  Govt. Adamjee College, Karachi{" "}
                </p>
                <p style={{ lineHeight: "10px" }}>
                  <CalendarMonthIcon /> 2020 -2022
                </p>
              </div>

              <div className="ps-3 pt-2 mb-5">
                <p className="pb-2">
                  {" "}
                  <SchoolIcon />{" "}
                  <span className="ps-1 fw-bold">
                    <u>GRADUATION</u>
                  </span>
                </p>
                <p style={{ lineHeight: "10px" }}>
                  Dawood University Of Engineering and Technology |{" "}
                  <CalendarMonthIcon /> 2022 - Present{" "}
                </p>
                <p style={{ lineHeight: "2px" }} className="fw-bold">
                  {" "}
                  Bachelors In Computer System Engineering{" "}
                </p>
              </div>
            </div>

            {/* Experience */}
            <div className="mt-5">
              <h3 className="fw-bold double-underline">Experience</h3>
              <div
                style={{
                  width: "100%",
                  border: "2px solid red",
                  height: "auto",
                  marginTop: "15px",
                }}
              >
                <div>
                  <div className="d-flex justify-content-between">
                    <p className="ps-2">FRONTEND DEVELOPER</p>
                    <p>Techvertz Solution</p>
                  </div>
                  <p
                    style={{ lineHeight: "0px", fontSize: "12px" }}
                    className="ps-2"
                  >
                    1 November 2024 - Present
                  </p>
                  <div style={{ lineHeight: "15px", fontSize: "14px" }}>
                    <p>
                      <DoubleArrowIcon />
                      Convert UI/UX design into Functional Web Application using
                      HTML,CSS & Javascript
                    </p>
                    <p>
                      {" "}
                      <DoubleArrowIcon /> Uses React.js to make Client Side
                      Rendering Application
                    </p>
                    <p>
                      {" "}
                      <DoubleArrowIcon /> Fetch API and populate Data from
                      Backend and Database
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div className="col-12 col-md-6 mt-3" data-aos="fade-left">
            <h3 className="fw-bold double-underline">Projects</h3>
            <div
              style={{
                width: "100%",
                border: "2px solid red",
                height: "auto",
                marginTop: "15px",
              }}
            >
              {/* Portfolio Website for PRO VICE CHANCELLOR DAWOOD UNIVERSITY */}
              <div>
                <p className="pt-2 ps-2 fw-bold">
                  {" "}
                  <HowToRegIcon
                    style={{ height: "35px", width: "auto" }}
                  />{" "}
                  <u>
                    Portfolio Website for PRO VICE CHANCELLOR DAWOOD UNIVERSITY{" "}
                  </u>{" "}
                </p>
                <p
                  style={{ lineHeight: "0px", fontSize: "12px" }}
                  className="text-end"
                >
                  {" "}
                  OCTOBER 2024 - NOVEMBER 2024{" "}
                </p>
                <div style={{ lineHeight: "15px", fontSize: "14px" }}>
                  <p>
                    <DoubleArrowIcon />
                    Portfolio website is a static Frontend Website for the PRO
                    VICE CHANCELLOR of DAWOOD UNIVERSITY
                  </p>
                  <p>
                    <DoubleArrowIcon />
                    <a
                      href="https://www.waheedbhutto.com/"
                      className="text-danger"
                      target="_blank"
                    >
                      https://www.waheedbhutto.com/
                    </a>
                  </p>
                </div>
              </div>
              <hr />
              {/* JIYA eStore WEBSITE UNIVERSITY */}
              <div>
                <p className="ps-2 fw-bold">
                  {" "}
                  <HowToRegIcon
                    style={{ height: "35px", width: "auto" }}
                  />{" "}
                  <u>JIYA eStore WEBSITE </u>{" "}
                </p>
                <p
                  style={{ lineHeight: "0px", fontSize: "12px" }}
                  className="text-end"
                >
                  {" "}
                  MAY 2024 - April 2024{" "}
                </p>
                <div style={{ lineHeight: "15px", fontSize: "14px" }}>
                  <p>
                    <DoubleArrowIcon /> Designed and developed a fully
                    functional Grocerry website from scratch using JavaScript
                    and mongoDB
                  </p>
                  <p>
                    <DoubleArrowIcon /> Utilized JavaScript sessions to manage
                    shopping carts, providing a seamless and user-friendly
                    shopping experience.
                  </p>
                  <p>
                    <DoubleArrowIcon /> Integrated a robust product catalog and
                    inventory management system, allowing for easy addition,
                    update, and deletion of products.
                  </p>
                  <p>
                    <DoubleArrowIcon />
                    <a
                      href="http://20.2.170.171/"
                      className="text-danger"
                      target="_blank"
                    >
                      http://20.2.170.171/
                    </a>
                  </p>
                </div>
              </div>{" "}
              <hr />
              {/* Accessories WEBSITE  */}
              {/* http://98.70.74.252/ */}
              <div>
                <p className="ps-2 fw-bold">
                  {" "}
                  {/* Adjust the height as needed */}
                  <HowToRegIcon style={{ height: "35px", width: "auto" }} />
                  <u>ME ACCESSORIES STORE </u>
                </p>
                <p
                  style={{ lineHeight: "0px", fontSize: "12px" }}
                  className="text-end"
                >
                  {" "}
                  JUNE 2024 - JULY 2024{" "}
                </p>
                <div style={{ lineHeight: "15px", fontSize: "14px" }}>
                  <p>
                    <DoubleArrowIcon /> Developed an Accessories website from
                    scratch using JavaScript and mongoDB
                  </p>
                  <p>
                    <DoubleArrowIcon /> Implemented a comprehensive product
                    catalog and inventory management system, streamlining the
                    processes for adding, updating, and deleting products.
                  </p>
                  <p>
                    <DoubleArrowIcon />
                    <a
                      href="http://98.70.74.252/"
                      className="text-danger"
                      target="_blank"
                    >
                      http://98.70.74.252/
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
