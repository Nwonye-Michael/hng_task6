document.addEventListener("DOMContentLoaded", function () {
  const box = document.getElementById("box")

  document.addEventListener("click", (event) => {
    const mouseX = event.clientX
    const mouseY = event.clientY

    // Calculate the position relative to the entire document
    const rect = box.getBoundingClientRect()
    const offsetX = mouseX - rect.width / 2
    const offsetY = mouseY - rect.height / 2

    // Use GSAP to animate the box to the clicked position
    gsap.to(box, { x: offsetX, y: offsetY, duration: 0.5 })
  })
})
