module.exports = function(int, arrayOfInt) {
  for (var i = 0; i < arrayOfInt.length; i++) {
    if (arrayOfInt[i] === int) {
      return i;
    }
  }

  return -1;
};