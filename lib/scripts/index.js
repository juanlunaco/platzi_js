var page = require('page');
var yo = require('yo-yo');
var empty = require('empty-element');

let dos = "W O R K I N G !!!";
console.log(dos)

var main = document.getElementById('main-container');

page('/', function(context, next){
    main.innerHTML = '<a href="/signup">SignUp</a>'
})

page('signup', function(context, next){
    var interior = yo`<div class="container">
        <div class="row">
        <div class="col s10 push-s1">
        <div class="row">
        <div class="col m5 hide-on-small-only"><img class="iphone" src="assets/img/iphone.png" alt=""></div>
        <div class="col s12 m7">
        <div class="row">
        <div class="signup-box">
        <h1 class="platzigram">Test_01</h1>
        <form action="signup-form">
        <h2>Registrarse</h2>
        <div class="section"><a class="btn btn-fb hide-on-small-only" href="">Iniciar Sesión con Facebook</a><a class="btn btn-fb hide-on-med-and-up" href="">Iniciar Sesión</a></div>
    <div class="divider"></div>
        <div class="section">
        <input type="email" name="email" placeholder="Correo Electrónico">
        <input type="text" name="name" placeholder="Nombre">
        <input type="text" name="username" placeholder="Nombre de Usuario">
        <input type="password" name="password" placeholder="Contraseña">
        <button class="btn waves-effect waves-light" type="submit">Registrarse</button>
        </div>
        </form>
        </div>
        </div>
        <div class="row">
        <div class="login-box">Tienes una cuenta?<a href="/signin">Entrar</a></div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>`;

    empty(main).appendChild(interior);
})

page('signin', function(context, next){

})

page();