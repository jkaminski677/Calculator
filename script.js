let i = 0;
let j = 0;
let fontSize = 0;

document.addEventListener("keydown", function (event) {
  if (event.keyCode === 13) {
    // alert("Enter Pressed!");
    solve();
    j = 1;
  } else {
    if (j == 1) {
      clearScreen();
      j = 0;
      i = 0;
    }
  }
  if (event.code == "Space") {
    clearScreen();
    j = 0;
    i = 0;
  }
  // let element = document.getElementById("result");
  // element.style.fontSize = fontSize;
});

function display(val) {
  if (i > 0 || j == 1) {
    clearScreen();
  }
  i = 0;
  j = 0;
  document.getElementById("result").value += val;
  return val;
}

function solve() {
  let x = document.getElementById("result").value;
  let y = eval(x);

  i++;
  console.log(i);
  if (i < 2) {
    console.log("joł");
    if (x === "") {
      return " ";
    } else {
      document.getElementById("result").value = y;
      changeView(x);
      return y;
    }
  }
}

function changeView(x) {
  let element = document.getElementById("result");
  let elementAfter = document.getElementById("resultAfterCount");
  fontSize = element.style.fontSize;
  if ($(window).width() > 500 && $(window).width() < 800) {
    element.style.fontSize = "20px";
    elementAfter.style.fontSize = "17px";
  } else if ($(window).width() < 500) {
    element.style.fontSize = "17px";
    elementAfter.style.fontSize = "14px";
  } else {
    element.style.fontSize = "30px";
    elementAfter.style.fontSize = "25px";
  }

  document.getElementById("resultAfterCount").style.display = "block";

  let visib = document.getElementById("resultAfterCount");
  // if (visib.style.display == "none") {
  // visib.style.display = "block";
  document.getElementById("resultAfterCount").value = x + " = ";
  // }
}

function removeNum() {
  if (i > 0) {
    clearScreen();
  } else {
    let x = document.getElementById("result").value;
    x = x.substring(0, x.length - 1);
    document.getElementById("result").value = x;
  }
}

function clearScreen() {
  document.getElementById("result").value = "";
  document.getElementById("resultAfterCount").value = "";
  let element = document.getElementById("result");
  element.style.fontSize = fontSize;
  document.getElementById("resultAfterCount").style.display = "none";
}

function onlyNum(charac) {
  var ASCIICode = charac.which ? charac.which : charac.keyCode;
  if (
    ASCIICode > 31 &&
    (ASCIICode < 45 || ASCIICode > 57) &&
    (ASCIICode < 40 || ASCIICode > 43)
  )
    return false;
  return true;
}
