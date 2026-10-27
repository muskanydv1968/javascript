let email = document.querySelector("#email");
let password = document.querySelector("#password");
let form = document.querySelector("form");

form.addEventListener("submit", function (dets) {
    dets.preventDefault();

    // Clear previous error messages
    document.querySelector("#emailError").textContent = "";
    document.querySelector("#passwordError").textContent = "";
    document.querySelector("#resultMessage").textContent = "";

    // Hide previous error messages
    document.querySelector("#emailError").style.display = "none";
    document.querySelector("#passwordError").style.display = "none";

    // Regular expressions
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!*?&%])[A-Za-z\d@$!*?&%]{8,}$/;

    // Validate email and password
    let emailans = emailRegex.test(email.value);
    let passwordans = passwordRegex.test(password.value);

    // Assume the form is valid initially
    let isValid = true;

    // Email validation
    if (!emailans) {
        document.querySelector("#emailError").textContent =
            "Please enter a valid email address.";

        document.querySelector("#emailError").style.display = "block";

        isValid = false;
    }

    // Password validation
    if (!passwordans) {
        document.querySelector("#passwordError").textContent =
            "Password must contain 8 characters, uppercase, lowercase, number and special character.";

        document.querySelector("#passwordError").style.display = "block";

        isValid = false;
    }

    // Final result
    if (isValid) {
        document.querySelector("#resultMessage").textContent =
            "Everything is valid!";

        document.querySelector("#resultMessage").style.color = "lightgreen";
    }
});