$(document).ready(function(){
  let calcValue = '';

  $(".button").on('click', function(e){
    var buttonPressed = $(this).text();
    if(buttonPressed === 'AC') {
      reset();
      calcValue = '';
    } else if (!isNaN(buttonPressed) || buttonPressed === '.') {
      calcValue += $(this).text();
      calculation(calcValue);
    } else if (buttonPressed === '÷' || buttonPressed === 'x' || buttonPressed === '+' || buttonPressed === '-') {
      calcValue += $(this).text();
      calculation(calcValue);      
      operator = buttonPressed;      
    } else if (buttonPressed === '=') {
      getTotal(calcValue);
      calcValue += $(this).text();
      calculation(calcValue);      
    }
  });
});

function calculation(value) {
  $("#calculation").text(value);  
}

function reset() {
  $("#calculation").text('0');  
  $("#answer").text('0');
}

function getTotal(total) {  
  if(total.indexOf('x') != -1){
    total = (total.replace(/\x/g, '*') );
  } else if (total.indexOf('÷') != -1) {
    total = (total.replace(/\÷/g, '/') );
  }
  $("#answer").text(eval(total));
  $("#post-answer").val(eval(total));
}


function getBrowser() {
  let nAgt = navigator.userAgent;
  let browserName  = navigator.appName;
  let verOffset;
  
  if ((verOffset=nAgt.indexOf("Opera"))!=-1) {
    browserName = "Opera";   
  } else if ((verOffset=nAgt.indexOf("MSIE"))!=-1) {
    browserName = "Microsoft Internet Explorer";   
  } else if ((verOffset=nAgt.indexOf("Chrome"))!=-1) {
    browserName = "Chrome";
  } else if ((verOffset=nAgt.indexOf("Safari"))!=-1) {
    browserName = "Safari";
  } else if ((verOffset=nAgt.indexOf("Firefox"))!=-1) {
    browserName = "Firefox";
  } else {
    browserName = "Unknown";
  }
  $("#browser").val(browserName);
}

getBrowser();