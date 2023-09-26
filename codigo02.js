// Mostrar productos en tienda
let inputProductoStock = document.getElementById('productoStock')
let totalStock = document.getElementById('produ');

function mostrarStock() {
    let textoBuscado = inputProductoStock.value.toLowerCase();
    
    if (textoBuscado === '') {
        totalStock.innerHTML = '';
        return; 
    }
    
    let productosCoincidentes = listaProductos.filter(producto => producto.nombre.toLowerCase().includes(textoBuscado));
    totalStock.innerHTML = '';
    
    productosCoincidentes.forEach(producto => {
        totalStock.innerHTML += `
                    <article class="tarjeta">
                        <div class="tarjeta__conteiner-img">
                            <img src="../images/IPhone/IPhone13.jpeg" alt="imagen del producto">
                        </div>
                        <div class="tarjeta__contenido">
                            <p class="tarjeta__producto">${producto.nombre}</p>
                            <p class="tarjeta__precio">${'$ ' + producto.precioUsd}</p>
                            <div class="tarjeta__bateria">
                                <h3>${producto.gb} - ${producto.bateria}</h3>
                                <img src="../images/otros/bateria.png" alt="imagen de bateria">
                            </div>
                            <div class="color"></div>
                            <button  id="${producto.id}" class="carrito__boton">Añadir al carrito</button>
                        </div>
                    </article>
                `;
    });
}

inputProductoStock.addEventListener('input', mostrarStock);




let botonComprar = document.getElementById('añadir');
let carrito = document.getElementById('compra'); 

botonComprar.addEventListener('click', function(){

});


// NO BORRAR
// <!-- <div class="producto-pagar">
//                 <div class="contenedor-img">
//                     <img src="../images/Oferta/WhatsApp Image 2023-08-09 at 20.39.44 (1).jpeg" alt="">
//                 </div>
//                 <div class="text">
//                     <p>Producto</p>
//                     <p>Descripcion</p>
//                 </div>
//                 <p>550</p>
//             </div> -->