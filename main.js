canvas.setAttribute("id", "canvas");


var p;
var ctx;
var tileSize;

var startPos = new Cord(0, 0);

var obiWans = [];

function main() {
    var canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    
    console.log(window.innerHeight + ":h w: " + window.innerWidth);
    
    canvas.width  = map[0].length*48;
    canvas.height = map.length*48;
    
    
    for (var i = 0; i < map.length; i++) {
        for (var j = 0; j < map[0].length; j++) {
            if (map[i][j] == "x") {
                startPos.setCord(j, i);
            }
            if (map[i][j] == type.ROCK.woah) {
                obiWans.push(new ObiWan(type.ROCK, j, i));
            } else if (map[i][j] == type.FOOD.woah) {
                obiWans.push(new ObiWan(type.FOOD, j, i))
            } else if (map[i][j] == type.WATER.woah) {
                obiWans.push(new ObiWan(type.WATER, j, i))
            }
        }
    }

    console.log(canvas.width);
    console.log(canvas.height);
    

    //Creates the player
    tileSize = canvas.height / 16;

    p = new Player(startPos.getX()*tileSize, startPos.getY()*tileSize, tileSize);

    resetBoard();
    
    drawObiWans();

    console.log(obiWans)

    p.drawPlayer(ctx);
    step();
}

let start = null;


function drawObiWans(){
    
    obiWans.forEach(obi => {
        if (obi.getType() == type.ROCK) {
            var pos = obi.getPosition();
            ctx.fillStyle = "#808080";
            ctx.fillRect(pos.getX()*tileSize, pos.getY()*tileSize, this.tileSize, this.tileSize);
        } else if (obi.getType() == type.WATER) {
            
            var pos = obi.getPosition();
            ctx.fillStyle = "#0000FF";
            ctx.fillRect(pos.getX()*tileSize, pos.getY()*tileSize, this.tileSize, this.tileSize);   
        } else if (obi.getType() == type.FOOD) {
            var pos = obi.getPosition();
            ctx.fillStyle = "#808000";
            ctx.fillRect(pos.getX()*tileSize, pos.getY()*tileSize, this.tileSize, this.tileSize);   
        }
        

    });

    
}

function step() {
    if (!start) start = Date.now();
    var progress = Date.now() - start;
    if (progress > 500) { // Denna körs varje sekund
        p.move();
        start = Date.now();
        resetBoard();
        drawObiWans();
        p.drawPlayer(ctx);
    }
    window.requestAnimationFrame(step);
}

function resetBoard(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    

    //Ritar ut ett rutnät
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
