class WorldObject {
    constructor(posX, posY, tileSize, color = "#0000FF") {
        this.tileSize = tileSize;
        this.position = new Cord(posX, posY);
        this.color = color;
    }

    getPosition() {
        return this.position;
    }

    setPosition(newPosX, newPosY) {
        this.position.setCord(newPosX, newPosY);
    }

    draw(ctx){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.position.getX(), this.position.getY(), this.tileSize, this.tileSize);
    }
}
class StaticObject extends WorldObject {
    constructor(x, y, tileSize, color, type) {
        super(x, y, tileSize, color);
        this.type = type;

    }
}
class Player extends WorldObject  {
    constructor (x, y, tileSize, color) {
        super(x, y, tileSize, color);
        this.hungerCounter = 0;
        this.thirstCounter = 0;

    }
    
    move() {
        var x = this.position.getX();
        var y = this.position.getY();
        console.log("MOVE: x is: " + x + " y is: " + y + " " +  (Math.floor(Math.random() * 9)));
        
        switch (Math.floor(Math.random() * 9)) {
            case 0: 
                break;
            case 1: 
                if (!this.checkBorders(x - this.tileSize, y))
                    this.setPosition(x - this.tileSize, y);
                break;
            case 2: 
                if (!this.checkBorders(x - this.tileSize, y + this.tileSize)) {
                    this.setPosition(x - this.tileSize, y + this.tileSize);
                }
                break;
            case 3:
                if (!this.checkBorders(x, y + this.tileSize)) {
                    this.setPosition(x, y + this.tileSize);
                }
                break;
            case 4:
                if (!this.checkBorders(x + this.tileSize, y + this.tileSize)) {
                    this.setPosition(x + this.tileSize, y + this.tileSize);
                }
                break;
            case 5:
                if (!this.checkBorders(x + this.tileSize, y)) {
                    this.setPosition(x + this.tileSize, y);
                }
                break;
            case 6:
                if (!this.checkBorders(x + this.tileSize, y - this.tileSize)) {
                    this.setPosition(x + this.tileSize, y - this.tileSize);
                }
                break;
            case 7:
                if (!this.checkBorders(x, y - this.tileSize)) {
                    this.setPosition(x, y - this.tileSize);
                }
                break;
            case 8:
                if (!this.checkBorders(x - this.tileSize, y - this.tileSize)) {
                    this.setPosition(x - this.tileSize, y - this.tileSize);
                }
                break;
            default: 
                break;

        }
    }


    checkBorders(posX, posY){
        if (posX < 0 || posX >= document.getElementById('canvas').width) {
            return true;
        }

        if (posY < 0 || posY >= document.getElementById('canvas').height) {
            return true;
        }
        return false;
    }
}

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