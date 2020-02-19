var xp=document.createElement('div');
xp.id='secure';
xp.innerHTML='oh noes';
xp.style.position='fixed';
xp.style.opacity='1';
xp.style.top='0%';
xp.style.left='0%';
xp.style.height='100%';
xp.style.width='100%';
xp.style.background='blue';
xp.style.zIndex=999;
document.body.appendChild(xp);

var x = prompt('password','password');
if(x==='password'){
   $("#secure").remove();
}
else{
   $("#secure").remove();
}
/*
$(document).ready(function(){
  var guts = "furure login here";
  //$("#secure").innerHTML = guts;
  $("#secure").innerHTML = "hi";
});
*/
