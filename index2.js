let array = [];
let arr = [];
arr.length = prompt("length of massive");

for (let i = 0; i < arr.length; i++) {
  arr[i] = prompt("add new element");
  array.push(arr[i]);
}

alert(array);

function sortElements(a, b) {
  if (a > b) {
    return 1;
  } else if (b > a) {
    return -1;
  } else {
    return 0;
  }
}

array.sort(sortElements);

alert(array);
array.splice(1, 3);
alert(array);
