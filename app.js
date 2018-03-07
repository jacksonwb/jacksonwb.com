console.log("JS App has been loaded");

//Set element pointers
const tooltip = document.getElementById("tooltip");
var copyEmailBtn = document.querySelector('.js-emailcopybtn');  

copyEmailBtn.addEventListener('click', function(event) {  
  // Select the email link anchor text  
  var emailLink = document.querySelector('.js-emailcopybtn');  
  var range = document.createRange();  
  range.selectNode(emailLink);  
  window.getSelection().addRange(range);

  try {  
    // Now that we've selected the anchor text, execute the copy command  
    var successful = document.execCommand('copy');  

    //fade tooltip in and out
    tooltip.style.opacity = 1;
    setTimeout(function (){
    	tooltip.style.opacity= 0;
	}, 3000);

    //report success or catch error
    var msg = successful ? 'successful' : 'unsuccessful';  
    console.log('Copy email command was ' + msg);  
  } catch(err) {  
    console.log('Oops, unable to copy');  
  }

  // Remove the selections - NOTE: Should use
  // removeRange(range) when it is supported  
  window.getSelection().removeAllRanges();  
});