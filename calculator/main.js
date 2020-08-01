let result=document.getElementById('result');
let num=[];
let op=[];
let ev;
let i=0;
function sol(val){
    
   if(val=="C")
   {
    clr();
    
   }
   else if(val=="*"||val=="/"||val=="+"||val=="-"){
      
      art(val);
    
   }
   else if(val=="="){
      evaluate();
   }
   else{
    result.value+=val;
   num[i]=result.value;
   }
}
function art(a){
   op[i]=a;
   result.value="";
   i++;
}
function evaluate(){
 ev=Number(num[0]);
  for(let l=0;l<num.length-1;l++)
     {
      if(op[l]=="+"){
         ev=ev+Number(num[l+1]);
      }
      else if(op[l]=="*"){
         ev=ev*Number(num[l+1]);
      }
      else if(op[l]=="-")
      {
         ev=ev-Number(num[l+1]);
      }
      else{
         ev=ev/Number(num[l+1]);
      }
      }
      result.value=ev;
      num.length=0;
      op.length=0;
     i=0; 
}
function clr(){
   num.length=0;
      op.length=0;
      result.value="";
     i=0; 
}