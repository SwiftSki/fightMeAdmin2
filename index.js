var jq = document.createElement('script');
jq.src='https://code.jquery.com/jquery-3.4.1.js';
document.head.appendChild(jq);

var x = prompt('password','password');
if(x==='password'){
   $("#secure").hide();
}
/*
$(document).ready(function(){
  var guts = "furure login here";
  //$("#secure").innerHTML = guts;
  document.getElementById("#secure").innerHTML = "hi";
});
*/
