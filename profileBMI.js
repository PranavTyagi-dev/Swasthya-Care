let btn = document.getElementById("BMI");
btn.addEventListener("click", BMIcalculate);

function BMIcalculate() {
    let height = document.getElementById("Height").value;
    let weight = document.getElementById("Weight").value;
    let ans = document.getElementById("BMIans");
    if (height === "" || weight === "") {
        ans.textContent = "Please enter height and weight.";
        return;
    }
    height = Number(height);
    weight = Number(weight);
    let bmi = weight / (height * height);
    ans.textContent = "Your BMI: " + bmi.toFixed(2);
}