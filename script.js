const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "selskab" && password === "selskab") {
        window.open("https://selskab.herokuapp.com");
    }
    else if (username === "test" && password === "test") {
        window.open("test.html");
    }
    //else if (username === "enkeltmand" && password === "enkeltmand") {
    //    window.open("https://enkeltmand.herokuapp.com");
    //}
        else {
        loginErrorMsg.style.opacity = 1;
    }
})
