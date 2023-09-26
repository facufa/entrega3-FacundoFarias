// Conversor
let cambioAlDIa = 748;
let valorInput = document.getElementById('amount');
let total = 0;

let estilo = document.getElementById('resultadoCambio');
let contenedorTarjeta = document.getElementById('tarjetas');

// Funcion  coversionn
function conversorDeMoneda() {
    let valorACambiar = parseFloat(valorInput.value); // guardo el numero del input
    
    if(valorACambiar) {
        total = valorACambiar * cambioAlDIa;
        document.getElementById('resultadoCambio').innerText = '$ ' + total.toLocaleString();
        estilo.style.color = 'white';
    } else {
        document.getElementById('resultadoCambio').innerText = 'Ingresar monto';
        estilo.style.color = 'red';
    }
};


// Mostrar oferta
function mostrarCard() {
    const productosOferta = listaProductos.filter( producto => producto.oferta); 
    for (const producto of productosOferta) {
        contenedorTarjeta.innerHTML += 
        `
        <article class="tarjeta">
        
        <div class="tarjeta__conteiner-img">
        <img src="../images/IPhone/IPhone13.jpeg" alt="imagen del producto">
        </div>
        
        <div class="tarjeta__contenido">
        <p class="tarjeta__producto">${producto.nombre}</p>
        <p class="tarjeta__precio">${ '$ ' + producto.precioUsd}</p>
        <div class="tarjeta__bateria">
        <h3> ${producto.gb} - ${producto.bateria}</h3>
        <img src="../images/otros/bateria.png" alt="imagen de bateria">
        </div>
        <div class="color"></div>
        <ul>
        <li><a class="carrito__boton" href="">Añadir al carrito</a></li>
        </ul>
        </div>
        
        </article>
        `
    }
};

document.addEventListener('DOMContentLoaded', mostrarCard);
valorInput.addEventListener('input', conversorDeMoneda);
