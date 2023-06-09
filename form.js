function validation() {
    var user = document.getElementById('user').value;
    var email = document.getElementById('email').value;
    var pass = document.getElementById('pass').value;

    var budget = document.getElementById('budget').value;

    if (user == "") {
        document.getElementById('userr').innerHTML = "please write your username";
        return false;
    }
    if (user.length < 2) {
        document.getElementById('userr').innerHTML = "fill more than one characters";
        return false;
    }

    if (!isNaN(user)) {
        document.querySelector('#userr').innerHTML = "write only alphabets";
    }

    if (email == '') {
        document.getElementById('emaill').innerHTML = "please write email first";
        return false;
    }
    if (email.indexOf('@') <= 0) {
        document.querySelector('#emaill').innerHTML = "Invalid position of @"
    }

    if (email.charAt(email.length - 3 != '.')) {
        document.querySelector('#emaill').innerHTML = "Invalid position of ."

    }

    if (pass == "") {
        document.getElementById('passs').innerHTML = "please write password";
        return false;
    }
    if (pass.length < 8) {
        document.getElementById('passs').innerHTML = "write more than 8 characters";
        return false;
    }
    if (budget == "") {
        document.getElementById('budgett').innerHTML = "please write budget";
        return false;
    }


}