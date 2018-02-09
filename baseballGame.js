var input = "321";
var number = [];
var strike;
var ball;
var inputArray;

function inputNumber() {
  return inputArray = input.split("");
}

function makeNumber() {
  var list = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  for (var i = 0; i < 3; i++) {
    var select = Math.floor(Math.random() * list.length);
    number[i] = list.splice(select, 1)[0];
  }
  return number;
};

// 입력값(inputNumber)과 랜덤숫자(makeNumber)는 함수화가 된거 같으나 비교에서 함수화 하기가 벅참..
// 문제점이 정확하게 잘 못잡지만 차근차근 해나아갈 생각...

function initialize() {
  strike = 0;
  ball = 0;
  while (strike <= 3) {
    for (var i = 0; i < 3; i++) {
      for (var j = 0; j < 3; j++) {
        if (number[j] == inputArray[i]) {
          if (i === j){
            strike++;
          } else { 
            ball++;
          }
        }
        break;
      }
    }
  }
  if (strike === 3) {
    console.log("3 스트라이크" + '\n' + "3개의 숫자를 모두 맞히셨습니다! 게임 종료");
  } else if (inputArray == "") {
    console.log(inputArray.join(" ") + ' : ' + '입력 오류!' + '\n');
  } else if (strike == 0 && ball == 0) {
    console.log("낫싱!!")
  } else {
    console.log(inputArray.join("") + ": " + strike + "스트라이크 " + ball + "볼");
  }
    
};

console.log(makeNumber(), inputNumber());
console.log(initialize());