function calculate(x, y, z) {
  if (z == "add") {
    result = x + y;
  }
  if (z == "sub") {
    result = x - y;
  }
  if (z == "mul") {
    result = x * y;
  }
  return result;
}

module.exports = calculate;
