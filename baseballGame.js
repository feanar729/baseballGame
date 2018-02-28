var input = "321";
var strike = 0;
var ball = 0;

// 번호 넣는 함수
function inputNumber(inputMakeArray) {
  if (inputMakeArray === "" || inputMakeArray === null || inputMakeArray === undefined) {
    console.log("빈 값 혹은 입력 오류!");
  } else {
    return inputMakeArray.split("");
  }
}

// 랜덤번호 생성함수
var makeNumber = function () {
  var list = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  var number = [];

  for (var i = 0; i < 3; i++) {
    var select = Math.floor(Math.random() * list.length);
    number[i] = list.splice(select, 1)[0];
  }
  return number;
};

// 체크된 strike, ball을 출력하는 함수
var resultAnswer = function (strike, ball, inputNumber) {

  if (strike === 3) {
    console.log("3 스트라이크" + '\n' + "3개의 숫자를 모두 맞히셨습니다! 게임 종료");
  } else if (strike == 0 && ball == 0) {
    console.log("낫싱!!");
  } else {
    console.log(inputNumber.join("") + ": " + strike + "스트라이크 " + ball + "볼");
  }
};

// 비교함수[추가: strike를 3번될때까지 어떻게 반복으로 돌릴것인가? ]
// 랜덤번호의 값을 갖고 있는 상태에서 input값을 비교만 하게 하는 방법.
var checkNumber = function (inputNum) {
  var number = inputNumber(inputNum);
  var makeArray = makeNumber();
  strike = 0;
  ball = 0;

  for (var i = 0; i < 3; i++) {
    for (var k = 0; k < 3; k++) {
      if (number[i] == makeArray[k]) {
        if (i === k) {
          strike++;
        } else {
          ball++;
        }
      }
    }
  }
  resultAnswer(strike, ball, number);
};

checkNumber(input);