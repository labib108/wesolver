import React from "react";
import { Link } from "react-router-dom";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import Iframe from "react-iframe";

const SliderAreaItem = ({image, title, description}) => {
  return (
    <div className="single-slider wow fadeInUp">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 order-0 order-lg-2">
            <div
            style={{paddingLeft: '100px', }}
              className="slider-img text-end"
              data-animation="fadeInRight"
              data-delay=".8s"
            >
              <img src={image} alt="" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="slider-content">
              <h2 className="title" data-animation="fadeInUp" data-delay=".2s">
              {title}
              </h2>
              <p data-animation="fadeInUp" data-delay=".4s">
              {description}
              </p>
              <div className="slider-btn">
                <Link
                  to="/contact"
                  className="btn"
                  data-animation="fadeInLeft"
                  data-delay=".6s"
                >
                  Get Started <span></span>
                </Link>

                <Popup
                  trigger={
                    <a
                      href="/"
                      className="popup-video"
                      data-animation="fadeInRight"
                      data-delay=".6s"
                    >
                      See Live Demo <i className="fas fa-play pulse"></i>
                    </a>
                  }
                  position=""
                  modal={true}
                >
                  <Iframe
                    url="https://www.youtube.com/embed/bixR-KIJKYM"
                    width="100%"
                    height="350px"
                    id=""
                    className=""
                    display="block"
                    position="relative"
                  />
                </Popup>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderAreaItem;
