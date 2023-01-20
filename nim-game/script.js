const startContainer = document.querySelector(`#startContainer`);
const inputMaxNumber = document.querySelector(`#inputMaxNumber`);
const inputMaxStep = document.querySelector(`#inputMaxStep`);
const btnStartGame = document.querySelector(`#btnStartGame`);
const mainContainer = document.querySelector(`#mainContainer`);
const outputTotalNumber = document.querySelector(`#outputTotalNumber`);
const outputMaxNumber = document.querySelector(`#outputMaxNumber`);
const currentNumbers = document.querySelector(`#currentNumbers`);
const usersNumber = document.querySelector(`#usersNumber`);
const btnNextStep = document.querySelector(`#btnNextStep`);
const whoSrarts = document.querySelector(`#whoSrarts`);
const finishContainer = document.querySelector(`#finishContainer`);
const mistakeInStart = document.querySelector(`#mistakeInStart`);

mainContainer.style.display = `none`;
finishContainer.style.display = `none`;

let maxNum, maxStep;

let totalNum = 0;

function gameStart() {
  maxNum = +inputMaxNumber.value;
  maxStep = +inputMaxStep.value;

  if (
    maxNum < 1 ||
    maxStep < 1 ||
    maxStep >= maxNum ||
    Number.isInteger(maxNum) === false ||
    Number.isInteger(maxStep) === false
  ) {
    mistakeInStart.innerText = `invalid input!`;
  } else {
    if (whoSrarts.value === `user`) {
      startContainer.style.display = `none`;
      mainContainer.style.display = `contents`;
      outputTotalNumber.innerText = `Current number: ${totalNum}`;
      outputMaxNumber.innerText = `Max number: ${maxNum}, max step: ${maxStep}`;
    } else if (whoSrarts.value === `pc`) {
      startContainer.style.display = `none`;
      mainContainer.style.display = `contents`;
      totalNum = totalNum + Math.floor(Math.random() * (maxStep - 1) + 1);
      outputTotalNumber.innerText = `Current number: ${totalNum}`;
      outputMaxNumber.innerText = `Max number: ${maxNum}, max step: ${maxStep}`;
    } else {
      mistakeInStart.innerText = `choose who start`;
    }
  }
}

btnStartGame.addEventListener(`click`, gameStart);

function nextStep() {
  if (
    +usersNumber.value < 1 ||
    +usersNumber.value > maxStep ||
    Number.isInteger(+usersNumber.value) === false
  ) {
    currentNumbers.innerText = `invalid input!`;
  } else {
    let addNumByPc = Math.floor(Math.random() * (maxStep - 1) + 1);
    totalNum = totalNum + +usersNumber.value;

    if (totalNum >= maxNum) {
      mainContainer.style.display = `none`;
      finishContainer.style.display = `contents`;
      finishContainer.innerText = `congrats! you win!`;
    } else {
      totalNum = totalNum + +addNumByPc;
      if (totalNum >= maxNum) {
        mainContainer.style.display = `none`;
        finishContainer.style.display = `contents`;
        finishContainer.innerText = `unfortunately, you lost to the computer. try again later`;
      }

      currentNumbers.innerText = `PC added ${addNumByPc}`;
      outputTotalNumber.innerText = `Current number: ${totalNum}`;
      outputMaxNumber.innerText = `Max number: ${maxNum}, max step: ${maxStep}`;
    }
  }
}

btnNextStep.addEventListener(`click`, nextStep);
