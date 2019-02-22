//So horribly vanilla!
console.log("Loaded the JS y'all!");

//--- Onload Fade
window.onload = function (e) {
	const container = document.querySelector('.container');

	setTimeout(function () {
		container.style.visibility = "visible";
		container.style.opacity = 1;
}, 100);
};

//--- Email Copy
const tooltip = document.createElement('div');
tooltip.setAttribute("class", "tooltip");
tooltip.style.opacity = 0;
tooltip.innerHTML = "<p>Email address copied to clipboard</p>";
var copyEmailBtn = document.querySelector('.js-emailcopybtn');  
const links = document.querySelector('#links');

//--- Email Copy Handler
copyEmailBtn.addEventListener('click', function(event) {  
  var textArea = document.createElement("textarea");
  textArea.value = "jbeall@student.42.us.org";
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  try {  
    var successful = document.execCommand('copy');  

	document.querySelector('.float').insertBefore(tooltip, links);
	tooltip.style.color = darkFlag ? purple : 'yellow';
	console.log(darkFlag);
    setTimeout(function() {
      tooltip.style.opacity = 1;
    }, 5);
    setTimeout(function (){
    	tooltip.style.opacity = 0;
      setTimeout(function (){
        tooltip.remove();
      }, 500);
	  }, 3000);

    var msg = successful ? 'successful' : 'unsuccessful';  
    console.log('Copy email command was ' + msg);  
  } catch(err) {  
    console.log('Oops, unable to copy');  
  }
  document.body.removeChild(textArea);
});

//--- Set Text Color Helper
function textColor(color)
{
	const top = document.querySelector('.title');
	const bottom = document.querySelector('.list').children;
	top.style.color = color;
	for (let i = 0; i < bottom.length; i++) {
		bottom[i].style.color = color;
	}
}

//--- Dark Mode Toggle
const purple = '#7E44FF';
let darkFlag = 0;
const container = document.querySelector('.container')

//--- Preload sky
const sky = new Image();
sky.src = 'images/sky.jpg';

document.getElementById('toggle').addEventListener('click', function(e) {
	if (!darkFlag) {
		darkFlag = 1;
		document.body.style.background = 'black';
		container.style.opacity = 0;
		setTimeout(function () {
			document.getElementById('main-img').style.backgroundImage = "url('images/sky.jpg')";
			document.querySelector('#toggle').innerHTML = 'light!';
			document.querySelector('#toggle').style.color = 'yellow';
			textColor(purple);
			container.style.opacity = 1;
		}, 300);
} else {
		darkFlag = 0;
		document.body.style.background = 'white';
		container.style.opacity = 0;
		setTimeout(function () {
			document.getElementById('main-img').style.backgroundImage = "url('images/tree.jpg')";
			document.querySelector('#toggle').innerHTML = 'dark!';
			document.querySelector('#toggle').style.color = purple;
			textColor('yellow');
			container.style.opacity = 1;
		}, 300);
	}
});