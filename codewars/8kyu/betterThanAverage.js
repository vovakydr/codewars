function betterThanAverage(classPoints, yourPoints) {
    var sum = 0;
    var count = classPoints.length;
  
    for (var i = 0; i < count; i++) {
      sum += classPoints[i];
    }
  
    var average = sum / count;
    if(average < yourPoints) {
      return true;
    } else {
      return false;
    }
  }
  