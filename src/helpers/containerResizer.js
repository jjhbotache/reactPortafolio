export default function containerResizer(container, maxSize = 100) {





  // if the sizes are the same, then the container is already a square. return
  if (container.offsetWidth.toFixed(2) === container.offsetHeight.toFixed(2)) { return; }

  container.style.width = `${maxSize}%`;
  container.style.height = `${maxSize}%`;
  const sizes = [container.offsetWidth, container.offsetHeight];

  // get the minimun size of the container in pixels

  if (sizes[0] === sizes[1]){return}
  else if (sizes[0] < sizes[1]) {
    // width is the smallest size
    container.style.width = "100%";
    container.style.height = "unset";
    container.style.aspectRatio = "1/1";
  }
  else {
    // height is the smallest size
    container.style.height = "100%";
    container.style.width = "unset";
    container.style.aspectRatio = "1/1";
  }
}
