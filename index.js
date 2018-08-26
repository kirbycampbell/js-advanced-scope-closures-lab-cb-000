function produceDrivingRange(blockRange){
  return function(blockOne, blockTwo) {
    let distance = Math.abs(parseInt(blockOne) - parseInt(blockTwo));
    let diff = Math.abs(blockRange - distance);

    if (distance > blockRange) {
      return `${diff} blocks out of range`;
    }else {
      `within range by ${diff}`
    }
    }

  }
