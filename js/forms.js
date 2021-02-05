function checkEmail(){
    var userLog = document.getElementById('user');
    var emailLog = document.getElementById('email');
    var usuario = JSON.parse(window.localStorage.getItem(userLog.value));

    for (x=0; x<=localStorage.length-1; x++)  {  
        clave = localStorage.key(x);
        var database = JSON.parse(window.localStorage.getItem(clave));
        if(userLog.value == clave){
            userLog.style.borderColor = "#ff7c71";
            return false;
        }else{
            userLog.style.borderColor = "#2dbc75";
        } 
        
        if(emailLog.value == database.email){
            emailLog.style.borderColor = "#ff7c71";
            return false;
        }else{
            emailLog.style.borderColor = "#2dbc75";
        }
    }
    return true;
}

function check(){
    var password = document.getElementById('pass');
    var password2 = document.getElementById('pass-repeat');
   
    if(password.value != password2.value){
        password2.style.borderColor = "#ff7c71";
        alert("Las contraseñas no coinciden");
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
    if(check() && checkEmail()){
        registrar();
        location.href = "../login.html";
        return true;
    }else{ 
        return false;
    }
}

function Login(){
    var password = document.getElementById('passLog');
    var userLog = document.getElementById('userLog');
    var usuario = JSON.parse(window.localStorage.getItem(userLog.value));

    if(userLog.value == "") {
        alert("Ingresa un usuario.");
    }else if(password.value == ""){
        alert("Ingresa una contraseña.");
    }else if(usuario == null){
        alert("El usuario no está registrado.");
        return false;
    }else if((usuario.user != userLog.value) || (usuario.pass != password.value)){
        password.style.borderColor = "#ff7c71";
        alert("Los datos no coinciden.");
        return false;
    }else{
        password.style.borderColor = "#afafaf";
        userLog.style.borderColor = "#afafaf";
        return true;
    }
    
}

function logIn(){
    if(Login()){
        alert("Bienvenido "+userLog.value);
        return true;
    }else{
        return false;
    }
}
