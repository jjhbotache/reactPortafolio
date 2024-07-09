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
                <hr className="subtitle--separator" />
                <Typewriter
                  onInit={typewriter=>{
                    typewriter
                    .typeString(texts.projectsInfo.smallDescription[language])
                    .pauseFor(1000)
                    .callFunction(welcomeTextFadeOut)

                    .start();
                  }}
                  options={{
                    wrapperClassName: "subtitle--text",
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
                      <SwiperSlide key={index} className="projectsSwiper--slide">
                        <h1 className="projectsSwiper--title">{project.title}</h1>
                        <img className="projectsSwiper--img" src={project.img} alt={project.title} />
                        {!maximazed && <button className="projectsSwiper--btn" onClick={() => { projectsInfoContainerRef.current.scrollBy({ top: 500, behavior: 'smooth' }); }}>{texts.projectsInfo.more[language]}</button>}
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
                    <hr className="currentProjectInfo--separator" />
                    <h1 className="currentProjectInfo--name">{currentProject.title}</h1>
                    <ul className="currentProjectInfo--tags-container">
                      {
                      currentProject.tags.map((tag, index)=>(<li key={index} className="currentProjectInfo--tag">{tag}</li>))
                      }
                    </ul>
                  </motion.div>
                  {/* project description */}
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: timeToGoUpInSecs, ease: "easeOut" }}
                  >
                  <p className="currentProjectInfo--description">{currentProject.description[language]}</p>
                  </motion.div>
                  {/* video */}
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: timeToGoUpInSecs, ease: "easeOut" }}
                  >
                  <video className="currentProjectInfo--video" src={currentProject.video} controls loop autoPlay muted></video>
                  </motion.div>
                  {/* check project section */}
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: timeToGoUpInSecs, ease: "easeOut" }}
                  >
                  <section className="currentProjectInfo--check-project-section">
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
                            <img className="check-on-option--img" src={ 
                              
                              link.name.includes("Github")
                                ? githubImg 
                                : link.name.includes("Web")
                                  ? browserImg
                                  : link.name.includes("Download")
                                    ? downloadImg
                                    : ""
                              } alt="option img" />
                            <h3 className="check-on-option--name">{link.name}</h3>
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
