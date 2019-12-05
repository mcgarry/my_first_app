function calculateBmi() {
	//var weight = document.bmiForm.weight.value;
	let weight = $('#weight').val();
	
	//var height = document.bmiForm.height.value;
	let height = $('#height').val();
	
	if(weight > 0 && height > 0){	
		let finalBmi = weight/(height/100*height/100)
		
		//document.bmiForm.bmi.value = finalBmi;
		$('#bmi').val(finalBmi);
		
		switch(true){
			case(finalBmi<18.5):
				$('#meaning').html("That you are too thin.");
				break;
			case(finalBmi > 18.5 && finalBmi < 25):
				$('#meaning').html("That you are healthy.");
				break;
			default:
				$('#meaning').html("Sean is a fat bastard.");
		}
		
	}else{
		$('#meaning').html("Please enter values for height and weight.");
	}
}