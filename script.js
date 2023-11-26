const keys = new Map();
const allkeys = document.querySelectorAll(".grid-item");
allkeys.forEach((keyElement) => {
  keyElement.addEventListener("click", (e) => {
    mapKeysWithEvent(e.target.innerHTML);
  });
});

let expStack = [];
let inputEle = document.querySelector("#input-display");
let preResult = document.querySelector("#operation-display");
preResult.innerHTML = "0";
inputEle.innerHTML = "0";

const takeInput = (digit) => {
  if (inputEle.innerHTML != "0") inputEle.innerHTML += digit;
  else {
    inputEle.innerHTML = digit;
  }
};

const pushToExp = (operation) => {
  if (!Number(inputEle.innerHTML)) {
    console.log("Enter a number!!!");
    return;
  }
  //   calculate();
  if (expStack.length != 0) {
    expStack[1] = operation;
    calculate();
  } else {
    expStack.push(inputEle.innerHTML, operation);
    console.log(expStack, "push input inner html and operation");
  }
  displayExp();
};
const displayExp = () => {
  let exp = expStack.reduce((acc, c) => acc + c, "");
  preResult.innerHTML = exp;
};

const mapKeysWithEvent = (key) => {
  if (Number(key) || key == "0" || key == ".") {
    takeInput(key);
    return;
  }
  switch (key) {
    case "+":
      pushToExp("+");
      break;
    case "-":
      pushToExp("-");
      break;
    case "*":
      pushToExp("*");
      break;
    case "/":
      pushToExp("/");
      break;
    case "=":
      calculate();
      break;
    case "AC": {
      preResult.innerHTML = "0";
      inputEle.innerHTML = "0";
      expStack = [];
      break;
    }
    case "DEL":
      console.log("Del!");
      break;
  }
};

const calculate = () => {
  // check if no operation is performed before
  if (!expStack[0]) {
    console.log("No operations has been performed!!!");
    return;
  }
  // else
  // take first value from expStack to know the pre result,second value for last operation
  console.log(expStack);
  console.log(Number(expStack[0]), expStack[1], Number(inputEle.innerHTML));
  let p_res = Number(expStack[0]);
  let p_op = expStack[1];
  let c_value = Number(inputEle.innerHTML);
  expStack.splice(2, expStack.length);
  console.log("Made", expStack);
  switch (p_op) {
    case "+":
      //   console.log(p_res + c_value);
      expStack[0] = Number(p_res + c_value);

      break;
    case "-":
      let x = Number(p_res - c_value);
      expStack[0] = x;
      console.log(expStack[0]);
      break;
    case "*":
      //   console.log(p_res + c_value);
      expStack[0] = Number(p_res * c_value);
      break;
    case "/":
      expStack[0] = Number(p_res / c_value);
      break;

    //   pushToExp("+");
  }
  inputEle.innerHTML = "0";
  displayExp();
};
// console.log(allkeys)

// perfrom operation
// create function for that
// take user input
// display user input
