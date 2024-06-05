function calculateCalories() {
  var age = parseInt(document.getElementById("age").value);
  var gender = document.getElementById("gender").value;
  var weight = parseInt(document.getElementById("weight").value);
  var height = parseInt(document.getElementById("height").value);
  var activity = document.getElementById("activity").value;

  // Calculate Basal Metabolic Rate (BMR)
  var bmr;
  if (gender === "male") {
      bmr = 10 * weight + 6.25 * height - 5 * age + 5;
  } else {
      bmr = 10 * weight + 6.25 * height - 5 * age - 161;
  }

  // Adjust BMR based on activity level
  var activityMultiplier;
  switch (activity) {
      case "sedentary":
          activityMultiplier = 1.2;
          break;
      case "lightlyActive":
          activityMultiplier = 1.375;
          break;
      case "moderatelyActive":
          activityMultiplier = 1.55;
          break;
      case "veryActive":
          activityMultiplier = 1.725;
          break;
      case "superActive":
          activityMultiplier = 1.9;
          break;
      default:
          activityMultiplier = 1;
  }

  var calories = Math.round(bmr * activityMultiplier);

  document.getElementById("result").innerHTML = "Your daily caloric needs: " + calories + " calories";
}