console.log("hello, mike");



var button1 = document.getElementById('basic-calc');

button1.addEventListener('click', function answer () {

	var num1 = document.getElementById("basic-num-1").value;

    var num2 = document.getElementById("basic-num-2").value;

    var op = document.getElementById("basic-operation");
      switch(op){
      case "plus":
        answer = num1 + num2;
        break;
      case "minus":
        answer = num1 - num2;
        break;
      case "divided by":
        answer = num1 / num2;
        break;
      case "multiplied by":
        answer = num1 * num2;
        break;
    };
}


