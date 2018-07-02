obtener_localstorage();

function obtener_localstorage(){
  
  if(localStorage.getItem('nombre')){
   let nombre = localStorage.getItem('nombre');
   let persona = JSON.parse(localStorage.getItem('persona'));
  
  console.log('nombre');
  console.log('persona');
}else{
  console.log('no hay entradas en el local storage');
}

guardar_localstorage();

function guardar_localstorage(){

  let persona = {
    nombre: 'fernando',
    edad: 31,
    correo: 'daklda@mail.com',
    coords: {
      lat:10,
      lng: -10
    }
  };

  let nombre = 'juan';
                           //donde dice 'nombre', puede ir con cualquier otra llave es mera coincidencia.en nombre es la variable 
  localStorage.setItem('nombre', nombre);
  localStorage.setItem('nombre', JSON.stringify(persona));
 
}