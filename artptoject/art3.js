const cir=document.querySelector('.can');

const size=10;


 const ctx=cir.getContext('2d');
const width = cir.width = window.innerWidth;
const height = cir.height = window.innerHeight;
 let i=0;

 const x=width/2,y=height/2;
 
  const a=100,b=50;
let P=0;
  function Ball(t,p){
    this.t=t;
    this.p=p;
    this.px=x+a*Math.cos(t)*Math.cos(p)+b*Math.sin(t)*Math.sin(p);
    this.py=y+a*Math.cos(t)*Math.sin(p)+b*Math.sin(t)*Math.cos(p);
}

 
Ball.prototype.ellips=function(){
 this.px=x+a*Math.cos(this.t)*Math.cos(this.p)+b*Math.sin(this.t)*Math.sin(this.p);
    this.py=y+a*Math.cos(this.t)*Math.sin(this.p)+b*Math.sin(this.t)*Math.cos(this.p);
    this.t=(this.t+Math.PI/40)%(Math.PI*2);
};


Ball.prototype.draw=function(){
     if(i>=360)
     {
      i=0;
     }
    
    ctx.beginPath();
    ctx.fillStyle='hsl('+i+',100%,50%)';
    ctx.arc(this.px,this.py,size,0,2*Math.PI);
    ctx.fill();
    i++;
    
 };
   
 let ball=[];
 while(ball.length<4){
    
    let bll=new Ball(0,P);
    ball.push(bll);
    P=P+30;
    
   
 }
 
 function loop(){
    setTimeout(function(){
    ctx.fillStyle = 'rgba(0, 0,0, 0.1)';
    
  ctx.fillRect(0, 0, width, height);
   ctx.beginPath();
    ctx.fillStyle='hsl('+i+',100%,50%)';
    ctx.arc(x,y,size,0,2*Math.PI);
    ctx.fill();
  
  for(let k=0;k<ball.length;k++)
  {
    ball[k].draw();
    ball[k].ellips();
  }
  
  requestAnimationFrame(loop);
   },1);
     
 }
loop();