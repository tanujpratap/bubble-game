 //event bubbling
 //jisper click karoge wo element par event raise hoga , or event listener na  milne pr event element ke parent par listener dhundhega,waha bhi na milne par event parent ke parent par listener dhundhega
 var score=0;
 function increasescore(){
   
     score +=10;
     document.querySelector("#scoreval").textContent=score;


 }
 function getnewhit(){
 hitrn=Math.floor(Math.random()*10);
document.querySelector("#hitval").textContent=hitrn;
  }
  function makebubble(){
    var clutter="";
    for(var i=1;i<=70;i++){
      var rn=Math.floor(Math.random()*10);
      clutter+=`<div class="bubble">
      ${rn}
  </div>`
    }
    document.querySelector("#pbottom").innerHTML=clutter;
  }
 
  var timer=4;
  function runtimer(){
   var timerint= setInterval(
        function(){

if(timer>0){
    timer--;
    document.querySelector("#timerval").textContent=timer;
   
}
else{
    clearInterval(timerint);
    document.querySelector("#pbottom").innerHTML=`<h1>game over</h1>`;
}
        },1000
    )
  }
  document.querySelector("#pbottom").addEventListener("click",function(dets){
  var clickednum=Number(dets.target.textContent);
  if(clickednum===hitrn){
    increasescore();
    makebubble();
    getnewhit();
  }
  })
  runtimer();
  makebubble();
  getnewhit();
 