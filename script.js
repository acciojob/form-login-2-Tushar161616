//your JS code here. If required.
// 
document.getElementById("myForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Get the input values
        var firstName = document.getElementById("firstName").value;
        var lastName = document.getElementById("lastName").value;
        var phoneNumber = document.getElementById("phoneNumber").value;
        var email = document.getElementById("email").value;

        // Create an alert with the input values
        alert("First Name: " + firstName + "\n" +
              "Last Name: " + lastName + "\n" +
              "Phone Number: " + phoneNumber + "\n" +
              "Email ID: " + email);
    });



