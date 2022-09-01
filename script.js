
function calculatedWater() {
  event.preventDefault();
let weight = document.getElementById('weight').value;
let age = document.getElementById('age').value;
  if (age < 30) {
    myResult = Math.round((weight / 2.2 * 40) / 28.3);
  } else if (age >= 30 && age < 55) {
    myResult = Math.round((weight / 2.2 * 35) / 28.3) ;
  } else {
    myResult =  Math.round((weight / 2.2 * 30) / 28.3) ;
  }
document.getElementById('result').innerHTML = `Based on your Weight and Age the recommended water intake is ${myResult} Ounces equivalent to ${myResult/8} glasses Per Day.`;
};

document.getElementById('submit').addEventListener('click', calculatedWater);
  






