// 숫자를 생성 하는 함수
// var makeNum = function make() {
//   var list = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//   var number = [];

//   for (var i = 0; i < 3; i++) {
//     var select = Math.floor(Math.random() * list.length);
//     number[i] = list.splice(select, 1)[0];
//   }
//   return number;
// };

var list = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var number = [];

for (var i = 0; i < 3; i++) {
  var select = Math.floor(Math.random() * list.length);
  number[i] = list.splice(select, 1)[0];
}

var strike = 0;
var ball = 0;

while(strike <= 3){
  var input = prompt("숫자를 입력하세요");
  var inputArray = input.split("");

  strike = 0;
  ball = 0;
  for (var i = 0; i < 3; i++) {
    for (var k = 0; k < 3; k++) {
      if (number[i] == inputArray[k]) {
        if (i === k) {
          strike++;
        } else {
          ball++;
        }
        break;
      }
    }
  }

  if(strike === 3) {
    console.log("3 스트라이크" + '\n' + "3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    break;
  } else if(inputArray == "") {
    console.info(inputArray.join(" ") + ' : ' + '입력 오류!' + '\n' + display.value);
  } else if(strike == 0 && ball==0){
    console.log("낫싱!!")
  } else {
    console.info(inputArray.join("") + ": " + strike + "스트라이크 " + ball + "볼");
  }
}