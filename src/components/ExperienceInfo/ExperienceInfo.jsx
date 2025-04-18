import React, { useContext } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';



// Assuming you'll create a styles.css file in the same directory or adjust the path
// import './styles.css'; // You might need to create this file or adjust the path

// import required modules
import { EffectCards, Pagination } from 'swiper/modules';
import { ExperienceInfoStyledComponents, ExperienceCard } from "./ExperienceInfoStyledComponents";
import experienceMedia, { months } from "../../constants/experienceMedia";
import { GlobalStateContext } from "../../contexts/LanguajeContextProvider";
import { Link } from "react-router-dom";

// Componente que muestra información de experiencia como un slider.
export default function ExperienceInfo() {
  const {language} = useContext(GlobalStateContext);

  return (
    <ExperienceInfoStyledComponents>
        <Swiper
          effect={'cards'}
          grabCursor={true}
          modules={[EffectCards]}
          className="experience-info__swiper"
        >
          {experienceMedia.map((experience, index) => {

            const startMonth = months[language][experience.date.start.month -1];
            const startYear = experience.date.start.year;
            let formattedExperienceDate;

            if (
              experience.date.end &&
              experience.date.end.month === experience.date.start.month &&
              experience.date.end.year === experience.date.start.year
            ) {
              // mismas fechas: solo mostrar inicio
              formattedExperienceDate = `${startMonth} ${startYear}`;
            } else {
              const endDateStr = experience.date.end
                ? `${months[language][experience.date.end.month-1]} ${experience.date.end.year}`
                : language === "en"
                ? "Present"
                : "Presente";

              formattedExperienceDate = `${startMonth} ${startYear} - ${endDateStr}`;
            }
                
          return (
            <SwiperSlide key={index} className="experience-info__slide">
              <ExperienceCard className="experience-card" >
                <div>
                  <h3 className="experience-card__title">{experience.title[language]}</h3>
                  <p className="experience-card__date">
                    {formattedExperienceDate}
                  </p>
                </div>
                
                {/* Swiper for images */}
                <Swiper
                  className="experience-card__images"
                  modules={[Pagination]} 
                  direction="vertical"
                  pagination={{ clickable: true }}
                  >
                {experience.imgs.map((img, imgIndex) => (
                  <SwiperSlide key={imgIndex}>
                    <img src={img} alt="experience" />
                  </SwiperSlide>
                  ))}
                </Swiper>

                <div className="experience-card__enterprises">
                {experience.enterprises.map((enterprise, enterpriseIndex) => {
                    return <Link key={enterpriseIndex} className="experience-card__enterprise-item" to={enterprise.link} target="_blank" rel="noopener noreferrer">
                      <img src={enterprise.logo} alt="enterprise logo" className="experience-card__enterprise-item__logo" />
                      <p className="experience-card__enterprise-item__name">{enterprise.name}</p>
                    </Link>
                })}
                </div>

                <div className="experience-card__technologies">
                  {experience.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="experience-card__technology">{tech}</span>
                  ))}
                </div>

                <p className="experience-card__description">{experience.description[language]}</p>
                
              </ExperienceCard>
            </SwiperSlide>
          )})}
        </Swiper>
    </ExperienceInfoStyledComponents>
  );
}
