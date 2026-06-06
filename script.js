document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("signupForm");

    if(form){

        form.addEventListener("submit", (e) => {

            e.preventDefault();

            const user = {
                name: document.getElementById("name").value,
                email: document.getElementById("email").value,
                university: document.getElementById("university").value,
                password: document.getElementById("password").value
            };

            localStorage.setItem(
                "medpreneurUser",
                JSON.stringify(user)
            );

            alert("Account Created Successfully");

            window.location.href = "dashboard.html";

        });

    }

});
