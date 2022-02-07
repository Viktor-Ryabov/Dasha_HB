const initialSum = document.querySelector("#initial-sum");
const initialProcent = document.querySelector("#initial-procent");
const initialMonths = document.querySelector("#initial-months");
const makeCalculationButton = document.querySelector("#makeCalculation");
const resultSection = document.querySelector(".output-data");
const sectionForAddedResult = document.querySelector("#outputMonth");
const totalResult = document.querySelector("#totalResult");
const outputBlocks = Array.from(document.querySelectorAll(".output-data"));
const refreshButton = document.querySelector(".entered-data__refresh");


let enteredSum, enteredProcent, enteredMonths, resultData = {};
let enteredData = {
  enteredSum,
  enteredProcent,
  enteredMonths, 
};
let firstMonthResult, secondMothResult, nextMothResultArray = [], total;

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

const makeBlockVisible = (arrayBlock) => {
  arrayBlock.forEach(element => {
    element.classList.add("output-data_visible");
  });
}

const makeBlockInvisible = (arrayBlock) => {
  arrayBlock.forEach(element => {
    element.classList.remove("output-data_visible");
  });
}

const clearFunction = () =>{
  sectionForAddedResult.innerHTML ="";

  while (sectionForAddedResult.lastChild) {
    sectionForAddedResult.removeChild(sectionForAddedResult.lastChild);
  }

  resultData = {};

  totalResult.textContent = "";
  initialSum.value = '';
  initialProcent.value = "";
  initialMonths.value = "";
}

const makeCalculation = () => {
  takeInputData();
  firstMonthResult = Number(enteredData.enteredSum);
  secondMothResult = firstMonthResult + firstMonthResult*(Number(enteredProcent)/100)
  console.log(`${firstMonthResult}`);
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
    firstMonthResult,
    secondMothResult,
    nextMothResultArray,
  }
}

const generateMonthResult = () => {
  const resultData = makeCalculation();
  makeTemplate(1, resultData.firstMonthResult);
  makeTemplate(2, resultData.secondMothResult);
  total = [resultData.firstMonthResult, resultData.secondMothResult];

  resultData.nextMothResultArray.forEach((element, i) => {
    makeTemplate((i+3), element);
    total.push(element);
  });
  
  totalResult.textContent =transformationNumber(total[total.length - 1]);
}

const transformationNumber = (number) => {
  number = number
    .toFixed(2)
    .toString().split(".");
  number[0] = number[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  number = number.join(".");
  return number;
}

const makeTemplate = (number, sum) => {
  sum = transformationNumber(sum);

  const monthElement = document.createElement("p");
  monthElement.textContent = `${number}й месяц: ${sum}`;
  monthElement.classList.add("output-data__text");
  sectionForAddedResult.appendChild(monthElement);
  return monthElement;
}

//Слушатели событий
document.addEventListener("keypress", (event) => {
  if (event.key === "Enter"){
    event.preventDefault();
    makeBlockVisible(outputBlocks);
    generateMonthResult();  
  }
});

makeCalculationButton.addEventListener("click", (event) => {
  event.preventDefault();
  makeBlockVisible(outputBlocks);
  generateMonthResult();  
});



refreshButton.addEventListener("click", () => {
  makeBlockInvisible(outputBlocks);
  clearFunction();
})