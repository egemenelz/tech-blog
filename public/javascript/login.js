// async function loginFormHandler(event) {
//   event.preventDefault();

//   const email = document.querySelector("#email-input").value.trim();
//   const passwordInput = document
//     .querySelector("#password-input")
//     .value.trim();

//   if (email && passwordInput) {
//     const response = await fetch("/api/users/login", {
//       method: "post",
//       body: JSON.stringify({
//         email,
//         passwordInput,
//       }),
//       headers: { "Content-Type": "application/json" },
//     });

//     if (response.ok) {
//       document.location.replace("/dashboard");
//     } else {
//       alert(response.statusText);
//     }
//   }
// }

$(document).ready(() => {
  const loginForm = $("form.login");
  const emailInput = $("#email-input").val().trim();
  const passwordInput = $("#password-input").val().trim();

  loginForm.on("submit", (event) => {
    event.preventDefault();
    if (!emailInput || !passwordInput) {
      return;
    }

    $.post("/api/login", {
      username: emailInput,
      password: passwordInput,
    })
      .then(() => {
        window.location.replace("/dashboard");
      })
      .catch((err) => {
        console.log(err);
      });
  });
});

// async function signupFormHandler(event) {
//   event.preventDefault();

//   const username = document.querySelector("#username-signup").value.trim();
//   const email = document.querySelector("#email-signup").value.trim();
//   const passwordInput = document
//     .querySelector("#passwordInput-signup")
//     .value.trim();

//   if (username && email && passwordInput) {
//     const response = await fetch("/api/users", {
//       method: "post",
//       body: JSON.stringify({
//         username,
//         email,
//         passwordInput,
//       }),
//       headers: { "Content-Type": "application/json" },
//     });

//     if (response.ok) {
//       document.location.replace("/");
//     } else {
//       alert(response.statusText);
//     }
//   }
// }

// // document
// //   .querySelector(".login-form")
// //   .addEventListener("submit", loginFormHandler);

// // document
// //   .querySelector(".signup-form")
// //   .addEventListener("submit", signupFormHandler);
