module.exports = function recursion(tree) {
  const arr = [tree];
  const res = [];
  function realRecursion(args) {
    const nodes = args.filter(item => item !== undefined);
    if (nodes.length === 0) return;

    res.push(nodes.map(node => node.value));

    const next = nodes.reduce((acc, item) => {
      acc.push(item.left, item.right);
      return acc;
    }, []);

    realRecursion(next);
  }
  realRecursion(arr);
  return res;
};
