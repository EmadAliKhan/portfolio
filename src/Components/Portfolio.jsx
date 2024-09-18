import React from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Portfolio1 from "../../images/Portfolio1.png";
import Portfolio2 from "../../images/Portfolio2.png";
import Portfolio3 from "../../images/Portfolio3.png";

const Portfolio = () => {
  return (
    <>
      <div id="portfolio">
        <div className="container text-white" style={{ marginTop: "140px" }}>
          <h1 className="double-underline fw-bold">Portfolio</h1>
          <h4 className="pt-5 fw-bold">My Last Projects :</h4>
        </div>

        <div className="container text-white pb-5">
          <section className="row">
            {/* Portfolio */}
            <div className="col-12 col-md-4" data-aos="fade-right">
              <a
                href="https://www.waheedbhutto.com/"
                className="text-white"
                target="_blank"
              >
                <div
                  className="mt-3 container-image"
                  style={{ border: "2px solid white" }}
                >
                  <img src={Portfolio1} alt="" width="100%" height="200px" />
                  <div className="overlay d-flex flex-column align-items-center justify-content-center text-center fw-bold">
                    <p style={{ fontSize: "17px" }}>
                      Portfolio Website for Pro Vice Chancellor Dawood
                      University{" "}
                    </p>
                  </div>
                </div>
              </a>
            </div>

            {/* JIYA eStore */}
            <div className="col-12 col-md-4" data-aos="fade-down">
              <a
                href="http://20.2.170.171/"
                className="text-white"
                target="_blank"
              >
                <div
                  className="mt-3 container-image"
                  style={{ border: "2px solid white" }}
                >
                  <img src={Portfolio2} alt="" width="100%" height="200px" />
                  <div className="overlay d-flex flex-column align-items-center justify-content-center text-center fw-bold">
                    <p style={{ fontSize: "17px" }}>JIYA eStore</p>
                    <p>Grocery Store Webiste for Italian Client</p>
                    {/* <p style={{border:"1px solid white", borderRadius:"50%"}}><VisibilityIcon /></p> */}
                  </div>
                </div>
              </a>
            </div>

            {/* Service Station */}
            <div className="col-12 col-md-4" data-aos="fade-left">
              <a
                href="http://98.70.74.252/"
                className="text-white"
                target="blank"
              >
                <div
                  className="mt-3 container-image"
                  style={{ border: "2px solid white" }}
                >
                  <img src={Portfolio3} alt="" width="100%" height="200px" />
                  <div className="overlay d-flex flex-column align-items-center justify-content-center text-center fw-bold">
                    <p style={{ fontSize: "17px" }}>Sameer Service Station</p>
                  </div>
                </div>
              </a>
            </div>

            {/* new One */}
            {/* <div className="col-12 col-md-4 mt-4"  data-aos="fade-right">
<div className='mt-3 container-image' style={{border:"2px solid white"}}>
<img src="https://media.licdn.com/dms/image/D4D12AQEZths38-N2dg/article-cover_image-shrink_720_1280/0/1709734306401?e=2147483647&v=beta&t=9l7pK3lRN00IcbwvUvxg2j7JEr-jlup2SRWAGTgvLCk" alt="" width="100%"
                height="200px"/>
                <div className='overlay d-flex flex-column align-items-center justify-content-center text-center fw-bold'>
                <p style={{fontSize:"17px"}}>Sameer Service Station</p>

                
                </div>
                
</div>
          </div> */}

            {/* new two */}
            {/* <div className="col-12 col-md-4 mt-4"  data-aos="fade-up">
<div className='mt-3 container-image' style={{border:"2px solid white"}}>
<img src="https://media.licdn.com/dms/image/D4D12AQEZths38-N2dg/article-cover_image-shrink_720_1280/0/1709734306401?e=2147483647&v=beta&t=9l7pK3lRN00IcbwvUvxg2j7JEr-jlup2SRWAGTgvLCk" alt="" width="100%"
                height="200px"/>
                <div className='overlay d-flex flex-column align-items-center justify-content-center text-center fw-bold'>
                <p style={{fontSize:"17px"}}>Sameer Service Station</p>

                
                </div>
                
</div>
          </div>
           */}
          </section>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
