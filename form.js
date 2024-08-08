const form = document.querySelector('form');
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const mess = document.getElementById("message");

function sendEmail() {
    const bodyMessage = `Full Name: ${fullName.value}<br> Email: ${email.value}<br> Phone Number: ${phone.value}<br> Subject: ${subject.value}<br>Message: ${mess.value}`;
    
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "manuraj0642@gmail.com",
        Password: "7AF54715AC1E37F004CB33EF5A7EE9423F7D",
        To: 'manuraj0642@gmail.com',
        From: "manuraj0642@gmail.com",
        Subject: subject.value,
        Body: bodyMessage
    }).then(
        message => alert(message)
    );
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    sendEmail();
});