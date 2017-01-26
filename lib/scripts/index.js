var page = require('page');

let dos = "W O R K I N G !!!";

var main = document.getElementById('main-container');

page('/', function(context, next){
    main.innerHTML = 'Home <a href="signup">Signup</a> <a href="signin">SignIn</a>';
})

page('signup', function(context, next){
    main.innerHTML = 'SignUp <a href="home">Home</a> <a href="signin">SignIn</a>';
})

page('signin', function(context, next){
    main.innerHTML = 'SignIn <a href="home">Home</a> <a href="signup">SignUp</a>';
})

page();