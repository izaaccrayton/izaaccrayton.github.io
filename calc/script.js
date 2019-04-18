function squareNumber() {
    
    var num1 = document.getElementById('square-input').value;
    
    num1 = parseFloat(num1);
    
    var ans = Math.pow(num1, 2);
    
    alert('The result of squaring the number ' + num1 + ' is ' + ans);
    
}

function halfNumber() {
    
    var num1 = document.getElementById('half-input').value;
    
    num1 = parseFloat(num1, 10);
    
    var ans = num1 / 2;
    
    alert('Half of ' + num1 + ' is ' + ans);
   
}

function percentOf() {
    
    var num1 = document.getElementById('percent1-input').value;
    var num2 = document.getElementById('percent2-input').value;
    
    num1 = parseFloat(num1, 10);
    num2 = parseFloat(num2, 10);
    
    var ans = num1 / num2;
    
    ans = ans * 100;
    
    alert(num1 + ' is ' + ans + '% of ' + num2);
    
   
}

function areaOfCircle() {
    
    var num1 = document.getElementById('area-input').value;
    
    num1 = parseFloat(num1, 10);
    
    var ans = (Math.PI) * (Math.pow(num1, 2));
    
    alert('The area for a circle with radius ' + num1 + ' is ' + ans.toFixed(2));
}

