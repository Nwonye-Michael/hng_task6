let sleeping = true

document.addEventListener("DOMContentLoaded", function () {
  // Get a reference to the box element
  const sleepingKoala = document.getElementById("sleeping-koala")
  const wakeMeBtn = document.querySelector("#wake-me-button")
  // Add a click event listener to the document
  document.addEventListener("click", (event) => {
    // Get the mouse coordinates where the click occurred

    if (event.target.id === "wake-me-button") {
      console.log(event)

      return null
    } else {
      console.log("body clicked")
      console.log(event)
      const mouseX = event.clientX
      const mouseY = event.clientY

      // Use GSAP to animate the box to the clicked position
      gsap.to(sleepingKoala, { x: mouseX, y: mouseY, duration: 0.5 })
    }
  })

  wakeMeBtn.addEventListener("click", () => {
    if (sleeping) {
      // wake it
      sleepingKoala.src = "/assets/awake.png"
      wakeMeBtn.textContent = "send to bed"
      sleeping = false
      console.log("changed to awake")
    } else {
      sleepingKoala.src = "/assets/sleeping.png"
      wakeMeBtn.textContent = "wake me"
      sleeping = true
      console.log("changed to sleeping")
    }
  })
})
