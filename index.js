const initialSum = document.querySelector("#initial-sum");
const initialProcent = document.querySelector("#initial-procent");
const initialMonths = document.querySelector("#initial-months");
const makeCalculationButton = document.querySelector("#makeCalculation");
const resultSection = document.querySelector(".output-data");
const template = document.querySelector("#template");

let enteredSum, enteredProcent, enteredMonths, resultData = {};
let enteredData = {
  enteredSum,
  enteredProcent,
  enteredMonths, 
};
let firstMothResult, secondMothResult, nextMothResultArray = [];

const takeInputData = () => {
  enteredSum = initialSum.value;
  enteredProcent = initialProcent.value;
  enteredMonths = initialMonths.value;

  return enteredData ={
    enteredSum,
    enteredProcent,
    enteredMonths,
  }
}

const makeCalculation = () => {
  takeInputData();
  firstMothResult = Number(enteredData.enteredSum);
  secondMothResult = firstMothResult + firstMothResult*(Number(enteredProcent)/100)
  console.log(`${firstMothResult}`);
  console.log(`${secondMothResult}`);

  let previousMonthResult = secondMothResult;

  if (enteredMonths >= 3) {
    for(let i = 3; i <= enteredData.enteredMonths; i++) {
      nextMothResult = previousMonthResult + previousMonthResult*(enteredProcent/100)
      previousMonthResult = nextMothResult;
      nextMothResultArray.push(previousMonthResult);
    }
  }  

  return resultData = {
    firstMothResult,
    secondMothResult,
    nextMothResultArray,
  }
}

//Слушатели событий
document.addEventListener("keypress", (event) => {
  if (event.key === "Enter"){
    makeCalculation();  
    console.log(resultData);
  }
});

makeCalculationButton.addEventListener("click", () => {
  makeCalculation();  
  console.log(resultData);
});



