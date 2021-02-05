function check(){
    var password = document.getElementById('pass');
    var password2 = document.getElementById('pass-repeat');
    
    if(password.value != password2.value){
        password2.style.borderColor = "#ff7c71";
        return false;
    }else{
        password2.style.borderColor = "#2dbc75";
        return true;
    }
}

function registrar(){
    var password = document.getElementById('pass').value;
    var userLog = document.getElementById('user').value;
    var emailLog = document.getElementById('email').value;
    
    var usuario = {
        email: emailLog,
        user: userLog,
        pass: password,
    }

    window.localStorage.setItem(userLog, JSON.stringify(usuario));
}

function validar(){
    if(check()){
        registrar();
        location.href = "../login.html";
        return true;
    }else{
        alert("Las contraseñas no coinciden");
        return false;
    }
}

function Login(){
    var password = document.getElementById('passLog');
    var userLog = document.getElementById('userLog');
    var usuario = JSON.parse(window.localStorage.getItem(userLog.value));
    console.log(usuario.user);
    
    if((usuario.user != userLog.value) || (usuario.pass != password.value)){
        password.style.borderColor = "#ff7c71";
        userLog.style.borderColor = "#ff7c71";
        return false;
    }else{
        alert("Bienvenido "+userLog.value);
        return true;
    }
    
}
