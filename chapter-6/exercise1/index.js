// A VECTOR TYPE


// OMA RATKAISU

class Vector {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    get length() {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    }

    plus(vector) {
        let newX = this.x + vector.x;
        let newY = this.y + vector.y;

        return new Vector(newX, newY);
    }

    minus(vector) {
        let newX = this.x - vector.x;
        let newY = this.y - vector.y;

        return new Vector(newX, newY);
    }
}



// MALLIRATKAISU

/*
class Vec {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
  
    plus(other) {
      return new Vec(this.x + other.x, this.y + other.y);
    }
  
    minus(other) {
      return new Vec(this.x - other.x, this.y - other.y);
    }
  
    get length() {
      return Math.sqrt(this.x * this.x + this.y * this.y);
    }
}
*/