const name = 'nombre de usuario';

localStorage.setItem('name', name);

const age = 50;
localStorage.setItem('age', 50);

const userAge = localStorage.getItem('age');
typeof userAge;

// login.html
const user = {
  name: 'user',
  email: 'user@gmail.com',
  photoUrl: 'https://images.com/user.png',
};

sessionStorage.setItem('loggedUser', user);

// home.html
const loggedUser = sessionStorage.getItem('loggedUser');
console.log(loggedUser); // "[object Object]"

// login.html
const user = {
  name: 'user',
  email: 'user@gmail.com',
  photoUrl: 'https://images.com/user.png',
};

/*
* Aquí se guarda el objeto en forma de string
*/
sessionStorage.setItem('loggedUser', JSON.stringify(user));

console.log(sessionStorage.getItem('loggedUser'));
// {"name":"user","email":"user@gmail.com","photoUrl":"https://images.com/user.png"}


// home.html
/*
* Aquí se obtiene el objeto en forma de string y se convierte (parsea) a objeto
*/
const loggedUser = JSON.parse(sessionStorage.getItem('loggedUser'));
console.log(typeof loggedUser); // "object"