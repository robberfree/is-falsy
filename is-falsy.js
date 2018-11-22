/**
 * Detect whether a value is falsy
 * @param {any} value
 * @return {boolean}
 */
function isFalsy(value) {
  return (
    value === false ||
    value === undefined ||
    value === null ||
    value === NaN ||
    value === 0 ||
    value === "" ||
    (Object.prototype.toString.call(document) === "[object HTMLDocument]" &&
      value === document.all)
  );
}
