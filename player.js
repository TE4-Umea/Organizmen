class Player {
    constructor(posX, posY, tileSize) {
        this.position = new Cord(posX, posY);
        this.tileSize = tileSize;
    }

    getPosition() {
        return this.position;

    }

    setPosition(newPosX, newPosY) {
        this.position.setCord(newPosX, newPosY);
    }

    drawPlayer(ctx) {
        ctx.fillStyle = "#FF0000";
        var x = this.position.getX();
        var y = this.position.getY();
        console.log("x is: " + x + " y is: " + y);
        ctx.fillRect(x, y, this.tileSize, this.tileSize);
    
    }

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

        return false;
    }
}