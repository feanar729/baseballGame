// var input = prompt("숫자를 쓰시오");
var input = "321";
var strike = 0;
var ball = 0;

var inputNumber = function(inputMakeArray) {
  if (inputMakeArray === "" || inputMakeArray === null || inputMakeArray === undefined) {
    console.log("빈 값 혹은 입력 오류!");
  } else {
    return inputMakeArray.split("");
  }
};

// 랜덤번호 생성함수
var makeNumber = function() {
  var list = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  var number = [];

  for (var i = 0; i < 3; i++) {
    var select = Math.floor(Math.random() * list.length);
    number[i] = list.splice(select, 1)[0];
  }
  return number;
};

// Todo 계획
// 1. 입력값(inputNumber)과 생성값(makeNumber)의 비교
// 2. 비교 함수에서 결론을 출력하는 함수
// 3. 출력된 함수가 strike 3개시 초기화 시켜주는 기능 넣기.(함수? 출력함수내에 조건문? 고민..)

// 초기화 함수[수정중]
var initialize = function (strike, ball) {
  strike = 0;
  ball = 0;
  while (strike <= 3) {
    makeNumber();
  }
};

// 비교함수[수정중]
var checkNumber = function(inputNumberArray) {
  var inputArray = inputNumber(inputNumberArray);
  var number = makeNumber();
  // 위에 변수 2개의 데이터는 무사히 잘 나옴 console,log(inputArray, number); => ["3", "2", "1"], [랜덤 생성값] 
  for (var i = 0; i < 3; i++) {
    for (var k = 0; k < 3; k++) {
      if (number[i] == inputArray[k]) {
        if (i === k) {
          return strike++;
        } else {
          return ball++;
        }
      }
    }
  }
};


// 비교된 값의 출력함수
var resultNumber = function (inputNum) {
  var strike = checkNumber();
  var ball = checkNumber();
  var inputArray = inputNumber(inputNum);

  if (strike === 3) {
    console.log("3 스트라이크" + "\n" + "3개의 숫자를 모두 맞히셨습니다! 게임 종료");
  } else if (strike === 0 && ball === 0) {
    console.log("낫싱!!");
  } else {
    console.log(inputArray.join("") + ": " + strike + "스트라이크 " + ball + "볼");
  }
};

checkNumber(input);
// checkNumber(input));

