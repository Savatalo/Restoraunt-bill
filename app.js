const calculateBtn = document.getElementById("calcucate-btn");

calculateBtn.addEventListener("click", () => {
  let billInput = document.getElementById("bill-input").value;
  let tipIntup = document.getElementById("tip-input").value;
  const total = parseInt(billInput) + parseInt(tipIntup);
  console.log(total);
  document.getElementById("result").innerHTML = `Total:$${total}`;
  if (billInput < 0 || tipIntup < 0) {
    document.getElementById("result").innerHTML = `Try again`;
  }
});
