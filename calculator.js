document.addEventListener('DOMContentLoaded', function() {
    const resultField = document.getElementById('result');
    
    var expression = '0';

    // Read variables
    window.press = function(value){

        if (expression === '0' || expression === 'Error'){
            expression = value;
        }else if(value != null){
            expression += value;
        }
        updateDisplay();
    }

    // Update the Display
    function updateDisplay(){
        resultField.value = expression;
    }

    // Calculate the operation
    window.calculate = function(){
        
    }

    // Clear the Display
    window.clearDisplay = function(){
        expression = '0';
        updateDisplay();
    }

    // Delete one char
    window.deleteChar = function(){
        expression = expression.slice(0,-1);

        if (expression === ''){
            expression = '0';
        }

        updateDisplay();
    }
    
    window.calculate = function(){
        try{
            expression = eval(expression).toString();
        } catch(error){
            expression = 'Error';
        }

        updateDisplay();
    }
});
