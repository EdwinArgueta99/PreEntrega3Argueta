
//seleccion de elemento para mostrarlo en DOM//
let muestraNombre=document.getElementById("Muestranombre");
// se muestra en pantalla
let storedUsername=localStorage.getItem("user")
muestraNombre.innerHTML=`<h1>Nombre de usuario : ${storedUsername}</h1>`;


let toggle= document.getElementById("flexSwitchCheckDefault");
let body = document.body;
let isDark=localStorage.getItem("darkmode")


const cards = document.querySelectorAll(".card");

// Función para cambiar tarjetas en el modo oscuro
function updateCardStyles(isDark) {
    if (isDark) {
        cards.forEach(card => card.classList.add("darkmodecards"));
    } else {
        cards.forEach(card => card.classList.remove("darkmodecards"));
    }
}


// actualiza el darkmode
if (isDark==="true"){
    body.classList.add("darkmode");
    muestraNombre.classList.add("darkmode");
    toggle.checked=true;
    updateCardStyles(true);
}


//hace cambios el darkmode
toggle.addEventListener("change", ()=>{
    if(toggle.checked){
        body.classList.add("darkmode");
        muestraNombre.classList.add("darkmode");
        localStorage.setItem("darkmode", true);
        updateCardStyles(true);
    }else{
        body.classList.remove("darkmode");
        muestraNombre.classList.remove("darkmode");
        localStorage.setItem("darkmode", false);
        updateCardStyles(false);
    }
});

//aqui va todo 

// Array de objetos productos
var arrayProductos = [
    {
      nombre: "Assasins creed",
      precio: 200,
    },
    {
      nombre: "God Of War",
      precio: 150,
    },
    {
      nombre: "Hellblade",
      precio: 100,
    }
];

// carrito
let carrito = [];

// Traer elementos del DOM
let comp1 = document.getElementById("Compra1");
let comp2 = document.getElementById("Compra2");
let comp3 = document.getElementById("Compra3");
let listaCarrito = document.getElementById("listaCarrito"); // Obtén el elemento ul


// Cargar carrito desde el Local Storage al iniciar la página
window.onload = () => {
    const carritoGuardado = localStorage.getItem("carrito");
    if (carritoGuardado) {
        carrito = JSON.parse(carritoGuardado);
        actualizarCarrito();
    }
};

comp1.addEventListener("click", () => {
    agregarAlCarrito(arrayProductos[0]);
});

comp2.addEventListener("click", () => {
    agregarAlCarrito(arrayProductos[1]);
});

comp3.addEventListener("click", () => {
    agregarAlCarrito(arrayProductos[2]);
});

function agregarAlCarrito(producto) {
    // Verificar si el producto ya existe en el carrito
    const index = carrito.findIndex(item => item.nombre === producto.nombre);
    
    if (index === -1) {
        carrito.push({ ...producto, cantidad: 1 }); // Agregar producto al carrito con cantidad
    } else {
        carrito[index].cantidad++; // Incrementar cantidad si ya existe
    }

    actualizarCarrito();
}

function actualizarCarrito() {
    // Limpia el contenido anterior de la lista
    listaCarrito.innerHTML = "";

    // Recorre los productos en el carrito y agrega cada uno como un elemento de lista
    carrito.forEach((producto, index) => {
        let li = document.createElement("li");
        li.textContent = `${producto.nombre} x${producto.cantidad} - $${producto.precio * producto.cantidad}`;

        // Agrega un botón para eliminar una cantidad del producto
        let botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar";
        botonEliminar.addEventListener("click", () => eliminarCantidadProducto(index));
        
        li.appendChild(botonEliminar);
        listaCarrito.appendChild(li);
    })
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

function eliminarCantidadProducto(index) {
    if (carrito[index].cantidad > 1) {
        carrito[index].cantidad--; // Disminuir la cantidad en 1
    } else {
        carrito.splice(index, 1); // Si la cantidad es 1, eliminar el producto del carrito
    }
    
    actualizarCarrito();
}


