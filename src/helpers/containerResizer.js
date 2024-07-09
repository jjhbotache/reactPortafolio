export default function containerResizer(container, maxSize = 100) {
  if(!container) return

  // console.log("containerResizer");
  container.style.width = `${maxSize}%`;
  container.style.height = `${maxSize}%`;
  container.style.aspectRatio = "unset";
  const sizes = [container.offsetWidth, container.offsetHeight];

  if (sizes[0] === sizes[1]){
    return
  }
  else if (sizes[0] < sizes[1]) {
    // width is the smallest size
    container.style.width = "100%";
    container.style.height = "unset";
  }
  else {
    // height is the smallest size
    container.style.height = "100%";
    container.style.width = "unset";
  }
  container.style.aspectRatio = "1/1";

  // console.log("containerResizer", sizes, container.style.width, container.style.height);
}
