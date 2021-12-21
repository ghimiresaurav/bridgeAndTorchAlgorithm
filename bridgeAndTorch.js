Array.prototype.max = function () {
  let max = this[0];
  this.forEach((item) => {
    if (max < item) max = item;
  });
  return max;
};

Array.prototype.min = function () {
  let min = this[0];
  this.forEach((item) => {
    if (item < min) min = item;
  });
  return min;
};

Array.prototype.alight = function (destination) {
  destination.push(...this);
  this.length = 0;
};

const solve = (original) => {
  // if (typeof original !== Array)
  //   return "Invalid Input Type. Only Arrays of numbers can be passed.";

  const SIZE = original.length;

  if (!SIZE) return "INAVLID PARAMETERS! Empty Arrays cannot be processed";
  if (SIZE == 1) return original[0];

  Array.prototype.travel = function () {
    timeConsumed += this.max();
  };

  let travellers = [],
    inOtherSide = [],
    loopIterationCount = 0,
    timeConsumed = 0;

  while (original.length !== 2 && inOtherSide.length !== SIZE - 2) {
    let t1, t2;
    //get the min value from 'original' array, get that value's index
    //remove that value from the array. this gives us an array.
    //extract the first value from the array and assign them into t1 and t2

    if (loopIterationCount % 2 == 0) {
      t1 = original.splice(original.indexOf(original.min()), 1)[0];
      t2 = original.splice(original.indexOf(original.min()), 1)[0];
    } else {
      t1 = original.splice(original.indexOf(original.max()), 1)[0];
      t2 = original.splice(original.indexOf(original.max()), 1)[0];
    }

    travellers.push(t1, t2);

    travellers.travel();
    travellers.alight(inOtherSide);
    // console.log(original, travellers, inOtherSide, timeConsumed)

    //get min value from the other side and get its index in 'inOtherSide' array
    //remove the value from the array and push into 'travellers' array
    travellers.push(
      inOtherSide.splice(inOtherSide.indexOf(inOtherSide.min()), 1)[0]
    );

    travellers.travel();
    travellers.alight(original);

    // console.log(original, travellers, inOtherSide, timeConsumed);
    loopIterationCount++;
  }

  travellers.push(original.splice(0, 1)[0], original.splice(0, 1)[0]);
  travellers.travel();
  travellers.alight(inOtherSide);

  // console.log(original, travellers, inOtherSide, timeConsumed)
  return timeConsumed;
};

console.log(solve([1]));
