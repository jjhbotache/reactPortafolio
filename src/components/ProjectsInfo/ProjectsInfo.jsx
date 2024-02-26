import { useContext, useEffect, useRef, useState } from "react";
import { ProjectsContainer, ProjectsInfoContainer, WelcomeText } from "./ProjectsInfoStyledComponents";
import Typewriter from 'typewriter-effect';

import { motion } from "framer-motion";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Navigation } from 'swiper/modules';

import projectsMedia from "../../constants/projectsMedia";
import githubImg from "../../assets/images/github.png";
import browserImg from "../../assets/images/browser.png";
import { Link } from "react-router-dom";
import { GlobalStateContext } from "../../contexts/LanguajeContextProvider";
import texts from "../../constants/texts";



export default function ProjectsInfo({onScrolled,maximazed}) {
  const [titleTyped, setTitleTyped] = useState(false);
  const welcomeTextRef = useRef(null);
  const showIntroRef = useRef(true);
  const [currentProject, setCurrentProject] = useState(null);
  const [infoVariant, setInfoVariant] = useState("hidden");
  const projectsInfoContainerRef = useRef(null);

  const {languaje} = useContext(GlobalStateContext);


  function welcomeTextFadeOut(){
    welcomeTextRef.current?.classList.add("welcomeText__fade-out");
    setTimeout(()=>{
      showIntroRef.current = false
      setTitleTyped(false);
    }, 1000);
  }
  
  function setInfo(swiper) {
    setInfoVariant("hidden");
    if (!!timer) clearTimeout(timer);
    var timer = setTimeout(()=>{
      setCurrentProject(projectsMedia[swiper.realIndex]);
      setInfoVariant("visible");
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
                .typeString(texts.projectsInfo.title[languaje])
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
                    .typeString(texts.projectsInfo.smallDescription[languaje])
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

                  <hr className="currentProjectInfo--separator" />
                  <h1 className="currentProjectInfo--name">{currentProject.title}</h1>
                  <ul className="currentProjectInfo--tags-container">
                    {
                    currentProject.tags.map((tag, index)=>(<li key={index} className="currentProjectInfo--tag">{tag}</li>))
                    }
                  </ul>
                  <p className="currentProjectInfo--description">{currentProject.description[languaje]}</p>
                  <video className="currentProjectInfo--video" src={currentProject.video} controls loop autoPlay muted></video>
                  <section className="currentProjectInfo--check-project-section">
                    <h2 className="title">{texts.projectsInfo.checkItOut[languaje]}</h2>
                    <div className="check-on-options">
                      <Link className={"check-on-option " +  (currentProject.links[0].link === null  ? `check-on-option__disabled`  : "") } to={currentProject.links[0].link} target="_blank">
                        <img className="check-on-option--img" src={githubImg} alt="" srcset="" />
                        <h3 className="check-on-option--name">Github</h3>
                      </Link>
                      <Link className={"check-on-option " +  (currentProject.links[1].link === null  ? `check-on-option__disabled`  : "") } to={currentProject.links[1].link} target="_blank">
                        <img className="check-on-option--img" src={browserImg} alt="" srcset="" />
                        <h3 className="check-on-option--name">Web</h3>
                      </Link>
                    </div>
                  </section>


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
