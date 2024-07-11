export default function requesFullscren(element) {
return new Promise((resolve, reject) => {
  if (!element) reject('No element provided')

  if (element.requestFullscreen) {
    element.requestFullscreen()
    .then(() => {
      resolve()
    })
    .catch((err) => {
      reject(err)
    })
  } else if (element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen()
    .then(() => {
      resolve()
    })
    .catch((err) => {
      reject(err)
    })
  } else if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen()
    .then(() => {
      resolve()
    })
  } else if (element.msRequestFullscreen) {
    element.msRequestFullscreen()
    .then(() => {
      resolve()
    })
    .catch((err) => {
      reject(err)
    })
  }
})
  
};
