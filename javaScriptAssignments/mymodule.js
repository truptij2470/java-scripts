exports.factorial = n => (n === 0 || n === 1) ? 1 : n * exports.factorial(n - 1);

exports.myprime = num => {
  for (let i = 2; i < num; i++)
    if (num % i === 0) return false;
  return num > 1;
}

exports.printable = num => {
  for (let i = 1; i <= 10; i++)
    console.log(`${num} x ${i} = ${num * i}`);
}
