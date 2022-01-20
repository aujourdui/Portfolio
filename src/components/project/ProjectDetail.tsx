import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { MouseContext } from "../../context/mouse-context";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.scss";

import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/effect-flip/effect-flip.scss";
import "swiper/components/scrollbar/scrollbar.scss";

import SwiperCore, { EffectFlip, Navigation, Pagination } from "swiper";

SwiperCore.use([EffectFlip, Navigation, Pagination]);

const ProjectDetail = ({ data }) => {
  const { title } = useParams();
  const linkPathCode = "https://github.com/aujourdui/";
  const baseImgPath = "/images/";
  const { cursorChangeHandler } = useContext(MouseContext);
  return (
    <div className="projectDetail__container">
      <div>
        {data
          .filter((list) => list.title === title)
          .map((list) => (
            <div className="projectDetail__wrapper" key={list.id}>
              <h1 className="project__content">{list.title}</h1>
              <h2 className="project__content">{list.article}</h2>
              <h3 className="project__content">{list.addInfo}</h3>
              <div
                onMouseEnter={() => cursorChangeHandler("hovered")}
                onMouseLeave={() => cursorChangeHandler("")}
              >
                <Swiper
                  spaceBetween={0}
                  slidesPerView={1}
                  speed={500}
                  loop={true}
                  touchRatio={1.5}
                  navigation={true}
                  effect={"flip"}
                  pagination={{ clickable: true }}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <img
                      src={`${baseImgPath}${list.imgDetailPathA}`}
                      alt="Project"
                      className="slide-image"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={`${baseImgPath}${list.imgDetailPathB}`}
                      alt="Project"
                      className="slide-image"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={`${baseImgPath}${list.imgDetailPathC}`}
                      alt="Project"
                      className="slide-image"
                    />
                  </SwiperSlide>
                </Swiper>
              </div>

              <p className="project__content">Technology: {list.technology}</p>
              <div className="detailLink__wrapper">
                <div className="project__content">
                  <div
                    onMouseEnter={() => cursorChangeHandler("hovered")}
                    onMouseLeave={() => cursorChangeHandler("")}
                  >
                    <a href={`${linkPathCode}${list.gitTitle}`}>
                      <i className="fas fa-code"></i>Code
                    </a>
                  </div>
                </div>
                <div className="project__content">
                  <div
                    onMouseEnter={() => cursorChangeHandler("hovered")}
                    onMouseLeave={() => cursorChangeHandler("")}
                  >
                    <a href={list.app}>
                      <i className="fas fa-desktop"></i>
                      {list.appName}
                    </a>
                  </div>
                </div>
              </div>
              <div className="backButton__container">
                <div
                  onMouseEnter={() => cursorChangeHandler("hovered")}
                  onMouseLeave={() => cursorChangeHandler("")}
                >
                  <Link to="/project">
                    <span className="back-button">back</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProjectDetail;
