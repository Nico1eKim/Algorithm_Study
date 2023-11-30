// 주어진 string을 띄어쓰기 기준으로 나누기
// 연산자와 등호 / 숫자를 구분하기
function solution(quiz) {
  return quiz.map((formula) => {
    const [x, sign, y, equalSign, z] = formula.split(" ");

    if (sign === "+") {
      return +x + +y === +z ? "O" : "X";
    } else {
      return +x - +y === +z ? "O" : "X";
    }
  });
}
