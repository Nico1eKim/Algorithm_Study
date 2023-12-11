function solution(s) {
  let str_len = s.length;

  if (str_len % 2 === 0) {
    return s.slice(str_len / 2 - 1, str_len / 2 + 1);
  } else {
    return s[Math.floor(str_len / 2)];
  }
}

