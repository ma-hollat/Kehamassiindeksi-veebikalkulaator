document.querySelector(".calculate").addEventListener("click", BMIValueCalcutation);
document.querySelector(".clear").addEventListener("click", ClearAll);

function BMIValueCalcutation(){
    const height = document.querySelector("#height").value;
    const weight = document.querySelector("#weight").value;
    const age = document.querySelector("#age").value;
    const bmivalue = weight  / (height/100 * height/100);

    if(age < 20 || age > 60){
        confirm('Age must be in between 20-60')
    } else {
        if(bmivalue < 18.5){
            document.getElementById("Value").innerHTML ="BMI Value: " + bmivalue +" : Underweight";
        }else if(bmivalue > 18.5 && bmivalue < 24.9){
            document.getElementById("Value").innerHTML ="BMI Value: " + bmivalue +" : Normal weight";
        }else if(bmivalue > 25.0 && bmivalue < 29.9){
            document.getElementById("Value").innerHTML ="BMI Value: " + bmivalue +" : Overweight";
        }else if(bmivalue > 30.0){
            document.getElementById("Value").innerHTML ="BMI Value: " + bmivalue +" : Obesity";
        }; 
    };

    event.preventDefault();
}

function ClearAll(){
    height.removeChild(height.firstChild);
    weight.removeChild(weight.firstChild);
    age.removeChild(age.firstChild);

    event.preventDefault();
}