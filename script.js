document.getElementById("contactForm").addEventListener("submit", function(event) {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let country = document.getElementById("country").value;
    let phoneNumber = document.getElementById("phone_number").value.trim();
    let comment = document.getElementById("message").value.trim();

    if (name.length < 3) {
        alert("Name must be at least 3 characters long.");
        event.preventDefault();
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        alert("Please enter a valid email address.");
        event.preventDefault();
        return;
    }

    if (country === "") {
        alert("Please select your country.");
        event.preventDefault();
        return;
    }

    if (!phoneNumber.startsWith("+254") || phoneNumber.length < 10) {
        alert("Phone number must start with +254 and be at least 10 digits long.");
        event.preventDefault();
        return;
    }

    if (comment.length < 10) {
        alert("Comment must be at least 10 characters long.");
        event.preventDefault();
        return;
    }

    alert("Form submitted successfully!");
});