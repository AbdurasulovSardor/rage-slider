const sliderValue = document.querySelector("span")
const inputSlider = document.querySelector("input")

inputSlider.addEventListener("input", () => {
  let value = inputSlider.value
  sliderValue.textContent = value
  sliderValue.style.left = (value / 2) + "%"
  sliderValue.classList.add("show")
})

inputSlider.addEventListener("blur", () => {
  sliderValue.classList.remove("show")
})