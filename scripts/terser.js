const Terser = require("terser");

module.exports = (filename) => {
  return Terser.minify(`(${require(`${filename}`).toString()})();`).code;
};
