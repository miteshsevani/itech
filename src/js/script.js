$(document).ready(function(){
  let calcValue = '';

  $(".button").on('click', function(e){
    var buttonPressed = $(this).text();
    if(buttonPressed === 'AC') {
      reset();
      calcValue = '';
    } else if (!isNaN(buttonPressed)) {
      calcValue += $(this).text();
      calculation(calcValue);
    } else if (buttonPressed === '÷' || buttonPressed === 'X' || buttonPressed === '+' || buttonPressed === '-') {
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
  if(total.indexOf('X') != -1){
    total = (total.replace(/\X/g, '*') );
  } else if (total.indexOf('÷') != -1) {
    total = (total.replace(/\÷/g, '/') );
  }
  $("#answer").text(eval(total));
}