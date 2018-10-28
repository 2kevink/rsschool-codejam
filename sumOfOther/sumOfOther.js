module.exports = function sumOfOther(arr) {
  const res = arr.reduce((pr, el) => pr + el, 0);
  return arr.map(el => res - el);
};
