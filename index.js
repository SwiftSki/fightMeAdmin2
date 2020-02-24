var xp=document.createElement('div');
xp.id='ohnoes';
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

var cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)test\s*\=\s*([^;]*).*$)|^.*$/, "$1");
if(test==="sahara"){
    x = "sahara";
    $("#ohnoes").remove();
}
else{
    var str = prompt('password');
    var x = str.toLowerCase();
    if(x==='sahara'){
        $("#ohnoes").remove();
        document.cookie="test=sahara";
    }
}
/*
$(document).ready(function(){
  var guts = "furure login here";
  //$("#secure").innerHTML = guts;
  $("#secure").innerHTML = "hi";
});
*/
