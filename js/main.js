//JS File
(function() {
	console.log("JS file loaded");
	
	//Vars
	var num1 = document.querySelector("#input1");
	var num2 = document.querySelector("#input2");
	var equals = document.querySelector("#trigger");
	var outcome = document.querySelector("#value");
	var selPlus = document.querySelector("#plus");
	var selMinus = document.querySelector("#minus");
	//console.log(num1);
	//console.log(num2);
	//console.log(equals);
	//console.log(outcome);
	
	//Functions
	function addStuff() {
		//console.log("from addStuff");
		//console.log(num1.value);
		//console.log(num2.value);
		var total = parseInt(num1.value) + parseFloat(num2.value);
		//console.log(total);
		outcome.innerHTML = total;
	}
	
	
	
	
	//Listeners
	equals.addEventListener("click", addStuff, false);
	
	
	
	
	
	
	
	
})();








