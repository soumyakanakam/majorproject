var form = document.getElementById('form');
form.addEventListener('submit',function(event){
    event.preventDefault();

    var firstname = document.getElementById('firstname').value;
    console.log(firstname);

    
    var lastname = document.getElementById('lastname').value;
    console.log(lastname);

    
    var country = document.getElementById('country').value;
    console.log(country);

    var phonenumber = document.getElementById('phonenumber').value;
    console.log(phonenumber);

    var organizationname = document.getElementById('organizationname').value;
    console.log(organizationname);

    var organizationsize = document.getElementById('organizationsize').value;
    console.log(organizationsize);

    var email = document.getElementById('email').value;
    console.log(email);

let box = document.getElementById("box");
box.checked = true;
box.checked = false;
});

<script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>
