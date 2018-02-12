
var inputNumber = function() {
  // var input = prompt("숫자를 입력하세요.");
  var input = "321";
  var inputArray;

  if (inputArray == "") {
    console.log(inputArray.join(" ") + " : " + "입력 오류!" + "\n");
  } else {
    return inputArray = input.split("");
  }
};

var makeNumber = function() {
  var list = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  var number = [];

  for (var i = 0; i < 3; i++) {
    var select = Math.floor(Math.random() * list.length);
    number[i] = list.splice(select, 1)[0];
  }
  return number;
};

function checkNumber(number, inputArray) {
  number = makeNumber();
  inputArray = inputNumber();
  var strike = 0;
  var ball = 0;
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      if (number[i] == inputArray[j]) {
        if (i === j) {
          strike++;
        } else {
          ball++;
        }
      }
    }
  }

  if (strike === 3) {
    console.log(
      "3 스트라이크" + "\n" + "3개의 숫자를 모두 맞히셨습니다! 게임 종료"
    );
  } else if (strike == 0 && ball == 0) {
    console.log("낫싱!!");
  } else {
    console.log(
      inputArray.join("") + ": " + strike + "스트라이크 " + ball + "볼"
    );
  }
}

console.log(checkNumber());
// console.log(makeNumber(), inputNumber(), checkNumber());