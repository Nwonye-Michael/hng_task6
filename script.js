document.addEventListener("DOMContentLoaded", function () {
  const sleepingKoala = document.getElementById("sleeping-koala")

  let sleeping = false
  const awakeKoala = document.getElementById("awake-koala")
  const wakeMeBtn = document.querySelector("#wake-me-button")

  wakeMeBtn.addEventListener("click", () => {
    console.log("clicked")
    if (!sleeping) {
      // Wake it
      awakeKoala.style.display = "none"
      sleepingKoala.style.display = "flex"
      wakeMeBtn.textContent = "wake me"
      sleeping = true
      console.log("changed to sleeping")
    } else {
      // Send it to bed

      sleepingKoala.style.display = "none"
      awakeKoala.style.display = "flex"
      wakeMeBtn.textContent = "send to bed"
      sleeping = false
      console.log("changed to awake")
    }
  })

  wakeMeBtn.click()
  wakeMeBtn.click()
  wakeMeBtn.click()
  document.addEventListener("click", (event) => {
    if (event.target.id === "wake-me-button" || "makeitrainbtn") {
      return null
    } else {
      console.log("body clicked")

      const mouseX = event.clientX
      const mouseY = event.clientY

      gsap.to(sleepingKoala, { x: mouseX, y: mouseY, duration: 0.5 })
      gsap.to(awakeKoala, { x: mouseX, y: mouseY, duration: 0.5 })
    }
  })

  const sun = document.querySelector(".sun")
  const moon = document.querySelector(".moon")
  const rain = document.querySelector(".rain")
  const cloud = document.querySelector(".cloud")
  const makeitRain = document.querySelector("#makeitrainbtn")

  let isRaining = false

  makeitRain.addEventListener("click", (event) => {
    if (!isRaining) {
      isRaining = true

      gsap.to("body", {
        backgroundColor: "#333",
        duration: 2,
      })

      makeitRain.textContent = "Lights On"
    } else {
      isRaining = false

      gsap.to("body", {
        backgroundColor: "#c48f5c",
        duration: 2,
      })

      makeitRain.textContent = "lights out"
    }
    const vwToPixels = (vw) => (vw * window.innerWidth) / 100
    const vhToPixels = (vh) => (vh * window.innerHeight) / 100
    const mouseX = event.clientX + vwToPixels(1)

    const mouseY = event.clientY - vhToPixels(10)
    gsap.to(sleepingKoala, {
      x: mouseX,
      y: mouseY,
      duration: 2,
      yoyo: true,
    })
    gsap.to(sleepingKoala, {
      x: mouseX,
      y: mouseY,
      duration: 2,
      yoyo: true,
    })
    gsap.to(awakeKoala, {
      x: mouseX,
      y: mouseY,
      duration: 2,
      yoyo: true,
    })
  })
})
