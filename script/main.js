// Verifica si ya existe un nombre de usuario almacenado en localStorage
let storedUsername = localStorage.getItem("user");

// Si no hay un nombre de usuario almacenado, solicita uno usando Swal.fire
if (!storedUsername) {
  Swal.fire({
    title: 'Ingrese su nombre',
    input: 'text',
    inputAttributes: {
      autocapitalize: 'off'
    },
    confirmButtonText: 'Guardar',
    showLoaderOnConfirm: true,
    preConfirm: (newUsername) => {
      // Valida si el nombre de usuario es válido
      if (!newUsername) {
        Swal.showValidationMessage('El nombre no puede estar en blanco');
      } else {
        // Almacena el nombre de usuario en localStorage
        localStorage.setItem("user", newUsername);
        return newUsername;
      }
    },
    allowOutsideClick: () => !Swal.isLoading()
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire('Nombre guardado con éxito');
      storedUsername = result.value; // Actualiza la variable almacenada con el nuevo nombre
      
      //recarga la pagina despues de recibir la respuesta , funcion asincrona (si se lo quito no me reiniciaba la pagina )
      setTimeout(() => {
        location.reload();
      }, 2000);
    }
  });
}

// Ahora, puedes usar la variable storedUsername en tu código.

// Selecciona el elemento para mostrar el nombre en el DOM
let muestraNombre = document.getElementById("Muestranombre");

// Muestra el nombre en pantalla
muestraNombre.innerHTML = `<h1>Bienvenido, ${storedUsername}!</h1>`;


// se agrega el darkmode con eventos 
let toggle= document.getElementById("flexSwitchCheckDefault");
let body = document.body;
let img = document.getElementById("imagen");
//verificar dark mode
let isDark=localStorage.getItem("darkmode")
//actualiza dark mode
if (isDark==="true"){
    body.classList.add("darkmode");
    muestraNombre.classList.add("darkmode");
    imagen.src="./assets/images/FGwhite1.png";
    toggle.checked=true;
}

//Guarda darkmode
toggle.addEventListener("change", ()=>{
    if(toggle.checked){
        body.classList.add("darkmode");
        muestraNombre.classList.add("darkmode");
        imagen.src="./assets/images/FGwhite1.png";
        localStorage.setItem("darkmode", true)
    }else{
        body.classList.remove("darkmode")
        muestraNombre.classList.remove("darkmode")
        imagen.src="./assets/images/FGblack1.png";
        localStorage.setItem("darkmode", false)
    }
});


