document.addEventListener("DOMContentLoaded", function () {		<!-strona zostaje załadowana->
  const loginForm = document.getElementById("login-form");		<!-dane o nazwie 'login-form' z formularza zostają pobrane->
  const loginButton = document.getElementById("login-form-submit");		<!-przcisk 'login-form-submit' z formularza zostają pobrane->
  const loginErrorMsg = document.getElementById("login-error-msg");		<!-pobierany jest element wyświetlający informacje o błędnym logowaniu->
 
  if (loginForm && loginButton && loginErrorMsg) {		<!-
    loginButton.addEventListener("click", function (e) {
      e.preventDefault();
      const username = loginForm.querySelector("#username-field").value;		<!-pobiera wartość wprowadzoną przez użytkownika->
      const password = loginForm.querySelector("#password-field").value;
 
      if (username === "admin" && password === "admin") {		<!-sprawdza czy hasło i login są zgodne i jeśli tak to wyświetla informacje o udanym logowaniu->
        alert("You have successfully logged in.");
        location.reload();
      } else {			<!-jeśli logowanie się nie powiodło to wyświetla się komunikat o błędnym logowaniu->
        loginErrorMsg.style.opacity = 1;
      }
    });
  }
});