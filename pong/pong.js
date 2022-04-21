const cvs =document.getElementById("pong");
const ctx = cvs.getContext("2d");

const user={
    x : 0,
    y : cvs.height/2-100/2,
    width : 10,
    height : 100,
    color : "WHITE",
    score : 0
}

const com={
    x : cvs.width-10,
    y : cvs.height/2-100/2,
    width : 10,
    height : 100,
    color : "WHITE",
    score : 0
}

const ball={
    x : cvs.width/2,
    y : cvs.height/2,
    radius : 10,
    speed : 5,
    velocityX: 5,
    velocityY : 5,
    color : "WHITE"
}

const net={
    x : cvs.width/2-1,
    y : 0,
    width : 2,
    height : 10,
    color : "WHITE"
}



function drawRect(x,y,w,h,color){
    
    ctx.fillStyle = color;
    ctx.fillRect(x,y,w,h);
}

function drawCircle(x,y,r,color){
    
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x,y,r,0,Math.PI*2,false);
    ctx.closePath();
    ctx.fill();   
}

function drawNet(){
    for(let i =0; i<cvs.height;i+=15){
        drawRect(net.x, net.y + i,net.width,net.height,net.color);
    }
}
function drawText(text,x,y,color){
    
    ctx.fillStyle = color;
    ctx.font = "45px fantasy";
    ctx.fillText(text,x,y);
    
}

function render(){
    drawRect(0,0,cvs.width,cvs.height,"BLACK");
    
    drawNet();
    
    drawText(user.score,cvs.width/4,cvs.height/5,"WHITE");
    drawText(com.score,3*cvs.width/4,cvs.height/5,"WHITE");
    
    drawRect(user.x, user.y,user.width,user.height,user.color);
    drawRect(com.x, com.y, com.width, com.height, com.color);
    
    drawCircle(ball.x,ball.y, ball.radius, ball.color);
    
}

function game(){
    render();
}

const framePerSecond = 50;
setInterval(game,1000/framePerSecond);


