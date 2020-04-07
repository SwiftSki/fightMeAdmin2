function getCookie(cname) {
    var name = cname + "="; //Create the cookie name variable with cookie name concatenate with = sign
    var cArr = window.document.cookie.split(';'); //Create cookie array by split the cookie by ';'
     
    //Loop through the cookies and return the cooki value if it find the cookie name
    for(var i=0; i<cArr.length; i++) {
        var c = cArr[i].trim();
        //If the name is the cookie string at position 0, we found the cookie and return the cookie value
        if (c.indexOf(name) == 0) 
            return c.substring(name.length, c.length);
    }
     
    //If we get to this point, that means the cookie wasn't find in the look, we return an empty string.
    return "";
}

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

var test = getCookie("test");
if(test==="sahara"){
    x = "sahara";
    $("#ohnoes").remove();
}
else{
    var str = prompt('password');
    var x = str.toLowerCase();
    if(x==='sahara'){
        $("#ohnoes").remove();
        window.document.cookie="test=sahara";
    }
}
/*
$(document).ready(function(){
  var guts = "furure login here";
  //$("#secure").innerHTML = guts;
  $("#secure").innerHTML = "hi";
});
*/
