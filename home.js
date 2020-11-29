function login(){
    var usuario = document.getElementById("User");
    var senha = document.getElementById("Pass");

    if(usuario.value == "adm" && senha.value == "123"){
        localStorage.setItem("acesso", true);

        window.location.href = "administrador.html";
    }else{
        alert("Usuario ou senha incorretas! obs: adm, 123");
    }
}