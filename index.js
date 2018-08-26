function produceDrivingRange(){
  let drId = 0
  return class {
    constructor(distance){
      this.distance = distance
      this.id = ++drId;
    }

  }