// Array to store students
let students = [];

// Form
let form = document.getElementById("studentForm");

// Output section
let output = document.getElementById("output");




// Form Submit Event
form.addEventListener("submit", registerStudent);


function registerStudent(event) {

    // Stop page refresh
    event.preventDefault();


    // Input Values
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let phone = document.getElementById("phone").value;
    let course = document.getElementById("course").value;
    let hobby = document.getElementById("hobby").value;
    let message = document.getElementById("message").value;


    // Gender
    let gender = "";

    if (document.getElementsByName("gender")[0].checked) {
        gender = "Male";
    }

    else if (document.getElementsByName("gender")[1].checked) {
        gender = "Female";
    }


    // Error Elements
    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let passwordError = document.getElementById("passwordError");
    let confirmError = document.getElementById("confirmError");
    let phoneError = document.getElementById("phoneError");
    let genderError = document.getElementById("genderError");
    let courseError = document.getElementById("courseError");
    let hobbyError = document.getElementById("hobbyError");
    let messageError = document.getElementById("messageError");


    // Clear Old Errors
    nameError.innerText = "";
    emailError.innerText = "";
    passwordError.innerText = "";
    confirmError.innerText = "";
    phoneError.innerText = "";
    genderError.innerText = "";
    courseError.innerText = "";
    hobbyError.innerText = "";
    messageError.innerText = "";


    // Validation Checker
    let isValid = true;


    // Name Validation
    if (name === "") {

        nameError.innerText = "Please enter your name";
        isValid = false;

    }


    // Email Validation
    if (email === "") {

        emailError.innerText = "Please enter your email";
        isValid = false;

    }


    // Password Validation
    if (password.length < 6) {

        passwordError.innerText = "Password must contain 6 characters";
        isValid = false;

    }


    // Confirm Password Validation
    if (password !== confirmPassword) {

        confirmError.innerText = "Passwords do not match";
        isValid = false;

    }


    // Phone Validation
    if (phone.length < 11) {

        phoneError.innerText = "Enter valid phone number";
        isValid = false;

    }


    // Gender Validation
    if (gender === "") {

        genderError.innerText = "Please select gender";
        isValid = false;

    }


    // Course Validation
    if (course === "") {

        courseError.innerText = "Please select course";
        isValid = false;

    }


    // Hobby Validation
    if (hobby === "") {

        hobbyError.innerText = "Please select hobby";
        isValid = false;

    }


    // Message Validation
    if (message === "") {

        messageError.innerText = "Please write something";
        isValid = false;

    }


    // Stop Submission
    if (isValid === false) {

        alert("Form submission failed!");

        return;

    }


    // Student Object
    let student = {

        fullName: name,
        userEmail: email,
        userPhone: phone,
        userGender: gender,
        userCourse: course,
        userHobby: hobby,
        userMessage: message

    };


    // Add Student into Array
    students.push(student);

    // Submission message
    let messageBox = document.getElementById("submitMessage");
    messageBox.innerText = "";
    messageBox.innerText = "Form Submitted Successfully!";
    messageBox.style.color = "green";


    // Success Alert
    alert("Registration Successful!");



    // Display Students
    showStudents();


    // Reset Form
    form.reset();

}



// Function to Display Students
function showStudents() {

    output.innerHTML = "";


    // Loop
    for (let i = 0; i < students.length; i++) {

        output.innerHTML +=

            "<div class='student-card'>" +

            // "<h3>" + students[i].fullName + "</h3>" +

            "<p><b>Student Name:</b> " + students[i].fullName + "</p>" +

            "<p><b>Email:</b> " + students[i].userEmail + "</p>" +

            "<p><b>Phone:</b> " + students[i].userPhone + "</p>" +

            "<p><b>Gender:</b> " + students[i].userGender + "</p>" +

            "<p><b>Course:</b> " + students[i].userCourse + "</p>" +

            "<p><b>Hobby:</b> " + students[i].userHobby + "</p>" +

            "<p><b>Message:</b> " + students[i].userMessage + "</p>" +

            "</div>";

    }

}