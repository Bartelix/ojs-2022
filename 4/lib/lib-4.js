Array.prototype.forEach = function (t) {
  const o = this;
  for (let r = 0; r < o.length; r++) r % 2 == 0 && t(o[r]);
};
