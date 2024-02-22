export default function containerResizer(container, maxSize = 100) {

  // if the sizes are the same, then the container is already a square. return
  if (container.offsetWidth.toFixed(2) === container.offsetHeight.toFixed(2)) { return; }

  const transition = container.style.transition;
  // delete transition to avoid the animation
  container.style.transition = "none";
  


  container.style.width = `${maxSize}%`;
  container.style.height = `${maxSize}%`;

  const maxWidthInPixels = container.offsetWidth;
  const maxHeightInPixels = container.offsetHeight;

  // rezise the opostite size to the smallest size by using percentages and the simple rule of three
  // x = a * b / c
  // debugger
  const sizes = [container.offsetWidth, container.offsetHeight];

  // console.log("sizes",sizes);
  
  
  if (sizes[0]< sizes[1]) {
    container.style.height = "100%";
    const pxToGet = sizes[0];
    const maxPixels = maxHeightInPixels;


    const newHeight = pxToGet * 100 / maxPixels;
    container.style.height = newHeight+"%";  
    
  }
  else {
    container.style.width = "100%";
    
    const pxToGet = sizes[1];
    const maxPixels = maxWidthInPixels;
    const newWidth = pxToGet * 100 / maxPixels;
    container.style.width = newWidth+"%";
    
    console.log(` 100% = ${maxPixels}px => ${pxToGet}px = ${newWidth}%`);
    console.log("container",container);
  }


  setTimeout(() => {
    container.style.transition = transition; // let the transition as it was before
  }, 200);
}
