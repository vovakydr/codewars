function hero(bullets, dragons){
    var requiredBullets = dragons * 2;
  
    if (bullets >= requiredBullets) {
      return true;
    } else {
      return false;
    }
  }
  