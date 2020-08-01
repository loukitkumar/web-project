const cir=document.querySelector('.can');
 
 let size=10;
 let a=0;
 const rad=100;
 
  
 
 const ctx=cir.getContext('2d');
const width = cir.width = window.innerWidth;
const height = cir.height = window.innerHeight;
 let i=0;

function Ball(x,y){
   this.x=x+300;
   this.y=y+300;
   this.px=x+rad*Math.cos(a);
   this.py=y+rad*Math.sin(a);
   }
   
 function random() {
  const num = Math.floor(Math.random() * 100);
  return num;
}

 Ball.prototype.circle=function(){
  this.px=this.x+rad*Math.cos(a);
  this.py=this.y+rad*Math.sin(a);
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
 
 
 while(ball.length<10)
 {
  let bll=new Ball(random(),random());
  ball.push(bll);
 }
 
 function loop(){
  
    setTimeout(function(){
     ctx.fillStyle = 'rgba(0, 0, 0,0.1)';
    ctx.fillRect(0,0,width,height);
    
    a = (a + Math.PI / 40) % (Math.PI * 2);
    for(let k=0;k<ball.length;k++){
    ball[k].circle();
    ball[k].draw();
    }
    
    requestAnimationFrame(loop);
    },1);
    
 }
 loop();
 