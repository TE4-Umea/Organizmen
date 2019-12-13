canvas.setAttribute("id", "canvas");




var p, r;
var ctx;
var tileSize;
var worldObjects = [];
// let rocks = [];




function main() {
    var canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    
    console.log(window.innerHeight + ":h w: " + window.innerWidth);

    canvas.width  = window.innerWidth - 16;
    canvas.height = window.innerHeight - 16;

    //Creates the player
    tileSize = canvas.height / 16;

    p = new Player(8*tileSize, 8*tileSize, tileSize, "#FF0000");
    worldObjects.push(...[
        new StaticObject(8*tileSize, 9*tileSize, tileSize, "#0000FF", "water"),
        new StaticObject(12*tileSize, 12*tileSize, tileSize, "#808000", "food")
    ])
    resetBoard();
    p.draw(ctx);
    worldObjects.forEach(element => {
        element.draw(ctx);   
    });
    step();
}

let start = null;

function step() {
    if (!start) start = Date.now();
    var progress = Date.now() - start;
    if (progress > 500) {
        p.move();
        start = Date.now();
        resetBoard();
        p.draw(ctx);
        worldObjects.forEach(element => {
            element.draw(ctx);
        });
        checkColision();
    }
    window.requestAnimationFrame(step);
}

function checkColision() {
    let playerPos = p.getPosition();
    for(let staticObject of worldObjects) {
        let objectPos = staticObject.getPosition();
        if (playerPos.getX() == objectPos.getX() &&
            playerPos.getY() == objectPos.getY()) {
            console.log("owox");
            if(staticObject.type == "water") {
                p.thirstCounter++;
                console.log(p.thirstCounter, p.hungerCounter);


            } else {
                p.hungerCounter++;
                console.log(p.thirstCounter, p.hungerCounter);
            }
            return true;
        }
    }
     /* rocks.forEach(element => {
            if (posX == element.x) {
                return true;
            }
            if (posX == element.y) {
                return true;
            }
        }); */
}

function resetBoard(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    ctx.beginPath();
    ctx.lineWidth = 2;
    for(let i = 0; i < tileSize; i++) {
        ctx.moveTo(0, i * tileSize);
        ctx.lineTo(canvas.width, i * tileSize);
    }

    for (let i = 0; i < tileSize*2; i++) {
        ctx.moveTo(i * tileSize, 0);
        ctx.lineTo(i * tileSize, canvas.height);
    }

    ctx.stroke();
}



    
/*function render(ctx){
    p.drawPlayer(ctx);

} */