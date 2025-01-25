module.exports = {
  difference: (first, ...rest) =>
    rest.reduce((acc, value) => acc - value, first),
};
