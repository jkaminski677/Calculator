let i = 0;

function display(val) {
  //   let buton = document.getElementById("Operator");
  //   buton.addEventListener("click", function handleClick() {
  //     console.log("element clicked");
  //   });
  //   if () {
  //     console.log(document.getElementById("Operator"));
  //     console.log(true);
  if (i > 0) {
    clearScreen();
  }
  i = 0;
  //   }
  document.getElementById("result").value += val;
  return val;
}

function solve() {
  let x = document.getElementById("result").value;
  let y = eval(x);
  i++;
  if (x === "") {
    return " ";
  } else {
    document.getElementById("result").value = y;
    return y;
  }
}

function removeNum() {
  let x = document.getElementById("result").value;
  x = x.substring(0, x.length - 1);
  document.getElementById("result").value = x;
}

function clearScreen() {
  document.getElementById("result").value = "";
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

document.addEventListener("keydown", function (event) {
  if (event.keyCode === 13) {
    // alert("Enter Pressed!");
    solve();
    i++;
  }
});
