import { motion } from "framer-motion"
import { ContactInfoContainer } from "./ContactInfoStyledComponents"
import { useEffect, useRef } from "react";


export default function ContactInfo() {
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

  function resizeContainer(container) {
    container.style.width = "90%";
    container.style.height = "90%";

    const sizes = [container.clientWidth, container.clientHeight];
    const smallestSize = Math.min(...sizes);
    // find the smallest size
    // and rezise the opostite size to the smallest size by using percentages and the simple rule of three
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

  // Create a new ResizeObserver instance
  let resizeObserver = new ResizeObserver(entries => { 
    // entries is an array of ResizeObserverEntry objects
    for (let entry of entries) {
      resizeContainer(entry.target)
      console.log("resized");
    }
  });

  

  useEffect(() => {
    const motionDiv = motionDivRef.current;
    
    
    resizeContainer(motionDiv);   
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
      className="motion-div"
      animate={
        { 
          transform: ["translate(-50%,-50%)", "translate(-50%,-50%)"],
          scale: [0.2,1],
          borderRadius: ["5%", "50%"]
        }
      } 
      transition={{ delay: 1, duration: 0.5}}
      >
        <ul>
          {contactOptions.map((contactOption, index) => {
            return (
              <li key={index}>{contactOption.icon}</li>
            )
          }
          )}                
        </ul>
      </motion.div>
    </ContactInfoContainer>
  )
};
