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
