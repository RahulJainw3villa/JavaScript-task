function right_three(str) {
    if (str.length > 1)
      {
        return str.slice(-3) + str.slice(0, -3);
      }
 return str;
}
console.log(right_three("css3"));
console.log(right_three("JavaScript"));
console.log(right_three("Hi"));