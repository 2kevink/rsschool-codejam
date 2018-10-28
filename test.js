const assert = require('assert');
const sumOfOther = require('./sumOfOther/sumOfOther');
const make = require('./make/make');
const recursion = require('./recursion/recursion');

function sum(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function mult(a, b) {
  return a * b;
}

const tree = {
  value: 100,
  left: { value: 90, left: { value: 70 }, right: { value: 99 } },
  right: { value: 120, left: { value: 110 }, right: { value: 130 } },
};
const tree1 = {
  value: 100,
  right: { value: 200, right: { value: 300 } },
};
const tree2 = {
  left: { value: 90, left: { value: 70 }, right: { value: 99 } },
  right: { value: 100, left: { value: 200 }, right: { value: 300 } },
};

describe('sumOfOther', () => {
  it('sum', () => {
    const resultSum = sumOfOther([2, 3, 4, 1]);
    assert.deepEqual(resultSum, [8, 7, 6, 9]);
  });
});

describe('make', () => {
  it('make sum', () => {
    const resultMake = make(15)(34, 21, 666)(41)(sum);
    assert.deepEqual(resultMake, 777);
  });

  it('make sub', () => {
    const resultMake = make(7)(4)(3)(sub);
    assert.deepEqual(resultMake, 0);
  });

  it('make mult', () => {
    const resultMake = make(3)(10)(-1)(mult);
    assert.deepEqual(resultMake, -30);
  });
});

describe('recursion', () => {
  it('tree', () => {
    const resultRecursion = recursion(tree);
    assert.deepEqual(resultRecursion, [[100], [90, 120], [70, 99, 110, 130]]);
  });
  it('tree 1', () => {
    const resultRecursion = recursion(tree1);
    assert.deepEqual(resultRecursion, [[100], [200], [300]]);
  });
  it('tree 2', () => {
    const resultRecursion = recursion(tree2);
    assert.deepEqual(resultRecursion[0], [undefined]);
  });
});
