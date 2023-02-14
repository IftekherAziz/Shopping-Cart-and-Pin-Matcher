/* Common function to update case price according to plus and minus */

function updateCaseNumber(isIncrease) {
  const caseNumberField = document.getElementById("case-number-field");
  const caseNumberString = caseNumberField.value;
  const previousCaseNumber = parseInt(caseNumberString);
  let newCaseNumber;

  if (isIncrease === true) {
    newCaseNumber = previousCaseNumber + 1;
  } else {
    if (previousCaseNumber <= 0) {
      return 0;
    }
    newCaseNumber = previousCaseNumber - 1;
  }
  caseNumberField.value = newCaseNumber;
  return newCaseNumber;
}

/* Common function to update total case price according to plus and minus */

function updateCaseTotalPrice(newCaseNumber) {
  const caseTotalElement = document.getElementById("case-total");
  const caseTotalPrice = newCaseNumber * 59;
  caseTotalElement.innerText = caseTotalPrice;
}

document.getElementById("btn-case-plus").addEventListener("click", function () {
  const newCaseNumber = updateCaseNumber(true);
  updateCaseTotalPrice(newCaseNumber);
});

document
  .getElementById("btn-case-minus")
  .addEventListener("click", function () {
    const newCaseNumber = updateCaseNumber(false);
    updateCaseTotalPrice(newCaseNumber);
  });
