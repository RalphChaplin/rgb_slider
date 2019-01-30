const inputs = document.querySelectorAll('.controls input');

function colorUpdate() {
  document.documentElement.style.setProperty(`--${this.name}`, this.value);

  let redSlider = document.getElementById("red");
  let greenSlider = document.getElementById("green");
  let blueSlider = document.getElementById("blue");
  
  let redNumber = document.getElementById("redColor");
  let greenNumber = document.getElementById("greenColor");
  let blueNumber = document.getElementById("blueColor");

  redNumber.innerHTML = redSlider.value;
  greenNumber.innerHTML = greenSlider.value;
  blueNumber.innerHTML = blueSlider.value;


}

inputs.forEach(input => input.addEventListener('change', colorUpdate));
inputs.forEach(input => input.addEventListener('mousemove', colorUpdate));
