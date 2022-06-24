async function signupFormHandler(event) {
  event.preventDefault();

  const email = document.querySelector("#email-signup").value;
  const username = document.querySelector("#username-signup").value;
  const password = document.querySelector("#password-signup").value;
  const passwordConfirm = document.getElementById('password-confirm');
  var message = document.getElementById('error-nwl');

  if (passwordConfirm.value !== password) {
    message.innerHTML = 'Passwords Does Not Match Each Other!';
  } else if (password.length < 8) {
    message.innerHTML = 'Please Enter a Password More Than 8 Characters Long!';
  } else {

    if (email && username && password) {
      const response = await fetch("/api/users/", {
        method: "post",
        body: JSON.stringify({
          email,
          username,
          password,
        }),
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        document.location.replace("/");
      } else {
        console.log(response.statusText);
      }
    }
  }

}


document.getElementById("submit-signup").addEventListener('click', signupFormHandler);