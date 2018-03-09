console.log("JS App has been loaded");

//Set element pointers
const tooltip = document.createElement('div');
tooltip.setAttribute("class", "tooltip");
tooltip.style.opacity = 0;
tooltip.innerHTML = "<p>Email address copied to clipboard</p>";

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

    //Append tooltip element to main div and fade tooltip in and out
    document.querySelector('.float').appendChild(tooltip);
    setTimeout(function() {
      tooltip.style.opacity = 1;
    }, 5);
    setTimeout(function (){
    	tooltip.style.opacity = 0;
      setTimeout(function (){
        tooltip.remove();
      }, 500);
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