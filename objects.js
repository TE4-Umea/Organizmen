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
    
    move() {
        var x = this.position.getX();
        var y = this.position.getY();
        console.log("MOVE: x is: " + x + " y is: " + y + " " +  (Math.floor(Math.random() * 9)));
        
        switch (Math.floor(Math.random() * 9)) {
            case 0: 
                break;
            case 1: 
                if (!this.collide(x - this.tileSize, y))
                    this.setPosition(x - this.tileSize, y);
                break;
            case 2: 
                if (!this.collide(x - this.tileSize, y + this.tileSize)) {
                    this.setPosition(x - this.tileSize, y + this.tileSize);
                }
                break;
            case 3:
                if (!this.collide(x, y + this.tileSize)) {
                    this.setPosition(x, y + this.tileSize);
                }
                break;
            case 4:
                if (!this.collide(x + this.tileSize, y + this.tileSize)) {
                    this.setPosition(x + this.tileSize, y + this.tileSize);
                }
                break;
            case 5:
                if (!this.collide(x + this.tileSize, y)) {
                    this.setPosition(x + this.tileSize, y);
                }
                break;
            case 6:
                if (!this.collide(x + this.tileSize, y - this.tileSize)) {
                    this.setPosition(x + this.tileSize, y - this.tileSize);
                }
                break;
            case 7:
                if (!this.collide(x, y - this.tileSize)) {
                    this.setPosition(x, y - this.tileSize);
                }
                break;
            case 8:
                if (!this.collide(x - this.tileSize, y - this.tileSize)) {
                    this.setPosition(x - this.tileSize, y - this.tileSize);
                }
                break;
            default: 
                break;

        }
    }


    collide(posX, posY){
        if (posX < 0 || posX >= document.getElementById('canvas').width) {
            return true;
        }

        if (posY < 0 || posY >= document.getElementById('canvas').height) {
            return true;
        }

        /* rocks.forEach(element => {
            if (posX == element.x) {
                return true;
            }
            if (posX == element.y) {
                return true;
            }
        }); */

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