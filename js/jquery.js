
$(document).ready(function() {
    //renderizar
    dibujarGrilla();
    //selector y ordenamiento
    $("#ordenSeleccionado option[value='defecto']").attr("selected", true);
    $("#ordenSeleccionado").change(function() {
        ordenar();
    });
});

function dibujarGrilla(){
    for (const productoFor of stock) {
        $("#grillaProducto").append(`<div class="divProductos card col-4">
                                        <img src="./imagenes/${productoFor.imagen}" class="card-img-top" alt="${productoFor.descripcion}">
                                        <div class="card-body row">
                                            <h4 class="card-text text-center">${productoFor.descripcion}</h4>
                                            <p class="text-center">$U ${productoFor.valor}</p>
                                            <button value="${productoFor.codigo}" class="btn btn-primary mx-auto botonAgregar">Agregar</button>
                                        </div>
                                    </div>`);
    }
    $(".botonAgregar").on(`click`,respuestaClick);
}

function respuestaClick(e){
    let botonClick = e.target;
    vender(botonClick.value);
    guardarCarrito("compra",carrito);
}

function ordenar(){
    let seleccion = $("#ordenSeleccionado").val(); // valor del select id="ordenSeleccionado" en index.html
    if (seleccion=="menor"){
        stock.sort (function(a,b){ return a.valor-b.valor })
    }
    else if (seleccion=="mayor"){
        stock.sort (function(a,b){ return b.valor-a.valor})
    }
    else if (seleccion == "nombre") {
        stock.sort (function(a,b){ return a.descripcion.localeCompare(b.descripcion)})
    }
    $(".divProductos").remove();
    dibujarGrilla();
}

// function ordenar() {
//     let seleccion = $("#miSeleccion").val();
//     console.log(seleccion);
//     if (seleccion == "menor") {
//         //ordenamos el array de productos por menor precio
//         productos.sort(function(a, b) { return a.precio - b.precio });
//     } else if (seleccion == "mayor") {
//         //ordenamos el array de productos por mayor precio
//         productos.sort(function(a, b) { return b.precio - a.precio });
//     } else if (seleccion == "alfabetico") {
//         productos.sort(function(a, b) {
//             return a.nombre.localeCompare(b.nombre);
//         });
//     }
//     $("li").remove();
//     renderizarProductos();
// }