async function signupFormHandler(event) {
  event.preventDefault();

  const email = document.querySelector("#email-signup").value;
  const username = document.querySelector("#username-signup").value;
  const password = document.querySelector("#password-signup").value;


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
      document.location.replace("/dashboard");
    } else {
      alert(response.statusText);
    }
  }
}

document.getElementById("signup-submit").addEventListener('click', signupFormHandler);