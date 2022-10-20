const startingLocation = window.location.pathname.substring(1);
//alert(startingLocation);

var cmnty;
var cmnt;
var dtail;
var bat1img,bat2img,bowlerimg;


var ballPossition = "";
var ballEvent;
var auto = true;

function scroll(){
  let elm = document.getElementById("myDIV");
  setTimeout(function() {
    elm.scrollTop = elm.scrollHeight;
  }, 300);
  document.getElementById('usrnme').value = localStorage.getItem("name");
}

/* Midwicket */


function midwiket(run){
  const ball = document.getElementById("ball");
  const filder = document.getElementById("f7");
  
  if(run < 4 || !run){
    ball.style.animation = "midwiket-ball 4s";
  }
  else{
    ball.style.animation = "midwiket-ball-boundary 4s";
  }
  
  filder.style.animation = "midwiket-filder 5s";
  
  setTimeout(function() {
    ball.style.animation = "";
  }, 4000);
  setTimeout(function() {
    filder.style.animation = "";
  }, 5000);
  
}


/* Extracover */

function deepExtracover(run){
  const ball = document.getElementById("ball");
  const filder = document.getElementById("f8");
  
  if(run < 4 || !run){
    ball.style.animation = "deepExtracover-ball 4s";
  }
  else{
    ball.style.animation = "deepExtracover-ball-boundary 4s";
  }
  
  filder.style.animation = "deepExtracover-filder 5s";
  
  setTimeout(function() {
    ball.style.animation = "";
  }, 4000);
  setTimeout(function() {
    filder.style.animation = "";
  }, 5000);
  
}


/* Thirdman */

  function thirdman(run){
  
  const ball = document.getElementById("ball");
  const filder = document.getElementById("f2");
  
  if(run < 4 || !run){
    ball.style.animation = "thirdman-ball 4s";
  }
  else{
    ball.style.animation = "thirdman-ball-boundary 4s";
  }
  
  filder.style.animation = "thirdman-filder 5s";
  
  setTimeout(function() {
    ball.style.animation = "";
  }, 4000);
  setTimeout(function() {
    filder.style.animation = "";
  }, 5000);
    
    
  }

/* squreLeg */

  function squreLeg(run){
  
  const ball = document.getElementById("ball");
  const filder = document.getElementById("f1");
  
  if(run < 4 || !run){
    ball.style.animation = "squreLeg-ball 4s";
  }
  else{
    ball.style.animation = "squreLeg-ball-boundary 4s";
  }
  
  filder.style.animation = "squreLeg-filder 5s";
  
  setTimeout(function() {
    ball.style.animation = "";
  }, 4000);
  setTimeout(function() {
    filder.style.animation = "";
  }, 5000);
  }



/*  point */

  function point(run){
  
  const ball = document.getElementById("ball");
  const filder = document.getElementById("f9");
  
  if(run < 4 || !run){
    ball.style.animation = "point-ball 4s";
  }
  else{
    ball.style.animation = "point-ball-boundary 4s";
  }
  
  filder.style.animation = "point-filder 5s";
  
  setTimeout(function() {
    ball.style.animation = "";
  }, 4000);
  setTimeout(function() {
    filder.style.animation = "";
  }, 5000);
  }

/*  midOff */

  function midOff(run){
   
  const ball = document.getElementById("ball");
  const filder = document.getElementById("f3");
  
  if(run < 4 || !run){
    ball.style.animation = "midOff-ball 4s";
  }
  else{
    ball.style.animation = "midOff-ball-boundary 4s";
  }
  
  filder.style.animation = "midOff-filder 5s";
  
  setTimeout(function() {
    ball.style.animation = "";
  }, 4000);
  setTimeout(function() {
    filder.style.animation = "";
  }, 5000);

  }

/*  midOn */

  function midOn(run){
   
  const ball = document.getElementById("ball");
  const filder = document.getElementById("f4");
  
  if(run < 4 || !run){
    ball.style.animation = "midOn-ball 4s";
  }
  else{
    ball.style.animation = "midOn-ball-boundary 4s";
  }
  
  filder.style.animation = "midOn-filder 5s";
  
  setTimeout(function() {
    ball.style.animation = "";
  }, 4000);
  setTimeout(function() {
    filder.style.animation = "";
  }, 5000);

  }


/* fineLeg */

  function fineLeg(run){
   
  const ball = document.getElementById("ball");
  const filder = document.getElementById("f5");
  
  if(run < 4 || !run){
    ball.style.animation = "fineLeg-ball 4s";
  }
  else{
    ball.style.animation = "fineLeg-ball-boundary 4s";
  }
  
  filder.style.animation = "fineLeg-filder 5s";
  
  setTimeout(function() {
    ball.style.animation = "";
  }, 4000);
  setTimeout(function() {
    filder.style.animation = "";
  }, 5000);

  }

/* gully */

  function gully(run){
   
  const ball = document.getElementById("ball");
  const filder = document.getElementById("f6");
  
  if(run < 4 || !run){
    ball.style.animation = "gully-ball 4s";
  }
  else{
    ball.style.animation = "gully-ball-boundary 4s";
  }
  
  filder.style.animation = "gully-filder 5s";
  
  setTimeout(function() {
    ball.style.animation = "";
  }, 4000);
  setTimeout(function() {
    filder.style.animation = "";
  }, 5000);

  }
  function showAD(){
    document.getElementById("adv").style.display = "block";
  }

  
  function hideAD(){
    document.getElementById("adv").style.display = "none";
  }


setInterval(function() {
  
  //alert(ballPossition);
  if (ballPossition.includes("point")) {
     point(ballEvent);
   }
   
   else if (ballPossition.includes("mid-on")) {
     midOn(ballEvent);
   }
 
   else if (ballPossition.includes("mid-of")) {
     midOff(ballEvent);
   }
 
   else if (ballPossition.includes("mid-wicket")) {
     midwiket(ballEvent);
   }
   
   else if (ballPossition.includes("square")) {
     squreLeg(ballEvent);
   }
   
   else if (ballPossition.includes("third")) {
     thirdman(ballEvent);
   }
   
   else if (ballPossition.includes("cover")) {
     deepExtracover(ballEvent);
   }
 
   else if (ballPossition.includes("long-on")) {
     midwiket(ballEvent);
   }
   else if (ballPossition.includes("long-of")) {
     deepExtracover(ballEvent);
   }
   else if (ballPossition.includes("fine-leg")) {
     fineLeg(ballEvent);
   }
   else if (ballPossition.includes("gully")) {
     gully(ballEvent);
   }
   console.log(ballPossition)
},6000)

function setPosition(pst,run){
  ballPossition = pst;
  ballEvent = run;
  document.getElementById("brun").innerHTML = '<span id="text-danger">Manual<span>';
  auto = false;
}
setInterval(function() {
  auto = false;
 document.getElementById("brun").innerHTML = '<span id="text-success">Auto<span>';
},1000*20);
const socket = io('https://balltracker.onrender.com');
socket.on('match',(status)=> {
  console.log(status);
  if(auto){
  ballPossition = status.commentry;
  ballEvent = parseInt(status.lb, 10);
  }
   document.getElementById("brun").innerHTML = status.status;
});
