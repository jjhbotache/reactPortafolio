import { useEffect, useRef, useState } from "react";
import { ProjectsContainer, ProjectsInfoContainer, WelcomeText } from "./ProjectsInfoStyledComponents";
import Typewriter from 'typewriter-effect';

import { motion } from "framer-motion";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Navigation } from 'swiper/modules';

import projectsMedia from "../../constants/projectsMedia";

export default function ProjectsInfo() {
  const [titleTyped, setTitleTyped] = useState(false);
  const welcomeTextRef = useRef(null);
  const showIntroRef = useRef(false);//false just to test
  const [currentProject, setCurrentProject] = useState(null);
  const [infoVariant, setInfoVariant] = useState("hidden");

  function welcomeTextFadeOut(){
    welcomeTextRef.current.classList.add("welcomeText__fade-out");
    setTimeout(()=>{
      showIntroRef.current = false
      setTitleTyped(false);
    }, 1000);
  }
  
  function setInfo(swiper) {
    console.log("triggering function");
    setInfoVariant("hidden");
    if (!!timer) clearTimeout(timer);
    var timer = setTimeout(()=>{
      setCurrentProject(projectsMedia[swiper.realIndex]);
      setInfoVariant("visible");
      console.log("setting current project");
    }
    , 500);
  }

  const infoTextVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  }

  return(
    <ProjectsInfoContainer>

      {
        showIntroRef.current 
        ?(
          <WelcomeText ref={welcomeTextRef}>
            <Typewriter
              onInit={typewriter=>{
                typewriter
                .pauseFor(1000)
                .typeString("Projects")
                .pauseFor(1000)
                .callFunction(()=>{setTitleTyped(true);})
                .start();
              }}
              options={{
                wrapperClassName: "title",
                cursor: ""
              }}
            />
            {
              titleTyped &&
              <div className="subtitle">
                <hr className="subtitle--separator" />
                <Typewriter
                  onInit={typewriter=>{
                    typewriter
                    .typeString("Here are some of the projects I've worked on")
                    .pauseFor(1000)
                    .callFunction(welcomeTextFadeOut)

                    .start();
                  }}
                  options={{
                    wrapperClassName: "subtitle--text",
                    delay: 40,
                    cursor: ""
                  }}
                />

              </div>
            }
          </WelcomeText>
        )
        :(
          <>
          <ProjectsContainer>
            <Swiper
            className="projectsSwiper"
            slidesPerView={1}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            onSlideChange={(swiper)=>{setInfo(swiper)}}
            >
              {
                  projectsMedia.map((project, index)=>{
                    return(
                      <SwiperSlide key={index} className="projectsSwiper--slide">
                        <h1 className="projectsSwiper--title">{project.title}</h1>
                        <img className="projectsSwiper--img" src={project.img} alt={project.title} />
                        <button className="projectsSwiper--btn">More</button>
                      </SwiperSlide>
                    )
                  })
                }
            </Swiper>
            <motion.div
            initial={{ opacity: 0 }}
            variants={infoTextVariants}
            animate={infoVariant}
            transition={{ duration: 0.2, ease: "easeOut"}}
            >   
              <h1>{currentProject?.title}</h1>
              <p>{currentProject?.description}</p>
            </motion.div>
          </ProjectsContainer>
            {/* <ProjectsContainer>
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="projectsSwiper"
              >
                {
                  projectsMedia.map((project, index)=>{
                    return(
                      <SwiperSlide key={index} className="projectsSwiper--slide">
                        <h1 className="projectsSwiper--title">{project.title}</h1>
                        <img className="projectsSwiper--img" src={project.img} alt={project.title} />
                        <button className="projectsSwiper--btn">More</button>
                      </SwiperSlide>
                    )
                  })
                }
              </Swiper>
            </ProjectsContainer> */}
          </>

        )
      }  
      

    </ProjectsInfoContainer>
  )
};
