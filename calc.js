function bmi(weight, height) {
    var bmiCalc = weight / height / height ;
        if (bmiCalc <= 18.5) {
        return "Underweight"  + ", BMI: " + bmiCalc;;
    } else if (bmiCalc <= 25.0) {
        return "Normal"  + ", BMI: " + bmiCalc;;
    } else if (bmiCalc <= 30.0) {
        return "Overweight"  + ", BMI: " + bmiCalc;;
    } else if (bmiCalc > 30) {
        return "Obese"  + ", BMI: " + bmiCalc;;
    }
    //return "Weight: " + weight + ", Height: " +  height + ", BMI: " + bmiCalc;
  }

//   console.log(bmi(60, 1.80)); //  16.66 underweight
//   console.log(bmi(80, 1.80)); //  22.2 normal
//   console.log(bmi(90, 1.80)); //  25 normal
console.log(bmi(107, 1.80)); //  25 normal
console.log(bmi(108, 1.80)); //  30 Overweight
console.log(bmi(109, 1.80)); //  30 Overweight
  //console.log(bmi(100, 1.80)); // 27 overweight
  //console.log(bmi(120, 1.80)); // 33.3 Obese