document.getElementById('bmiForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  var weight = document.getElementById('weightInput').value;
  var height = document.getElementById('heightInput').value;

  var bmi = weight / (height * height);
  var result = document.getElementById('result');

  if (bmi < 18) {
    result.innerHTML = '<div class="result underweight">Your BMI is ' + bmi.toFixed(2) + ' - Underweight</div>';
  } else if(bmi<=24.9 && bmi>18.5){
    result.innerHTML = '<div class="result underweight">Your BMI is ' + bmi.toFixed(2) + ' - Normal weight</div>';
  }else if(bmi<=29.9 && bmi>=25){
    result.innerHTML = '<div class="result underweight">Your BMI is ' + bmi.toFixed(2) + ' -Overweight</div>';
  }
  else {
    result.innerHTML = '<div class="result">Your BMI is ' + bmi.toFixed(2) + '- Obesity </div>';
  }
});
