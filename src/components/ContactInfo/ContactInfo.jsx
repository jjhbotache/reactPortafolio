import { motion } from "framer-motion"
import { ContactInfoContainer, LogoLink } from "./ContactInfoStyledComponents"
import { useEffect, useRef, useState } from "react";
import { secondaryColor } from "../../constants/styleConstants";
import { Link } from "react-router-dom";
import gmailImg from "/images/gmail.png";
import githubImg from "/images/github.png";
import linkedinImg from "/images/linkedin.png";
import whatsappImg from "/images/whatsapp.png";
import containerResizer from "../../helpers/containerResizer";


export default function ContactInfo() {
  const [contactCircleState, setContactCircleState] = useState(["closed"]);
  const motionDivRef = useRef(null);

  const contactOptions = [
    {
      "name": "gmail",
      "icon": gmailImg,
      "link": "mailto: jjhuertasbotache@gmail.com?subject=Contacto desde tu portafolio"
    },
    {
      "name": "github",
      "icon": githubImg,
      "link": "https://github.com/jjhbotache",
    },
    {
      "name": "linkedin",
      "icon": linkedinImg,
      "link": "https://www.linkedin.com/in/juan-jose-huertas-botache/",
    },
    {
      "name": "whatsapp",
      "icon": whatsappImg,
      "link": "https://wa.me/3012167977?text= Hola Juan Jose, vi tu portafolio y me gustaría contactarte!"
    }
  ]

  const contactCircleVariants = {
    spin: {
      transform: [
        "translate(-50%,-50%) rotate(0deg)",
        "translate(-50%,-50%) rotate(360deg)"
      ],
      transition: {
        duration: 20,
        ease: "linear",
        repeat: Infinity
      },
    },
    open: { 
      transform: ["translate(-50%,-50%)", "translate(-50%,-50%)"],
      scale: [0.2,1],
      borderRadius: ["5%", "50%"],
      boxShadow: ["0px 0px 0px 0px #000000", `0px 0px 5rem 5px ${secondaryColor}`],
      transition:{
        staggerChildren: 0.2,
      }
    },
    closed: {
      transform: ["translate(-50%,-50%)", "translate(-50%,-50%)"],
      scale: 0.2,
      borderRadius: "5%",
      boxShadow: "0px 0px 0px 0px #000000"
    }
  }

  const contactOptionsCircleVariants = {
    open:degToRotate =>({ 
      top: "50%",
      left: "50%",
      transform:[
        "translate(-50%,-50%) rotate(0deg)",
        `translate(-50%,-50%) rotate(${degToRotate}deg)`
      ],

      height: ["0%","85%"],
      scale: [0,1],
      opacity: [0,1],
      transition:{
        duration: 2,
      }
    }),
    closed: {
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%)",

      height: 0,
      rotate: 0,
      scale: 0,
      opacity: 0
    }
  }

  const logoImgVariants = {
    spin:degToRotate =>({
      transform: [
        `translate(-50%,-50%) rotate(-${(degToRotate/90)*90}deg)`,
        `translate(-50%,-50%) rotate(${(-360) - ((degToRotate/90)*90)}deg)`
      ],
      transition: {
        duration: 20,
        ease: "linear",
        repeat: Infinity
      }
    }),
    open:degToRotate =>({
      transform: [
        `translate(-50%,-50%) rotate(-${(degToRotate/90)*90}deg)`,
        `translate(-50%,-50%) rotate(-${(degToRotate/90)*90}deg)`,
      ],
      scale: [0,1],
      transition: {
        duration: .4,
      }
    }),

  }
  

  useEffect(() => {
    // Create a new ResizeObserver instance
    let resizeObserver = new ResizeObserver(entries => { 
      // entries is an array of ResizeObserverEntry objects
      for (let entry of entries) { containerResizer(entry.target,90) }
    });
    const motionDiv = motionDivRef.current;
    setTimeout(() => {
      setContactCircleState(["open","spin"]);
    }, 1000);
    
    
    containerResizer(motionDiv,90);   
    resizeObserver.observe(motionDiv);

    // Clean up function
    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return(
    <ContactInfoContainer>
      <motion.div 
      ref={motionDivRef}
      className="contactCircleContainer"
      variants={contactCircleVariants}
      animate={contactCircleState} 
      initial="closed"
      transition={{ duration: .4,ease: "easeOut"}}
      >
        {
          contactCircleState.includes("open")
          ? (
            <ul>
              {contactOptions.map((contactOption, index) => {
                const optionsAmount = contactOptions.length;
                const degToRotate = (360/optionsAmount)*(index+1);

                return (
                  <motion.li 
                  key={index} 
                  className="contactCircleContainer--item"
                  variants={contactOptionsCircleVariants}
                  custom={degToRotate}

                  ><LogoLink to={contactOption.link} $index={index} $name={contactOption.name}  target="_blank">
                  <motion.img 
                    src={contactOption.icon} 
                    alt="contact icon"
                    variants={logoImgVariants}
                    custom={degToRotate}
                    />
                  </LogoLink></motion.li>
                )
              }
              )}                
            </ul>
          )
          : null
        }
      </motion.div>
    </ContactInfoContainer>
  )
};
