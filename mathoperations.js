let numb1 = 0;
let numb2 = 0;
let operationResult = 0;  
  
export function add(numb1,numb2) {
  numb1 = numb1 + numb2;
  operationResult = numb1
  return(operationResult);
};

export function subtract(numb1, numb2) {
  numb1 = numb1 - numb2;
  operationResult = numb1
  return (operationResult);
}

export function multiply(numb1, numb2) {
  numb1 = numb1 * numb2;
  operationResult = numb1
  return (operationResult);
};

export function divide(numb1, numb2) {
  numb1 = numb1 / numb2; 
  operationResult = numb1
  return(operationResult);
};

export function displayResult(operationResult) {
  console.log(operationResult);
};