// const username = document.getElementById("username");
// const email = document.getElementById("email");
// const password  = document.getElementById("password");

// this  is  a code repeatation

// so we try to dry code

let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

let username = id("username"),
    email = id("email"),
    number = id("number"),
    message= id("message"),
    form = id("form"),
    errorMsg = classes("error"),
    successIcon = classes("success-icon"),
    failureIcon = classes("failure-icon");

form.addEventListener("submit", (e)=>{ // for prevent flickring
    // e.preventDefault(); // for prevent flickring error while click on submit button

// To short this if else 

    // if (username.value ==="") {
    //     errorMsg[0].innerHTML = "username cannot be blank"
    //     failureIcon[0].style.opacity = "1"
    //     successIcon[0].style.opacity = "0"

    // }else{
    //     errorMsg[0].innerHTML = "" // to prevent error while filled details of username
    //     successIcon[0].style.opacity = "1"
    //     failureIcon[0].style.opacity = "0"
    // }


    // if (email.value ==="") {
    //     errorMsg[1].innerHTML = "Email cannot be blank"
    //     failureIcon[1].style.opacity = "1"
    //     successIcon[1].style.opacity = "0"

    // }else{
    //     errorMsg[1].innerHTML = "" // to prevent error while filled details of username
    //     successIcon[1].style.opacity = "1"
    //     failureIcon[1].style.opacity = "0"
    // }


    // if (password.value ==="") {
    //     errorMsg[2].innerHTML = "password cannot be blank"
    //     failureIcon[2].style.opacity = "1"
    //     successIcon[2].style.opacity = "0"

    // }else{
    //     errorMsg[2].innerHTML = "" // to prevent error while filled details of username
    //     successIcon[2].style.opacity = "1"
    //     failureIcon[2].style.opacity = "0"
    // }

    engine(username, 0, "username cannot be blank");
    engine(email, 1, "email cannot be blank");
    engine(number, 2, "Number cannot be blank");
    engine(message, 3, "message cannot be blank")
});


let engine = (id,serial, message) =>{
    if (id.value.trim() === "") {
        errorMsg[serial].innerHTML = message;
        failureIcon[serial].style.opacity = "1";
        successIcon[serial].style.opacity = "0";

    }else{
        errorMsg[serial].innerHTML = " "; // to prevent error while filled details of username
        successIcon[serial].style.opacity = "1";
        failureIcon[serial].style.opacity = "0";
    }
}