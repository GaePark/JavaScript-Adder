const inputBox = document.getElementById("input-box");

const initialValue = [];
let num;
let saveNum;
let calculate;
let resultNum;

const onClickNum = (i) => {
  if (i === "." && initialValue.includes(".")) {
    return;
  }
  if (resultNum && !calculate) {
    resultNum = "";
  }
  if (initialValue.length < 20) {
    initialValue.push(i);
    num = initialValue.join("");
    inputBox.innerText = num;
    console.log(initialValue);
  }
};

const onClickCalculate = (i) => {
  if (resultNum) {
    saveNum = resultNum;
  } else {
    saveNum = num;
  }
  num = "";
  initialValue.length = 0;
  calculate = i;
};

const onClickCE = () => {
  initialValue.length = 0;
  num = "";
  inputBox.innerText = num;
};

const onClickC = () => {
  initialValue.length = 0;
  num = "";
  saveNum = "";
  resultNum = "";
  inputBox.innerText = num;
};

const onClickBS = () => {
  if (num) {
    initialValue.pop();
    num = num.slice(0, -1);
    inputBox.innerText = num;
  }
};

const onCLickPercent = () => {
  if (resultNum) {
    resultNum = resultNum / 100;
    inputBox.innerText = resultNum;
  }
};

const onClickResult = () => {
  if (calculate === "+") {
    resultNum = Number(saveNum) + Number(num);
  }
  if (calculate === "-") {
    resultNum = Number(saveNum) - Number(num);
  }
  if (calculate === "*") {
    resultNum = Number(saveNum) * Number(num);
  }
  if (calculate === "/") {
    resultNum = Number(saveNum) / Number(num);
  }

  inputBox.innerText = resultNum;
  initialValue.length = 0;
  num = "";
  saveNum = "";
  calculate = "";
};
