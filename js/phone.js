/* Common function to update  phone price according to plus and minus */

function updatePhoneNumber(isIncrease) {
  const phoneNumberField = document.getElementById("phone-number-field");
  const phoneNumberString = phoneNumberField.value;
  const previousPhoneNumber = parseInt(phoneNumberString);
  let newPhoneNumber;

  if (isIncrease === true) {
    newPhoneNumber = previousPhoneNumber + 1;
  } else {
    if (previousPhoneNumber <= 0) {
      return 0;
    }
    newPhoneNumber = previousPhoneNumber - 1;
  }
  phoneNumberField.value = newPhoneNumber;
  return newPhoneNumber;
}
/* Common function to update total phone price according to plus and minus */

function updatePhoneTotalPrice(newPhoneNumber) {
  const phoneTotalElement = document.getElementById("phone-total");
  const phoneTotalPrice = newPhoneNumber * 1219;
  phoneTotalElement.innerText = phoneTotalPrice;
}

document
  .getElementById("btn-phone-plus")
  .addEventListener("click", function () {
    const newPhoneNumber = updatePhoneNumber(true);
    updatePhoneTotalPrice(newPhoneNumber);

    calculateSubTotal();

  });

document
  .getElementById("btn-phone-minus")
  .addEventListener("click", function () {
    const newPhoneNumber = updatePhoneNumber(false);
    updatePhoneTotalPrice(newPhoneNumber);

    calculateSubTotal();
  });
