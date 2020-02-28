// const arr = [0, 0, 0, 0, 0, 0];

const fillRandom = (a) => {
  for (let i = 0; i < a.length; i++) {
    a[i] = Math.floor(Math.random() * 1000)
  }
  return a;
};

// console.log(fillRandom(arr));

const indexOfOdd = (a) => {
  const indexes = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i] % 2 !== 0) {
      indexes.push(i)
    }
  }
  return indexes;
}

// console.log(indexOfOdd(arr));

const numberOfEvenIndexes = (a) => {
  let number = 0;
  for (let i = 0; i < a.length; i++) {
    if(a[i] % 2 === 0 && i % 2 !== 0) {
        number++;
    }
  }
  return number;
};

// console.log(numberOfEvenIndexes(arr));

const meanOfElements = (a) => {
  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    sum += a[i];
  }
  const mean = sum / a.length;
  return mean;
}

// const arr2 = [5, 6, 7, 2, 9, 1];

// console.log(meanOfElements(arr));

const smallestElement = (a) => {
  let small = a[0]
  for (let i = 1; i < a.length; i++) {
    if(a[i] < small) {
      small = a[i];
    }
  }
  return small;
};

// console.log(smallestElement(arr2));

const numberOfFibonacci = (a) => {
  let number = 0;
  for (let i = 2; i < a.length; i++) {
    if (a[i] === a[i - 1] + a[i - 2]) {
      number++;
    }
  }
  return number;
};

// const fibArray = [1, 1, 2, 3, 5, 9, 14, 23];

// console.log(numberOfFibonacci(fibArray));
