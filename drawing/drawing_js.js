let canvas=document.getElementById('canvas');
let ctx=canvas.getContext('2d');

let  minus=document.getElementById('minus');

let  plus=document.getElementById('plus');

let show_radius=document.getElementById('radius');
let col=document.getElementsByClassName('col');
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
let drag=false;
let radius=10;
 let savebtn=document.getElementById('save');
 let clearbtn=document.getElementById('clear');
show_radius.innerHTML=radius;
 
function draw(e){
    if(drag){
       

    ctx.lineTo(e.clientX,e.clientY);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(e.clientX,e.clientY,radius,0,2*Math.PI);
    ctx.fill();
    ctx.beginPath();
    ctx.lineWidth=2*radius;
    ctx.moveTo(e.clientX,e.clientY);
    }   
}

function change_true(e){
    drag=true;
    draw(e);
}

function change_false(){
    drag=false;
    ctx.beginPath();
}

plus.addEventListener('click',function(){
    if(radius<100){
    radius++;
    show_radius.innerHTML=radius;
    }
    });
minus.addEventListener('click',function(){
    if(radius>0){
    radius--;
    show_radius.innerHTML=radius;
    }
    });
function setcol(colr){
    ctx.fillStyle=colr;
    ctx.strokeStyle=colr;
    console.log(colr);
}
function lol(e){var active=document.getElementsByClassName('active')[0];
  active.classList.remove('active');
   var tr=e.target;
   tr.classList.add('active');
   setcol(tr.style.backgroundColor);
   console.log(tr);}
for(var i=0 ; i<col.length;i++){
col[i].addEventListener('click',lol);
}

function saveimg(){
  var data = canvas.toDataURL();
 
  console.log(data);
  var request =new XMLHttpRequest();
  request.onreadystatechange=function(){
   if(request.readyState==4 && request.status==200){
       var response =request.responseText;
       console.log(response);
      window.open('download.php?file=response','_blank','location=0,menubar=0');
   }
  };
  request.open('POST','save.php',true);
  request.setRequestHeader('Content-type','application/x-www-form-urlencoded');
  request.send('img='+data);
}
 function clear_tab(canvas){
  canvas.width=canvas.width;
 }
clearbtn.addEventListener('click',clear_tab);
savebtn.addEventListener('click',saveimg);
canvas.addEventListener('mousemove',draw);
canvas.addEventListener('mousedown',change_true);
canvas.addEventListener('mouseup',change_false);



