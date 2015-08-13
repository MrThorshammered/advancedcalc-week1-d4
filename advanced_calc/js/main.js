console.log("hello, mike");



var button1 = document.getElementById('basic-calc');

button1.addEventListener('click', function answer () {

	var num1 = parseFloat(document.getElementById("basic-num-1").value);

    var num2 = parseFloat(document.getElementById("basic-num-2").value);

    var op = document.getElementById("basic-operation");

      switch(op){
      case "plus":
       var answer = num1 + num2;
        break;
      case "minus":
       var answer = num1 - num2;
        break;
      case "divided by":
       var answer = num1 / num2;
        break;
      case "multiplied by":
       var answer = num1 * num2;
        break;
    };
  var basicAnswer = document.getElementById("basic-answer")

     if (answer === true) {

      basicAnswer.className = "show"
  }else {
      basicAnswer.className = "hide"
  }
  }

}


