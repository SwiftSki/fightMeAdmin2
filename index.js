var jq = document.createElement('script');
jq.src='https://code.jquery.com/jquery-3.4.1.js';
document.head.appendChild(jq);

var guts = "";

var blocker = document.createElement('div');
blocker.style.top = '0px';
blocker.style.left = '0px';
blocker.style.position = 'fixed';
blocker.style.width = '100%';
blocker.style.height = '100%';
blocker.style.background = 'blue';
blocker.innerHTML = guts;
document.body.appendChild(blocker);
