function digitize(n) {
    var digitsString = String(n);
    var reversedDigits = digitsString.split('').reverse();
    var digitsArray = reversedDigits.map(Number);
    return digitsArray;
  }