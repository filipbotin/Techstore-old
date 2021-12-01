function RegisterNewUser() {
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirmPassword").value;
  let email = document.getElementById("email").value;
  if (password != confirmPassword) {
    alert("Password and confirm password are not equal");
  } else if (email.trim() == "") {
    alert("you should enter an email");
  } else {
    localStorage.setItem(email, password);
    alert("register successfully");
  }
}
