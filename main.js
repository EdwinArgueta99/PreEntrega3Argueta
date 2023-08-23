
// Verifica el nombre
let storedUsername = localStorage.getItem("user");

// Si no hay un nombre de usuario almacenado, solicita uno
if (!storedUsername) {
    let newUsername = prompt("Ingrese Su Nombre");
    localStorage.setItem("user", newUsername);
    storedUsername = newUsername;
}

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

