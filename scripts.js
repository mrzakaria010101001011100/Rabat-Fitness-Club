// scripts.js

// Function to show an alert when Join Now button is clicked
function showAlert() {
    alert("Thank you for your interest! Contact us to join Rabat Fitness Club.");
}

// Function to show details based on class type
function showDetails(classType) {
    switch (classType) {
        case 'Yoga':
            alert("Yoga Class Details:\nRelax and stretch your body with our yoga classes.");
            break;
        case 'Cardio':
            alert("Cardio Class Details:\nBoost your energy and endurance with our cardio workouts.");
            break;
        case 'Weightlifting':
            alert("Weightlifting Class Details:\nBuild strength and muscle with our weightlifting sessions.");
            break;
        default:
            break;
    }
}
