const cir=document.querySelector('.can');
 const body=document.querySelector('body');
 let size=10;

 let px=50,py=50;
 
  
 
 const ctx=cir.getContext('2d');
const width = cir.width = window.innerWidth;
const height = cir.height = window.innerHeight;
 let i=0;

function draw(){
     if(i>=360)
     {
      i=0;
     }
    
    ctx.beginPath();
    ctx.fillStyle='hsl('+i+',100%,50%)';
    ctx.arc(px,py,size,0,2*Math.PI);
    ctx.fill();
    i++;
    
 }
   
 function pos(event){
    
 var x=event.clientX;
var y=event.clientY;
px=x;
py=y;

 
 }

 function loop(){
    setTimeout(function(){
        ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
    
  ctx.fillRect(0, 0, width, height);
  draw();
  body.addEventListener("mousemove",pos);
  requestAnimationFrame(loop);
   },1);
     
 }
loop();
 
 
 
 