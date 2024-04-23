function oblicz() {
  var credit = parseFloat(document.getElementById("credit").value);
  var loan_number = parseInt(document.getElementById("loan_number").value);
  var month_percent =
    parseFloat(document.getElementById("percent").value) / 1200;
  var month_loan =
    (credit * month_percent) /
    (1 - 1 / Math.pow(1 + month_percent, loan_number));
  if (
    isNaN(month_loan) ||
    credit < 500 ||
    credit > 255500 ||
    loan_number <= 0 ||
    month_percent < 0
  )
    alert("Wprowadziłeś błędne dane!");
  else if (!isFinite(month_loan))
    alert("Dzielenie przez zero(zamały procent podałeś)!");
  else {
    document.getElementById("month_loan").value = month_loan.toFixed(2);
    document.getElementById("credit_w_pr").value = (
      month_loan * loan_number
    ).toFixed(2);
  }
}
function reset() {
  var x = document.getElementById("month_loan");
  var y = document.getElementById("credit_w_pr");
  if (x.value != "" || y.value != "") {
    x.value = "";
    y.value = "";
  }
}
