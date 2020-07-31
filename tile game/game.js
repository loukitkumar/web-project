const cir=document.querySelector('.can');
const ctx=cir.getContext('2d');
const body=document.querySelector('body');
const width=cir.width=700;
const height=cir.height=500;
const w=100;
const h=20;
let result;
let X=0,Y=0;
let px=Math.random()*590+10,py=470;
let basex=350,basey=490;
let velx=7,vely=-7;
let tile=[];

function xy(){
   if(X<=width-100-2){
    X=X+w+2;
   }
   else{
    X=0;
     if(Y<=height/2){
    Y=Y+h+2;
   }
   }
  
}
function Tile(x,y){
    this.x=x;
    this.y=y;
    
}
Tile.prototype.draw=function(){
    ctx.fillStyle="red";
    ctx.fillRect(this.x,this.y,w,h);
};


while(tile.length<21){
  let tl=new Tile(X,Y);
  tile.push(tl);
  
    xy();
}
function drawball(){
    ctx.beginPath();
    ctx.fillStyle="black";
    ctx.arc(px,py,10,0,2*Math.PI);
    ctx.fill();
    
}

function drawbase(){
    ctx.fillStyle="green";
    ctx.fillRect(basex,basey,150,10);
}

function collision(){
   if(px>=width-20||px<=20){
    velx=-velx;
   }
   if(((py>=480&&py<=500)&&(px<=basex+150&&px>=basex))||py<=0){
    vely=-vely;
   }
   for(let k=0;k<tile.length;k++){
    if((tile[k].x+w>=px&&tile[k].x<=px)&&(py>=tile[k].y&&py<=tile[k].y+h)){
        vely=-vely;
      tile.splice(k,1);
        break;
    }
     
   }
   if(py>=500){
    clearInterval(c);
    result=confirm("do you wana play again");
    if(result){
      location.reload();
    }
   }
   if(tile.length==0){
    clearInterval(c);
    result=confirm("you won ,do you wana play again");
    if(result){
      location.reload();
    }
   }
   px+=velx;
   py+=vely;
    
}
function pos(event){
  basex=event.clientX;
}
function loop(){
  body.addEventListener('mousemove',pos);
  ctx.fillStyle="rgba(225,225,225,0.5)";
  ctx.fillRect(0,0,width,height);
  drawball();
  drawbase();
  collision();
  for(let j=0;j<tile.length;j++){
    tile[j].draw();
  }
  body.addEventListener('mousemove',pos);
  
}
let c=self.setInterval(loop,30);