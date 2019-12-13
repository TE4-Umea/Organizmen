canvas.setAttribute("id", "canvas");




var p, r;
var ctx;
var tileSize;
var worldObjects = [];
let start = null;
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

    for (let index = 0; index < 10; index++) {
        worldObjects.push(getRandomStaticObject()); 
    }
    resetBoard();
    p.draw(ctx);
    worldObjects.forEach(element => {
        element.draw(ctx);   
    });
    step();
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function getRandomStaticObject() {
    let isFood = getRandomInt(2);
    return new StaticObject(
        getRandomInt(33)*tileSize,
        getRandomInt(14)*tileSize, 
        tileSize, 
        isFood ? "#808000" : "#0000FF", 
        isFood ? "food" : "water");
}

function step() {
    if (!start) start = Date.now();
    var progress = Date.now() - start;
    if (progress > 250) {
        p.move();
        checkColision();
        start = Date.now();
        resetBoard();
        p.draw(ctx);
        worldObjects.forEach(element => {
            element.draw(ctx);
        });
        
    }
    window.requestAnimationFrame(step);
}

function checkColision() {
    let playerPos = p.getPosition();
    worldObjects.forEach(function (value, i) {
        let objectPos = value.getPosition();
        if (playerPos.getX() == objectPos.getX() &&
            playerPos.getY() == objectPos.getY()) {
            onCollision(value, i);
            return true;
        }
    });
}
function onCollision(staticObject, index) {
    if(staticObject.type == "water") {
        p.thirstCounter++;
    } else {
        p.hungerCounter++;
    }
    // console.log(p.thirstCounter, p.hungerCounter);
    worldObjects.splice(index, 1);
    worldObjects.push(getRandomStaticObject());

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