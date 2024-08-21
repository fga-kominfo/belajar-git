// create star with for

const star = (n) => {
  let result = "";
  for (let i = 0; i < n; i++) {
    result += "*";
  }
  return result;
};
console.log(star(5));
console.log(star(10));
console.log(star(15));
