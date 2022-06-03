let i = 0;
let j = 0;
let fontSize = 0;
let mountClone = 0;

document.addEventListener("keydown", function (event) {
  if (event.keyCode === 13) {
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
});

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

// Funckje do pokazywania oraz ukrywania paska z działaniem matematycznycm
function showResultAfterCount() {
  document.getElementById("resultAfterCount").style.display = "block";
}

function hideResultAfterCount() {
  document.getElementById("resultAfterCount").style.display = "none";
}

/////////////////////////////////////////

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
  if (i < 2) {
    console.log("joł");
    if (x === "") {
      return " ";
    } else {
      document.getElementById("result").value = y;
      changeView(x);
      createHistory(x, y);
      showHistory();
      CreateNewHistory();
      return y;
    }
  }
}

function changeView(x) {
  let element = document.getElementById("result");
  let elementAfter = document.getElementById("resultAfterCount");
  fontSize = element.style.fontSize;
  if ($(window).width() > 500 && $(window).width() < 800) {
    element.style.fontSize = "25px";
    elementAfter.style.fontSize = "21px";
  } else if ($(window).width() < 650) {
    element.style.fontSize = "22px";
    elementAfter.style.fontSize = "17px";
  } else {
    element.style.fontSize = "30px";
    elementAfter.style.fontSize = "25px";
  }
  document.getElementById("resultAfterCount").value = x + " = ";
  showResultAfterCount();
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
  hideResultAfterCount();
}

function showHistory() {
  document.getElementById("History").style.display = "block";
}

function createHistory(exercise, resul) {
  window.document.getElementById("first_New_Inp").innerHTML = exercise + " = ";
  window.document.getElementById("second_New_Inp").innerHTML = resul;
  return resul;
}

function takeOldVal() {
  showResultAfterCount();
  window.document.getElementById("resultAfterCount").value = "";
  window.document.getElementById("result").value = "";
  let rozw = document.getElementById("second_New_Inp").textContent;
  let dzial = document.getElementById("first_New_Inp").textContent;
  window.document.getElementById("resultAfterCount").value = dzial;
  window.document.getElementById("result").value = rozw;
}

function CreateNewHistory() {
  document.getElementById("history_Clicked").style.display = "flex";

  const newDiv = document.getElementById("history_Clicked");
  const clone = newDiv.cloneNode(true);
  // clone.id = "history_Clicked2";
  document.getElementById("History_Inside").insertBefore(clone, newDiv);

  document.getElementById("history_Clicked").style.display = "none";
}
