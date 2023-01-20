const inputSpacing = document.querySelector(`.numberSpacing`);
const btnSpacing = document.querySelector(`.numberSpacingChange`);
const changedPix = document.querySelector(`.changedPix`);
const inputOpacity = document.querySelector(`.opacity`);
const imageOpacity = document.querySelector(`.opacityImage`);
const imageFilter = document.querySelector(`.filterImage`);
const body = document.querySelector(`body`);
const inputColor = document.querySelector(`.color`);
const btnBlur = document.querySelector(`.buttonBlur`);
const btnBW = document.querySelector(`.buttonBW`);
const btnShadow = document.querySelector(`.buttonShadow`);

function changeSpace() {
  let spaceInput = +inputSpacing.value;
  changedPix.style.wordSpacing = `${spaceInput}px`;
}

btnSpacing.addEventListener("click", changeSpace);

function changeOpacity() {
  let opacityValue = +inputOpacity.value;
  imageOpacity.style.opacity = opacityValue;
}

inputOpacity.addEventListener(`input`, changeOpacity);

function changeColor() {
  let colorValue = inputColor.value;
  body.style.backgroundColor = colorValue;
}

inputColor.addEventListener(`input`, changeColor);

btnBlur.addEventListener(
  `click`,
  () => (imageFilter.style.filter = `blur(5px)`)
);

btnBW.addEventListener(
  `click`,
  () => (imageFilter.style.filter = `grayscale(100%)`)
);

btnShadow.addEventListener(
  `click`,
  () => (imageFilter.style.filter = `drop-shadow(16px 16px 20px black)`)
);
