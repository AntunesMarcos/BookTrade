function Onload() {
    if (localStorage.getItem("token") == null) {
        document.getElementById("boxLogin").innerHTML += ("<a  id='a-criar-conta' href='/View/cadastrousario.html'><p id='criar-conta'>Criar conta</p></a>"+ "<a  id='a-criar-conta' href='/View/login.html'><img src='/Assets/Img/User-Icon.png' id='icone-usuario' alt='icone de usuario'></a>");
    } else {
        let user = JSON.parse(localStorage.getItem("users"))[0];
        let nome = user.nome;

        document.getElementById("boxLogin").innerHTML += ("<a href='/View/Perfil-do-Usuario.html'><img src='/Assets/Img/User-Icon.png' id='icone-usuario' alt='icone de usuario'></a>");

        var imagemPerfil = document.getElementById('icone-usuario');
        var dataURL = localStorage.getItem('imagemPerfil');

        if (dataURL) {
            imagemPerfil.src = dataURL;
            imagemPerfil.style.width = '70px';
            imagemPerfil.style.height = '70px';
            imagemPerfil.style.padding = '10px';
            imagemPerfil.style.marginRight = '30px';
            imagemPerfil.style.borderRadius = '50%';
            imagemPerfil.style.objectFit = 'cover';
        } else {
            imagemPerfil.src = '/Assets/Img/User-Icon.png';
        }
    }

}
window.onload = Onload;