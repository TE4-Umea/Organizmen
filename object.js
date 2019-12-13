class ObiWan {
    constructor(type, x, y) {
        this.type = type;
        this.position = new Cord(x, y);
    }
    
    getType() {
         return this.type;
    }

    getPosition() {
        return this.position;
    }

    getMapChar() {
        return this.position.woah;
    }

    setPosition(x, y) {
        this.position.setCord(x, y);
    }

    isSolid() {
        if (this.type == type.ROCK) {
            return true;
       } else {
           return false;
       }

    }
}

const type = {
    ROCK: {woah: 'r'},
    WATER: {woah: 'w'},
    FOOD: {woah: 'f'}
}