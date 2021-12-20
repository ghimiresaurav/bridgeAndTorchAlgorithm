const getMax = (arr) => {
  let max = arr[0];
  arr.forEach((item) => {
    if (item > max) max = item;
  });
  return max;
};

const getMin = (arr) => {
  let min = arr[0];
  arr.forEach((item) => {
    if (item < min) min = item;
  });
  return min;
};

const or = [1, 2, 5, 10],
  ne = [],
  size = or.length;
let timeConsumed = 0;

const travel = (arr) => (timeConsumed += getMax(arr));

// while(or.length !== 0 && ne.length !== size)
{
  const travellers = [];
  travellers.push(getMin(or));
  or.splice(or.indexOf(getMin(or)), 1);

  // console.log(travellers, or)

  travellers.push(getMin(or));
  or.splice(or.indexOf(getMin(or)), 1);

  travel(travellers);

  ne.push(travellers[0]);
  travellers.splice(0, 1);
  ne.push(travellers[0]);
  travellers.splice(0, 1);

  travellers.push(getMax(ne));
  ne.splice(ne.indexOf(getMax(ne)), 1);

  travel(travellers);

  or.push(travellers[0]);
  travellers.splice(0, 1);

  travellers.push(getMax(or));
  or.splice(or.indexOf(getMax(or)), 1);
  travellers.push(getMax(or));
  or.splice(or.indexOf(getMax(or)), 1);

  travel(travellers);

  ne.push(travellers[0]);
  travellers.splice(0, 1);
  ne.push(travellers[0]);
  travellers.splice(0, 1);

  travellers.push(getMin(ne));
  ne.splice(ne.indexOf(getMin(travellers)), 1);

  travel(travellers);

  or.push(travellers[0]);
  travellers.splice(0, 1);

  travellers.push(getMax(or));
  or.splice(or.indexOf(travellers[0]), 1);
  travellers.push(getMax(or));
  or.splice(or.indexOf(travellers[0]), 1);

  travel(travellers);

  console.log(or, travellers, ne, timeConsumed);
}
