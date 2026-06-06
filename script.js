const signupForm = document.getElementById("signupForm");

if (signupForm) {
  signupForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;

    localStorage.setItem("fullName", fullName);
    localStorage.setItem("email", email);

    window.location.href = "dashboard.html";
  });
}

const userName = document.getElementById("userName");

if (userName) {
  userName.textContent =
    localStorage.getItem("fullName") || "Medical Student";
}
