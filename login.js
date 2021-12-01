function Login() {
  debugger;
  let password = document.getElementById("password").value;
  let email = document.getElementById("email").value;
  let userPass = localStorage.getItem(email);
  if (userPass === null) {
    alert("user is not exist");
    return;
  }
  if (password != userPass) {
    alert("password is incorrect");
    return;
  }
  alert("login successfully");
}
