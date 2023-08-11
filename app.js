const calculateBtn = document.getElementById("calcucate-btn");
const billInput = document.getElementById("bill-input");
const tipIntup = document.getElementById("tip-input");

calculateBtn.addEventListener("click", () => {
  const total = parseInt(billInput.value) + parseInt(tipIntup.value);
  document.getElementById("result").innerHTML = `Total:$${total}`;
  if (billInput.value < 0 || tipIntup.value < 0 || billInput.value === '' || tipIntup.value === '') {
    document.getElementById("result").innerHTML = `Try again`;
  }
});
