canvas.setAttribute("id", "canvas");


var p;
var ctx;
var tileSize;


function main() {
    var canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    
    console.log(window.innerHeight + ":h w: " + window.innerWidth);
    
    canvas.width  = map[0].length*48;
    canvas.height = map.length*48;
    
    console.log(map);
    
    

    console.log(canvas.width);
    console.log(canvas.height);
    

    //Creates the player
    tileSize = canvas.height / 16;

    p = new Player(8*tileSize, 8*tileSize, tileSize);

    resetBoard();


    p.drawPlayer(ctx);
    step();
}

let start = null;

function step() {
    if (!start) start = Date.now();
    var progress = Date.now() - start;
    if (progress > 500) { // Denna körs varje sekund
        p.move();
        start = Date.now();
        resetBoard();
        p.drawPlayer(ctx);
        //r.draw();
        
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



    
/*function render(ctx){
    p.drawPlayer(ctx);

} */