let btn = document.querySelector(".submit-btn");
btn.addEventListener('click', function () {
    let name = document.querySelector("#name");
    let email = document.querySelector("#email");
    let phone = document.querySelector("#phone");
    if (name.value === "" || email.value === "" || phone.value === "") {
        alert("Please fill all fields!");
        return;
    }
});
