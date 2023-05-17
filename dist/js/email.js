let btn = document.getElementById('btn');
btn.addEventListener('click', (e) =>{
    e.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let subject = document.getElementById('subject').value;
    let message = document.getElementById('message').value;
    let body = 'name: '+name + '<br/> email: '+email + '<br/> subject: ' +subject + '<br/> message: '+message;

    Email.send({
       SecureToken: "728ee205-2619-4868-8964-5038cb413461",
    //    Host : "smtp.elasticemail.com",
    //    Username : 'bacheampong116@gmail.com',
    //    Password : "19D5A0D14F44C8786204621114E9DEB11918",
       To: 'bacheampong116@gmail.com',
       From: email,
       Subject: subject,
       Body: body
    }).then(
        message => alert(message)
    );
});