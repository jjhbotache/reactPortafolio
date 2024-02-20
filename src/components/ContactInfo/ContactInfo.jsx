import { motion } from "framer-motion"
import { ContactInfoContainer } from "./ContactInfoStyledComponents"
import { useEffect, useRef, useState } from "react";
import { secondaryColor } from "../../constants/styleConstants";


export default function ContactInfo() {
  const [contactCircleState, setContactCircleState] = useState(["closed"]);
  const motionDivRef = useRef(null);

  const contactOptions = [
    {
      "name": "email",
      "icon": "✉️",
      "link": "mailto:"
    },
    {
      "name": "github",
      "icon": "🐙",
      "link": "/github",
    },
    {
      "name": "linkedin",
      "icon": "🔗",
      "link": "/linkedin",
    },
    {
      "name": "whatsapp",
      "icon": "📱",
      "link": "https://wa.me/"
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
  

  useEffect(() => {
    // Create a new ResizeObserver instance
    let resizeObserver = new ResizeObserver(entries => { 
      // entries is an array of ResizeObserverEntry objects
      for (let entry of entries) { resizeContainer(entry.target) }
    });
    const motionDiv = motionDivRef.current;
    setTimeout(async() => {
      setContactCircleState(["open"]);
    }, 1200);
    setTimeout(() => {
      setContactCircleState(["open","spin"]);
    }, 4000);
    
    
    resizeContainer(motionDiv);   
    resizeObserver.observe(motionDiv);

    // Clean up function
    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    console.log(contactCircleState);
  }, [contactCircleState]);
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
                  >{contactOption.icon}</motion.li>
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

function resizeContainer(container) {
  container.style.width = "90%";
  container.style.height = "90%";

  const sizes = [container.clientWidth, container.clientHeight];
  // rezise the opostite size to the smallest size by using percentages and the simple rule of three
  // x = a * b / c
  if (sizes[0] < sizes[1]) {
    container.style.height = "100%";
    const pxToGet = sizes[0];
    const maxPixels = container.clientHeight;


    const newHeight = pxToGet * 100 / maxPixels;
    container.style.height = newHeight+"%";  
    
  }
  else {
    container.style.width = "100%";

    const pxToGet = sizes[1];
    const maxPixels = container.clientWidth;

    const newWidth = pxToGet * 100 / maxPixels;
    container.style.width = newWidth+"%";
    
  }



}