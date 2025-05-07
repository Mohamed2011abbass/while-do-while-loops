function processNumber() {
  // getting the user input
  const userNum = document.getElementById("numberInput").value;
  // count up
  let countUpText = "";

  let i = 0;
  while (i <= userNum) {
    countUpText += `<p> ${i}</p>`;
    i++;
  }
  // showing the user the numbers
  document.getElementById("countUp").innerHTML = countUpText;

  //count down
  let countDownText = "";
  i = userNum;
  do {
    countDownText += `<p> ${i}</p>`;
    i--;
  } while (i != -1);
  document.getElementById("countDown").innerHTML = countDownText;
}
