function sumFor(list) {
  let total = 0;
  for (let i = 0; i < list.length; i++) {
    total += list[i];
  }
  return total;
}

function sumWhile(list) {
  let i = 0;
  let total = 0;
  while (list[i] != null) {
    total += list[i];
    i++;
  }
  return total;
}

function sumRecursion(list) {
  if (list.length === 0) {
    return 0;
  }
  const temp = list.pop();
  return temp + sumRecursion(list);
}

function sumTheEasyWay(list) {
  return _.reduce(list, 0, function (mem, num) { return mem + num; }, 0);
}

const numArray = [1, 2, 3, 4];

console.log(sumFor(numArray));
console.log(sumWhile(numArray));
console.log(sumRecursion(numArray));
console.log(sumTheEasyWay(numArray));
