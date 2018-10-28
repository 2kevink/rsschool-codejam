
module.exports = function make(...args) {
  const res = args;
  return function inner(...innerArgs) {
    if (typeof innerArgs[0] !== 'function') {
      res.push(...innerArgs);
      return inner;
    }
    return res.reduce((memo, val) => innerArgs[0](memo, val));
  };
};
