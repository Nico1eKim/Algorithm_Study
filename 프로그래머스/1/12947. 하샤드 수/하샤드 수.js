function solution(x) {
  let num = x + "";
  let hashad = 0;

  for (let i = 0; i < num.length; i++) {
    hashad += parseInt(num[i]);
  }

  return x % hashad === 0 ? true : false;
}
