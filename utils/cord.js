class Cord {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    getCord() {
        return [this.x, this.y];
    }

    getX() {
        return this.x;
    }

    getY() {
        return this.y;

    }

    setCord(x, y) {
        this.x = x;
        this.y = y;
    }
}

//cord = new Cord(this.x, this.y)