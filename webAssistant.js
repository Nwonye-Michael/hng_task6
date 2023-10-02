const box = document.querySelector(".box")
// const assistant = document.querySelector('.assistant')

document.addEventListener("click", (event) => {
  // Get the mouse click coordinates
  const mouseX = event.clientX
  const mouseY = event.clientY

  // Use GSAP to animate the box to the clicked position
  gsap.to(box, {
    duration: 0.5, // Animation duration in seconds
    x: mouseX, // Destination X coordinate
    y: mouseY, // Destination Y coordinate
    ease: "power2.out", // Easing function (optional)
  })
})
