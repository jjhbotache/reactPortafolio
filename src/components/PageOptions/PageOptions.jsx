import { PageOptionsContainer } from "./PageOptionsStyledComponents";
import { useEffect, useState } from "react";

export default function PageOptions() {
  const [isFullscreen, setIsFullscreen] = useState(
    document.documentElement.offsetWidth === screen.availWidth
    && 
    document.documentElement.offsetHeight === screen.availHeight
  );


  useEffect(() => {

    function checkAndUpdateFullScreen() {
      console.clear();
      const sizesAreEqual =
        document.documentElement.offsetWidth === screen.availWidth
        && 
        document.documentElement.offsetHeight === screen.availHeight

      console.log(document.fullscreenElement !== null,document.webkitIsFullScreen,sizesAreEqual);
      const isFullScreenCheck = 
        document.fullscreenElement !== null
        ||
        document.webkitIsFullScreen
        ||
        sizesAreEqual;
      console.log("is:",isFullScreenCheck);
      setIsFullscreen(isFullScreenCheck);
    }

    let resizeObserver = new ResizeObserver(entries =>{
      for (let entry of entries) {
        if(entry.target === document.documentElement){
          checkAndUpdateFullScreen();
        }
      }
    });
      
    window.addEventListener("fullscreenchange",e=>{ checkAndUpdateFullScreen() });
    window.addEventListener("keyup",e=>{ checkAndUpdateFullScreen() });
    resizeObserver.observe(document.documentElement);
    return () => {
      window.removeEventListener("fullscreenchange",e=>{ checkAndUpdateFullScreen() });
      window.removeEventListener("keyup",e=>{ checkAndUpdateFullScreen() });
      resizeObserver.unobserve(document.documentElement);
    };

  }, []);

  return (
    <PageOptionsContainer >
      <li>
        <button onClick={
          () => {
            document.fullscreenElement !== null
              ?document.exitFullscreen()
              :document.documentElement.requestFullscreen();
          }
        
        }>
          {
            isFullscreen 
              ?<i className="fi fi-br-compress"></i>
              :<i className="fi fi-br-expand"></i>
          }
        </button>
      </li>
      <li>
        <button>
          <i className="fi fi-br-globe"></i>
        </button>
      </li>
    </PageOptionsContainer>
  );
  }
