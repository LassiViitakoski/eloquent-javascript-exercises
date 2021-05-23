// GROUPS


// OMA RATKAISU

class Group {
    constructor() {
        this.group = [];
    }

    has(value) {
        if (this.group.indexOf(value) === -1) return false;

        return true;
    }

    add(newValue) {
        if (!this.has(newValue)) this.group.push(newValue);
    }

    delete(deleteValue) {
        let index = this.group.indexOf(deleteValue);
        
        if (index === -1) return;

        this.group = this.group.filter(value => value != deleteValue);   
    }

    static from(array) {
        let group = new Group();
        if (array.length != 2) return group;
        
        for (let i = 0; i < array[1] - array[0] + 1; i++) {
            if (!group.has(array[0] + i)) {
                group.add(array[0] + i);
            }
        }

        return group;
    }
}


// MALLIRATKAISU

/*
class Group {
    constructor() {
      this.members = [];
    }
  
    add(value) {
      if (!this.has(value)) {
        this.members.push(value);
      }
    }
  
    delete(value) {
      this.members = this.members.filter(v => v !== value);
    }
  
    has(value) {
      return this.members.includes(value);
    }
  
    static from(collection) {
      let group = new Group;
      for (let value of collection) {
        group.add(value);
      }
      return group;
    }
}
*/