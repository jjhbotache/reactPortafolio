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
import downloadImg from "../../assets/images/download.png";
import { Link } from "react-router-dom";
import { GlobalStateContext } from "../../contexts/LanguajeContextProvider";
import texts from "../../constants/texts";
import technologies from "../../constants/technologies";
import TechTag from "./TechTag/TechTag";

technologies

const allTechnologies = Object.keys(technologies).map(
  category => technologies[category].map(tech => tech)
).flat();

export default function ProjectsInfo({onScrolled,maximazed}) {
  const [titleTyped, setTitleTyped] = useState(false);
  const welcomeTextRef = useRef(null);
  const [showIntro, setShowIntro] = useState(true);
  const [currentProject, setCurrentProject] = useState(null);
  const [infoVariant, setInfoVariant] = useState("hidden");
  const projectsInfoContainerRef = useRef(null);

  const {language} = useContext(GlobalStateContext);

  const timeToGoUpInSecs = .8;

  function welcomeTextFadeOut(){
    welcomeTextRef.current?.classList.add("welcomeText__fade-out");
    setTimeout(()=>{
      setShowIntro(false);
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
        showIntro
        ?(
          <WelcomeText ref={welcomeTextRef} onClick={e=>{setTitleTyped(true);setShowIntro(false)}}>
            <Typewriter
              onClick={e=>setTitleTyped(true)}
              onInit={typewriter=>{
                typewriter
                .pauseFor(1000)
                .typeString(texts.projectsInfo.title[language])
                .pauseFor(1000)
                .callFunction(()=>{setTitleTyped(true);})
                .start();
              }}
              options={{
                wrapperClassName: "title",
                cursor: "",
                delay: 20
              }}
            />
            {
              titleTyped &&
              <div className="subtitle">
                <hr className="subtitle__separator" />
                <Typewriter
                  onInit={typewriter=>{
                    typewriter
                    .typeString(texts.projectsInfo.smallDescription[language])
                    .pauseFor(1000)
                    .callFunction(welcomeTextFadeOut)

                    .start();
                  }}
                  options={{
                    wrapperClassName: "subtitle__text",
                    delay: 10,
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
                      <SwiperSlide key={index} className="projectsSwiper__slide">
                        <h1 className="projectsSwiper__title">{project.title}</h1>
                        <img className="projectsSwiper__img" src={project.img} alt={project.title} />
                        {!maximazed && <button className="projectsSwiper__btn" onClick={() => { projectsInfoContainerRef.current.scrollBy({ top: 500, behavior: 'smooth' }); }}>{texts.projectsInfo.more[language]}</button>}
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
                  {/* title - separator - tags */}
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: timeToGoUpInSecs, ease: "easeOut" }}
                  >
                    <hr className="currentProjectInfo__separator" />
                    <h1 className="currentProjectInfo__name">{currentProject.title}</h1>
                  </motion.div>
                  {/* technologies */}
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: timeToGoUpInSecs, ease: "easeOut" }}
                  >
                  <ul className="currentProjectInfo__techs_container">{
                    currentProject.tags.map((tag, index)=><TechTag key={index} tag={tag} allTechnologies={allTechnologies} />)
                  }</ul>
                  </motion.div>

                  {/* project description */}
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: timeToGoUpInSecs, ease: "easeOut" }}
                  >
                  <p className="currentProjectInfo__description">{currentProject.description[language]}</p>
                  </motion.div>
                  {/* video */}
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: timeToGoUpInSecs, ease: "easeOut" }}
                  >
                  <video className="currentProjectInfo__video" src={currentProject.video} controls loop autoPlay muted></video>
                  </motion.div>
                  {/* check project section */}
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: timeToGoUpInSecs, ease: "easeOut" }}
                  >
                  <section className="currentProjectInfo__check-project-section">
                    <h2 className="title">{texts.projectsInfo.checkItOut[language]}</h2>
                    <div className="check-on-options">
                      {
                        currentProject.links.map((link, index)=>(
                          <Link
                            key={index}
                            className={"check-on-option " +  (link.link === null  ? `check-on-option__disabled`  : "") }
                            target="_blank"
                            to={link.link}
                            download={link.name.includes("Download")}
                            >
                            <img className="check-on-option__img" src={ 
                              
                              link.name.includes("Github")
                                ? githubImg 
                                : link.name.includes("Web")
                                  ? browserImg
                                  : link.name.includes("Download")
                                    ? downloadImg
                                    : ""
                              } alt="option img" />
                            <h3 className="check-on-option__name">{link.name}</h3>
                          </Link>
                        ))
                      }
                    </div>
                  </section>
                  </motion.div>


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
