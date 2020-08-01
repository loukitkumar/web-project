//act and solve problem

let cir=document.querySelector('.can');
const size=100;


 const ctx=cir.getContext('2d');
const width = cir.width = window.innerWidth;
const height = cir.height = window.innerHeight;
 
 const x=width/2;
 const y=height/2;
   ctx.fillStyle="black";
  ctx.fillRect(0,0,width,height);
  let i=0;
 function drawclock(){
      
      ctx.beginPath();
    ctx.arc(x,y, size,0,2*Math.PI);
    ctx.fillStyle = '#333';
    ctx.fill();
  
    
    
  var gra=ctx.createRadialGradient(x,y,100,x,y,110);
    gra.addColorStop(0,'hsl('+i%360+',50%,50%)');
    gra.addColorStop(1, '#333');
     
    ctx.strokeStyle = gra;
    ctx.lineWidth = 10;
    ctx.stroke();
    
    ctx.beginPath();
    ctx.fillStyle = '#4d4d4d';
    ctx.arc(x,y,65,0,2*Math.PI);
    ctx.fill();
    
    ctx.beginPath();
   ctx.fillStyle = '#1a1a1a';
     ctx.arc(x,y,35 ,0,2*Math.PI);
    ctx.fill();
    
    
   let ang,num;
    ctx.textBaseline = "middle"; //set text alignment to middle
    ctx.textAlign = "center"; //set text alignment to center
    ctx.font="normal normal bold 17px arial";
   ctx.translate(x,y);
    

   for( num=1;num<13;num++)
   {
    ang=num*Math.PI/6;
    ctx.rotate(ang);
    ctx.translate(0,-size*0.80);
    ctx.rotate(-ang);
   ctx.fillStyle="red";
    ctx.fillText(num.toString(),0,0);
     ctx.rotate(ang);
    ctx.translate(0,size*0.80);
   // ctx.fillText(num.toString(),0,0);
    ctx.rotate(-ang);
     
   }
  
   i++;
 }
 

 
 function drawhand(){
   var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
      ctx.fillStyle="white";
  ctx.fillText(''+hour+':'+minute+':'+second+'',0,0);
    //hour
    hour = hour%12;
    //calculate angle of hour hand
    hour = (hour*Math.PI/6)+(minute*Math.PI/(6*60))+(second*Math.PI/(360*60));
   draw(hour,"#ff6666",40);
     minute=(minute*Math.PI/30)+(second*Math.PI/(30*60));
    draw(minute,"#003399",50);
   second=(second*Math.PI/30);
    draw(second,"#00cc66",60);
  
  
 }
 function draw(pos,wt,lt){
  
   //console.log(ang);
    
  
    ctx.strokeStyle=wt;
    ctx.lineWidth=10;
ctx.beginPath();
	ctx.arc(0, 0, lt,-Math.PI/2, -Math.PI/2+pos);
ctx.stroke();      
  
    
 }

 function loop(){
  drawclock();
  drawhand();
  ctx.translate(-x,-y);
  requestAnimationFrame(loop);
 }
loop();