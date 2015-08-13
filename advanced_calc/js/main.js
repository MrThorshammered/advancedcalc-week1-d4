console.log("hello, mike");



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



