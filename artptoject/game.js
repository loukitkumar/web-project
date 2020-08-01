const cir=document.querySelector('.can');
const ctx=cir.getContext('2d');
const width=cir.width=window.innerWidth;
const height=cir.height=window.innerHeight;

const div=document.querySelector('.resetdiv');
let ball;
let r;
var l;
const g=9.8;
let t=0;
const v=120;
const y=height*0.8;
let text="guess the angle to put the ball in basket";

const btn=document.querySelector('.submit');
const inp=document.querySelector('#guess');


function random(min,max){
    return Math.floor(Math.random()*(max-min)+min);
}

function drawbasket(){
    
    ctx.fillStyle="rgb(0,0,0,0.21)";
    ctx.fillRect(0,0,width,y);
    //lower
    ctx.fillStyle="#808080";
    ctx.fillRect(width-200,y-200,100,200);
  //upper
    ctx.beginPath();
      ctx.strokeStyle="white";
    ctx.lineWidth=3;
    ctx.moveTo(width-200,y-200);
    ctx.lineTo(width-100,y-200);
    ctx.stroke();
    //text
    ctx.fillStyle="white";
    ctx.font="20px arial";
    ctx.textAlign="center";
    ctx.fillText(text,width/2,30);
}


function Ball(x,y,i){
    this.x=x;
    this.y=y;
    this.px=x;
     this.py=y;
    
     this.a=i*(2*Math.PI/360);
  
}

Ball.prototype.drawball=function(){
    
ctx.beginPath();
ctx.fillStyle="orange";
ctx.arc(this.px,this.py,20,0,2*Math.PI);
ctx.fill();
};

Ball.prototype.projectile=function(){
    this.py=this.y-((v*(Math.cos(this.a))*t)-(0.5*g*t*t));
    this.px=this.x+(v*Math.sin(this.a)*t);
    t=t+0.08;
};
Ball.prototype.collision2=function(){
    if(this.py>(height*0.8)||this.px>width)
    {
      inp.disabled=true;
      btn.disabled=true;
    
     ctx.fillStyle="black";
     ctx.fillRect(0,0,width,y);
     ctx.fillStyle="red";
    ctx.font="30px arial";
    ctx.textAlign="center";
    ctx.fillText("you lose",width/2,30);
      resetbtn();
    }
    
};
Ball.prototype.collision=function(){
    if(this.px>width-200&&this.px<width-100)
    {
       if(this.py>y-200&&this.py<y-195){
        inp.disabled=true;
      
   
      ctx.fillStyle="orange";
     ctx.fillRect(0,0,width,y);
   ctx.fillStyle="green";
    ctx.font="30px arial";
    ctx.textAlign="center";
    ctx.fillText("you win",width/2,30);
      resetbtn();
      }
    }
};
function resetbtn(){
    window.clearInterval(l);
   r=document.createElement('button');
    r.innerHTML="reset";
  
    div.appendChild(r);
    r.addEventListener('click', resetGame);
    
}
function resetGame(){
   /* div.removeChild(r);
     np.disabled=false;
     btn.disabled=false;
     ball.px=random(100,200);
     ball.py=height*0.8-50;
     text="guess the angle to put the ball in basket";
     ctx.clearRect(0,0,width,y+20);*/
   location.reload();
     
}
function loop(){
    drawbasket();
    ball.drawball();
    ball.projectile();
    ball.collision2();
    ball.collision();
    
   
}

function run(){
     ball=new Ball(random(100,200),height*0.8-40,Number(inp.value));
    l=self.setInterval(loop,10);
    btn.disabled=true;
}
btn.addEventListener('click',run);
drawbasket();
ctx.beginPath();
ctx.fillStyle="orange";
ctx.arc(100,y-20,20,0,2*Math.PI);
ctx.fill();