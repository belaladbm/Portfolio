function validateForm() {
    const submit = document.getElementById("submit-button");
    const message = document.getElementById("message");
    submit.addEventListener("click", function validate(event){
        event.preventDefault();
        const q1 = document.getElementById("q1").value;
        const q2 = document.getElementById("q2").value;
        const q3 = document.getElementById("q3").value;
        const q4 = document.getElementById("q4").value;
        const q5 = document.getElementById("q5").value;
        if (!q1 || !q2 || !q3 || !q4 || !q5){
            message.innerHTML = "Please answer all questions";
            message.style.color ="white";
            message.style.backgroundColor = "red";
        } else if (q1 > 10 || q1 < 1){
            message.innerHTML = "Rating can't be over 10 or under 1"
        } else if (!q2.endsWith("@dal.ca")){
            message.innerHTML = "Email is not valid";
            message.style.color ="white";
            message.style.backgroundColor = "red";
            alert("Not a valid email");
        } else {
            message.innerHTML = "Survey succesfully submitted!";
            message.style.color = "white";
            message.style.backgroundColor = "green";
        }
    });
}
validateForm();

