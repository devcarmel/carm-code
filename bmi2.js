<script>

function calculateBMI() {

    let w = Number(document.getElementById("weight").value);
    let h = Number(document.getElementById("height").value);

    let bmi = w / (h * h);

    let status = "";
    let image = "";

    // CONDITIONS

    if (bmi < 18.5) {

        status = "Underweight";

        // image for underweight person
        image = "underweight.jpg";

    } 
    
    else if (bmi >= 18.5 && bmi < 25) {

        status = "Normal weight";

        // image for normal person
        image = "normal.jpg";

    } 
    
    else if (bmi >= 25 && bmi < 30) {

        status = "Overweight";

        // image for overweight person
        image = "overweight.jpg";

    } 
    
    else {

        status = "Obese";

        // image for obese person
        image = "obese.jpg";
    }

    // SHOW RESULT
    document.getElementById("result").innerHTML =
        "Your BMI = " + bmi.toFixed(2) + "<br>" +
        "Status = " + status;

    // SHOW IMAGE
    document.getElementById("o").src = image;
}

</script>
