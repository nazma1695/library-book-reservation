/* =========================================
   LIBRARY RESERVATION FORM JAVASCRIPT
========================================= */


/* Get the form */

const form = document.getElementById("reservationForm");


/* Get today's date */

const today = new Date().toISOString().split("T")[0];


/* Prevent selecting a previous date */

document.getElementById("date").setAttribute("min", today);


/* =========================================
   ERROR MESSAGE FUNCTION
========================================= */

function showError(fieldId, message) {

    const field = document.getElementById(fieldId);

    const error = document.getElementById(fieldId + "Error");

    field.classList.add("error");

    field.classList.remove("success");

    error.textContent = message;
}


/* =========================================
   SUCCESS FIELD FUNCTION
========================================= */

function showSuccess(fieldId) {

    const field = document.getElementById(fieldId);

    const error = document.getElementById(fieldId + "Error");

    field.classList.remove("error");

    field.classList.add("success");

    error.textContent = "";
}


/* =========================================
   CLEAR ERROR
========================================= */

function clearField(fieldId) {

    const field = document.getElementById(fieldId);

    const error = document.getElementById(fieldId + "Error");

    field.classList.remove("error");

    field.classList.remove("success");

    error.textContent = "";
}


/* =========================================
   FORM SUBMISSION
========================================= */

form.addEventListener("submit", function(event) {

    /* Prevent default form submission */

    event.preventDefault();


    /* Get form values */

    const fullName =
        document.getElementById("fullName").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const phone =
        document.getElementById("phone").value.trim();

    const password =
        document.getElementById("password").value;

    const confirmPassword =
        document.getElementById("confirmPassword").value;

    const book =
        document.getElementById("book").value;

    const quantity =
        document.getElementById("quantity").value;

    const date =
        document.getElementById("date").value;

    const message =
        document.getElementById("message").value.trim();

    const terms =
        document.getElementById("terms").checked;


    /* Get membership */

    const membershipElement =
        document.querySelector(
            'input[name="membership"]:checked'
        );

    const membership =
        membershipElement
            ? membershipElement.value
            : "";


    /* Track whether form is valid */

    let isValid = true;


    /* =========================================
       FULL NAME VALIDATION
    ========================================= */

    if (fullName === "") {

        showError(
            "fullName",
            "Full name is required."
        );

        isValid = false;

    } else if (fullName.length < 3) {

        showError(
            "fullName",
            "Name must contain at least 3 characters."
        );

        isValid = false;

    } else {

        showSuccess("fullName");

    }


    /* =========================================
       EMAIL VALIDATION
    ========================================= */

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (email === "") {

        showError(
            "email",
            "Email address is required."
        );

        isValid = false;

    } else if (!emailPattern.test(email)) {

        showError(
            "email",
            "Please enter a valid email address."
        );

        isValid = false;

    } else {

        showSuccess("email");

    }


    /* =========================================
       PHONE VALIDATION
    ========================================= */

    const phonePattern =
        /^01[3-9][0-9]{8}$/;


    if (phone === "") {

        showError(
            "phone",
            "Phone number is required."
        );

        isValid = false;

    } else if (!phonePattern.test(phone)) {

        showError(
            "phone",
            "Enter a valid Bangladeshi phone number."
        );

        isValid = false;

    } else {

        showSuccess("phone");

    }


    /* =========================================
       PASSWORD VALIDATION
    ========================================= */

    if (password === "") {

        showError(
            "password",
            "Password is required."
        );

        isValid = false;

    } else if (password.length < 8) {

        showError(
            "password",
            "Password must contain at least 8 characters."
        );

        isValid = false;

    } else {

        showSuccess("password");

    }


    /* =========================================
       CONFIRM PASSWORD VALIDATION
    ========================================= */

    if (confirmPassword === "") {

        showError(
            "confirmPassword",
            "Please confirm your password."
        );

        isValid = false;

    } else if (password !== confirmPassword) {

        showError(
            "confirmPassword",
            "Passwords do not match."
        );

        isValid = false;

    } else {

        showSuccess("confirmPassword");

    }


    /* =========================================
       BOOK VALIDATION
    ========================================= */

    if (book === "") {

        showError(
            "book",
            "Please select a book."
        );

        isValid = false;

    } else {

        showSuccess("book");

    }


    /* =========================================
       QUANTITY VALIDATION
    ========================================= */

    const quantityNumber =
        Number(quantity);


    if (
        quantity === "" ||
        quantityNumber < 1 ||
        quantityNumber > 3
    ) {

        showError(
            "quantity",
            "Quantity must be between 1 and 3."
        );

        isValid = false;

    } else {

        showSuccess("quantity");

    }


    /* =========================================
       DATE VALIDATION
    ========================================= */

    if (date === "") {

        showError(
            "date",
            "Reservation date is required."
        );

        isValid = false;

    } else if (date < today) {

        showError(
            "date",
            "Reservation date cannot be in the past."
        );

        isValid = false;

    } else {

        showSuccess("date");

    }


    /* =========================================
       MEMBERSHIP VALIDATION
    ========================================= */

    const membershipError =
        document.getElementById("membershipError");


    if (membership === "") {

        membershipError.textContent =
            "Please select a membership type.";

        isValid = false;

    } else {

        membershipError.textContent = "";

    }


    /* =========================================
       TERMS VALIDATION
    ========================================= */

    const termsError =
        document.getElementById("termsError");


    if (!terms) {

        termsError.textContent =
            "You must agree to the terms and conditions.";

        isValid = false;

    } else {

        termsError.textContent = "";

    }


    /* =========================================
       IF FORM IS VALID
    ========================================= */

    if (isValid) {


        /* Create reservation summary */

        const summary = `
            <div class="alert alert-success">
                <strong>Thank you, ${fullName}!</strong>
                Your book reservation has been submitted successfully.
            </div>

            <table class="table table-bordered">

                <tr>
                    <th>Name</th>
                    <td>${fullName}</td>
                </tr>

                <tr>
                    <th>Email</th>
                    <td>${email}</td>
                </tr>

                <tr>
                    <th>Phone</th>
                    <td>${phone}</td>
                </tr>

                <tr>
                    <th>Book</th>
                    <td>${book}</td>
                </tr>

                <tr>
                    <th>Copies</th>
                    <td>${quantity}</td>
                </tr>

                <tr>
                    <th>Reservation Date</th>
                    <td>${date}</td>
                </tr>

                <tr>
                    <th>Membership</th>
                    <td>${membership}</td>
                </tr>

                <tr>
                    <th>Additional Request</th>
                    <td>${message || "None"}</td>
                </tr>

            </table>
        `;


        /* Put summary inside modal */

        document.getElementById(
            "successSummary"
        ).innerHTML = summary;


        /* Show Bootstrap modal */

        const modal =
            new bootstrap.Modal(
                document.getElementById("successModal")
            );

        modal.show();


        /* Reset form after successful submission */

        form.reset();


        /* Clear validation styles */

        [
            "fullName",
            "email",
            "phone",
            "password",
            "confirmPassword",
            "book",
            "quantity",
            "date"
        ].forEach(function(field) {

            clearField(field);

        });


        document.getElementById(
            "membershipError"
        ).textContent = "";

        document.getElementById(
            "termsError"
        ).textContent = "";

    }

});


/* =========================================
   RESET BUTTON
========================================= */

document.getElementById("resetButton")
    .addEventListener("click", function() {


        /* Clear field validation */

        [
            "fullName",
            "email",
            "phone",
            "password",
            "confirmPassword",
            "book",
            "quantity",
            "date"
        ].forEach(function(field) {

            clearField(field);

        });


        /* Clear radio and checkbox errors */

        document.getElementById(
            "membershipError"
        ).textContent = "";


        document.getElementById(
            "termsError"
        ).textContent = "";

    });