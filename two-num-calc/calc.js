const inpN1 = document.getElementById("n1");
const inpN2 = document.getElementById("n2");
const out = document.getElementById("out");
let n1, n2;

const sum = () => {
  out.innerText = +inpN1.value + +inpN2.value;
};

const onInput = () => {
  n1 = +inpN1.value;
  n2 = +inpN2.value;
};

const calc = (sign) => {
  // tbd: check that both n1 and n2 are exist

  let result;
  if (n1 !== `` && n2 !== ``) {
    switch (sign) {
      case "*":
        result = `${n1} * ${n2} = ${n1 * n2}`;
        break;
      case "+":
        result = `${n1} + ${n2} = ${n1 + n2}`;
        break;
      case "-":
        result = `${n1} - ${n2} = ${n1 - n2}`;
        break;
      case `/`:
        if (n2 === 0) {
          result = `can't divide by zero`;
        } else {
          result = `${n1} / ${n2} = ${n1 / n2}`;
        }
        break;
      case `%`:
        if (n2 === 0) {
          result = `can't divide by zero`;
          break;
        } else {
          if (n1 / n2 >= 0) {
            result = `${n1} % ${n2} = ${Math.floor(n1 / n2)} (remainder is ${
              n1 % n2
            })`;
            break;
          } else {
            result = `${n1} % ${n2} = ${Math.ceil(n1 / n2)} (remainder is ${
              n1 % n2
            })`;
            break;
          }
        }
      default:
        result = `What is ${sign}?!?!`;
    }
  } else {
    result = `invalid imput (enter all values)`;
  }

  out.innerText = result;
};
