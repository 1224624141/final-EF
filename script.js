"use strict";
//CONTEST
function contest() {
    //get html slots
    let randNumDisplay = document.getElementById("random");
    let userNum = document.getElementById("num").value;
    let msg = document.getElementById("matchMessage");

    //make num variables
    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    let randNum = getRandomNumber(1, 10);
    //let userNum = userInput.value;

    //display the number
    randNumDisplay.innerHTML = randNum;

    //see if the numbers match
    if (randNum == userNum) {
        msg.innerHTML = "You Win!";
    } else {
        msg.innerHTML = "Sorry, You Lose.";
    }
}

//LIGHT/DARK MODE
function darkMode(e) {
    if (e.target.checked) {
        document.querySelector(".light").classList.add("dark");
    }
    else {
        document.querySelector(".light").classList.remove("dark");
    }
}

// PRODUCT DISPLAY
function display1() {
    document.querySelector("#lily").classList.remove("hideSection");
    document.querySelector("#tim").classList.add("hideSection");
    document.querySelector("#beth").classList.add("hideSection");
    document.querySelector("#lucas").classList.add("hideSection");
    document.querySelector("#joey").classList.add("hideSection");
    document.querySelector("#sean").classList.add("hideSection");
}
function display2() {
    document.querySelector("#lily").classList.add("hideSection");
    document.querySelector("#tim").classList.remove("hideSection");
    document.querySelector("#beth").classList.add("hideSection");
    document.querySelector("#lucas").classList.add("hideSection");
    document.querySelector("#joey").classList.add("hideSection");
    document.querySelector("#sean").classList.add("hideSection");
}
function display3() {
    document.querySelector("#lily").classList.add("hideSection");
    document.querySelector("#tim").classList.add("hideSection");
    document.querySelector("#beth").classList.remove("hideSection");
    document.querySelector("#lucas").classList.add("hideSection");
    document.querySelector("#joey").classList.add("hideSection");
    document.querySelector("#sean").classList.add("hideSection");
}
function display4() {
    document.querySelector("#lily").classList.add("hideSection");
    document.querySelector("#tim").classList.add("hideSection");
    document.querySelector("#beth").classList.add("hideSection");
    document.querySelector("#lucas").classList.remove("hideSection");
    document.querySelector("#joey").classList.add("hideSection");
    document.querySelector("#sean").classList.add("hideSection");
}
function display5() {
    document.querySelector("#lily").classList.add("hideSection");
    document.querySelector("#tim").classList.add("hideSection");
    document.querySelector("#beth").classList.add("hideSection");
    document.querySelector("#lucas").classList.add("hideSection");
    document.querySelector("#joey").classList.remove("hideSection");
    document.querySelector("#sean").classList.add("hideSection");
}
function display6() {
    document.querySelector("#lily").classList.add("hideSection");
    document.querySelector("#tim").classList.add("hideSection");
    document.querySelector("#beth").classList.add("hideSection");
    document.querySelector("#lucas").classList.add("hideSection");
    document.querySelector("#joey").classList.add("hideSection");
    document.querySelector("#sean").classList.remove("hideSection");
}

//FORM VALIDATING
function validateForm(e) {
    // prevent default form submission
    e.preventDefault();

    // make variables
    let form = document.querySelector("#validate");
    let errorSpans = document.querySelectorAll("#validate .errorMsg");
    let isValid = true;

    // reset form errors before validating
    form.fullName.classList.remove("errorStyle");
    form.emailAddress.classList.remove("errorStyle");
    form.phoneNum.classList.remove("errorStyle");
    form.comments.classList.remove("errorStyle");
    errorSpans.forEach(function (span) {
        span.classList.remove("error");
    });

    // regex
    let nameRegex = /([A-Za-z])[ ]([A-Za-z])/;
    let emailRegex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
    let phoneRegex = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;

    // check name
    if (form.fullName.value === "" || !nameRegex.test(form.fullName.value)) {
        form.fullName.classList.add("errorStyle");
        errorSpans[0].classList.add("error");
        isValid = false;
    }
    // check email
    if (form.emailP.checked) {
        if (form.emailAddress.value === "" || !emailRegex.test(form.emailAddress.value)) {
            form.emailAddress.classList.add("errorStyle");
            errorSpans[1].classList.add("error");
            isValid = false;
        }
    }
    // check phone
    if (form.phoneP.checked) {
        if (form.phoneNum.value === "" || !phoneRegex.test(form.phoneNum.value)) {
            form.phoneNum.classList.add("errorStyle");
            errorSpans[2].classList.add("error");
            isValid = false;
        }
    }
    // check preferred contact
    if (!form.emailP.checked && !form.phoneP.checked) {
        errorSpans[3].classList.add("error");
        isValid = false;
    }
    // check comments
    if (form.comments.value === "") {
        form.comments.classList.add("errorStyle");
        errorSpans[4].classList.add("error");
        isValid = false;
    }

    // if the form is valid, submit it and reset
	if (isValid) {
		//display the 'success' section to the user
		document.querySelector("#valid").classList.remove("hide");
		document.querySelector("#valid").classList.add("show");

		// display the user's input data (to show what they are sending to the server)
		document.getElementById(
			"formResponses"
		).innerHTML = `<strong>Full Name: </strong>${form.name.value}<br><strong>Email: </strong>${form.email.value}<br><strong>Phone: </strong>${form.phone.value}<br><strong>Comments: </strong>${form.comments.value}`;

    form.reset();

}
}

// EVENT LISTENERS
//contest
document.getElementById("play").addEventListener("click", contest);
//dark mode
document.querySelector('.changer input[type="checkbox"]').addEventListener("change", darkMode, false);
//product display
document.querySelector(".pick1").addEventListener("click", display1);
document.querySelector(".pick2").addEventListener("click", display2);
document.querySelector(".pick3").addEventListener("click", display3);
document.querySelector(".pick4").addEventListener("click", display4);
document.querySelector(".pick5").addEventListener("click", display5);
document.querySelector(".pick6").addEventListener("click", display6);
//form
document.getElementById("validate").addEventListener("submit", validateForm);