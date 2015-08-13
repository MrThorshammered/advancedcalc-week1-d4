// basic calculator

var button1 = document.getElementById('basic-calc');

button1.addEventListener('click', function () {

	var num1 = parseFloat(document.getElementById("basic-num-1").value);

  console.log(num1)

  var num2 = parseFloat(document.getElementById("basic-num-2").value);
  console.log(num2)

  var op = document.getElementById("basic-operation").value;
  console.log(op)

      switch(op){
      case "+":
       var answer = num1 + num2;
       console.log(answer)
       break;
      case "-":
       var answer = num1 - num2;
        break;
      case "/":
       var answer = num1 / num2;
        break;
      case "*":
       var answer = num1 * num2;
        break;
    };
  var basicAnswer = document.getElementById("basic-answer")

  		basicAnswer.className = "show"
  	
       document.getElementById("basic-answer-alert").innerHTML = answer;
  });

// trip calculator

var button2 = document.getElementById('trip-calc');

button2.addEventListener('click', function () {

  var speed = parseFloat(document.getElementById("trip-speed").value);

  console.log(speed)

  var mpg = parseFloat(document.getElementById("trip-mpg").value);
  console.log(mpg)

  var dist = parseFloat(document.getElementById("trip-distance").value);

  console.log(dist)

  var cost = parseFloat(document.getElementById("trip-cost").value);

  console.log(cost)

      var time = dist / speed;
      time = Math.round(time * 100) / 100;

      var actualMPG = (mpg > 60) ? Math.max(0, mpg - (speed - 60) * 2) : mpg;

      var cost = (dist / actualMPG * cost);
      cost = Math.round(cost * 100) / 100;

      var answer = "Your trip will take " + time + " hours and cost $" + cost
      
  var tripAnswer = document.getElementById("trip-answer")

  tripAnswer.className = "show"
    
  document.getElementById("trip-answer-alert").innerHTML = answer;
  });

// BMI calculator


var button3 = document.getElementById('bmi-calc');

button3.addEventListener('click', function () {

  var mass = parseFloat(document.getElementById("bmi-mass").value);

  console.log(mass)

  var height = parseFloat(document.getElementById("bmi-height").value);
  console.log(height)

  var units = document.getElementById("bmi-units").value;
  console.log(units)

   var bmi = mass / Math.pow(height, 2);
      bmi = Math.round(bmi * 100) / 100; 
    
  var bmiAnswer = document.getElementById("bmi-answer")

    answer = bmi

      bmiAnswer.className = "show"
    
       document.getElementById("bmi-answer-alert").innerHTML = " your BMI is " + answer;
  });

// mortgage calculator

var button4 = document.getElementById('mortgage-calc');

button4.addEventListener('click', function () {

  var loan = parseFloat(document.getElementById("mortgage-loan").value);

  console.log(loan)

  var apr = parseFloat(document.getElementById("mortgage-apr").value)/100/12;
  console.log(apr)

  var term = document.getElementById("mortgage-term").value;
  console.log(term)

  var temp = Math.pow((1 + apr), term);
      var payment = loan * apr * temp / (temp - 1);
      payment = Math.round(payment * 100) / 100;
    
  var mortgageAnswer = document.getElementById("mortgage-answer")

    answer = payment

      mortgageAnswer.className = "show"
    
       document.getElementById("mortgage-answer-alert").innerHTML = "your monthly repayments will be " + answer;
  });








