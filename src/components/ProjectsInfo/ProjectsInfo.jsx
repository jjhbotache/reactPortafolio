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

export default function ProjectsInfo({onScrolled,maximazed}) {
  const [titleTyped, setTitleTyped] = useState(false);
  const welcomeTextRef = useRef(null);
  const showIntroRef = useRef(false);// false just to dev
  const [currentProject, setCurrentProject] = useState(null);
  const [infoVariant, setInfoVariant] = useState("hidden");
  const projectsInfoContainerRef = useRef(null);


  function welcomeTextFadeOut(){
    welcomeTextRef.current?.classList.add("welcomeText__fade-out");
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

  console.log(
    "video: ", currentProject?.video,
  );

  useEffect(()=>{
    console.log("currentProject: ", currentProject);
  }, [currentProject]);
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
          <ProjectsContainer 
            onScroll={e=>{onScrolled(e);}}
            ref={projectsInfoContainerRef}
            >
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
                        {!maximazed && <button className="projectsSwiper--btn" onClick={() => { projectsInfoContainerRef.current.scrollBy({ top: 500, behavior: 'smooth' }); }}>More</button>}
                      </SwiperSlide>
                    )
                  })
                }
            </Swiper>
            {
              currentProject && (
                <motion.div
                initial={{ opacity: 0 }}
                variants={infoTextVariants}
                animate={infoVariant}
                transition={{ duration: 0.2, ease: "easeOut"}}
                className="currentProjectInfo"
                >   
                  <h1 className="currentProjectInfo--name">{currentProject.title}</h1>
                  <p className="currentProjectInfo--description">{currentProject.description}</p>
                  <video src={currentProject.video} controls loop autoPlay></video>
                </motion.div>
              )
            }
          </ProjectsContainer>
          </>

        )
      }  
      

    </ProjectsInfoContainer>
  )
};
