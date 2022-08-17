const IVA = 0.22;

let usuarioEnLinea;

clientes[0] = new Persona("Gabriel", "Guigou", "Piedra Alta 614", 40215548, "desafio");
clientes.push(new Persona("Dario", "Guigou", "Paul harris 54", 12345678, "padre"));

function hayUsuario(nroDocumento){
    let usuario = clientes.find(clienteEsta=> clienteEsta.documento==nroDocumento);
    return (usuario!= undefined);
}

function validarContrasenia(nroDocumento,contraseniaValidar){
    let usuario = clientes.find(clienteEsta=> clienteEsta.documento==usuario);
    console.log (usuario);
    return (usuario.documento==contraseniaValidar);
    
}
function ingresar(usuarioDocumento,usuarioContrasenia){
    alert("INGRESAR");
    let usuarioIngresado = clientes.find(clienteEsta=> clienteEsta.documento==usuarioDocumento);
    console.log(usuarioIngresado);
    if (usuarioIngresado != undefined){
        if(usuarioIngresado.contrasenia==usuarioContrasenia){
            alert("Bienvenido " + usuarioIngresado.nombre + " " + usuarioIngresado.apellido);
            return usuarioIngresado;
            
        }
        else {
            alert("Contraseña no es valida");
            return undefined;
        }
    }
    else {
        alert("Usuario no existe "+usuarioDocumento+" "+usuarioContrasenia);
        return undefined;
    }
}
function registrarUsuario(nombre,apellido,direccion,documento,contrasenia){
    clientes.push(new Persona(nombre, apellido, direccion, documento, contrasenia));
}


const guardarCarrito = (clave,carritoAGuardar) => {localStorage.setItem(clave,JSON.stringify(carritoAGuardar))}

const carritoGuardado = JSON.parse(localStorage.getItem("compra"));
console.log(carritoGuardado);
if(carritoGuardado!=null){
    for (let i=0 ; i < carritoGuardado.length ; i++) {
        carrito[i] = new Producto(carritoGuardado[i].codigo,carritoGuardado[i].descripcion,carritoGuardado[i].valor,carritoGuardado[i].talle), carritoGuardado[i].imagen;
    }
}


function vender(productoCliente){
    // let productoCliente = prompt("Ingrese el codigo del producto:(1-4), ESC para salir");
    if(encontrado = stock.find(productoStock=> productoStock.codigo == parseInt(productoCliente))){
        encontrado.describir();
        // alert("Valor del IVA: "+ encontrado.ivaDelValorFinal()+ " valor sin IVA: "+ encontrado.valorSinIva());
        carrito.push(encontrado);
    }
    else
        alert("Producto no encontrado");
}


function describirCarrito(){
    let tabla = document.createElement("table");
    let tablaBody = document.createElement("tbody")
    for (const productosEnCarrito of carrito){
        let fila = document.createElement("tr");
        fila.innerHTML = `<td> ${productosEnCarrito.descripcion}</td>
                            <td>${productosEnCarrito.talle}</td>
                            <td>$ ${productosEnCarrito.valor}</td>`;
    tablaBody.appendChild(fila);
    }
    tabla.appendChild(tablaBody);
    let articuloTabla = document.getElementById("tablaCarrito");
    let tituloTabla = document.createElement("h2");
    tituloTabla.innerHTML = "<h2> SU CARRITO ES</h2>";
    articuloTabla.appendChild(tituloTabla);
    articuloTabla.appendChild(tabla);
}

//EVENTOS
//Formulario para registrar nuevo usuario
let formRegistro = document.getElementById("formularioRegistro");
formRegistro.addEventListener("submit", validarRegistro);
let nombreR = document.getElementById("nombre");
let apellidoR = document.getElementById("apellido");
let direccionR = document.getElementById("direccion");
let nroDocumentoR = document.getElementById("nroDocumento");
let contraseniaR = document.getElementById("contrasenia");

function validarRegistro(e){
    if ((nombreR.value=="") || (apellidoR.value=="") || (direccionR.value=="") || isNaN(nroDocumentoR.value) || (contraseniaR.value=="")) {
        e.preventDefault();
        alert("Falto un campo o documento no valido");
    }

    // PROBLEMAS !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    // la idea era si estaba todo bien, registrar el usuario en el siguiente else
    // hacer un push con new Persona, para registrar los datos para despues pueda ingresar
    // pero no me lo deja en el array

    // PODRIA SER QUE AL HACER NEW PERSONA ME QUEDE COMO VARIABLE LOCAL EN LA FUNCION
    // Y UNA VEZ QUE SALE DE validarRegistro(e) ME ELIMINE EL OBJETO CREADO ?????????

    // El problema era que el evento submit me hace una especie de refresh del navegador??????
    // con el e.preventDefault() me deja la persona en el array cliente

    else {
        alert("Agrego persona al registro de clientes");
        clientes.push(new Persona(nombreR.value, apellidoR.value, direccionR.value, nroDocumentoR.value, contraseniaR.value));  
        e.preventDefault();
    }
        
}
//Ingresar con un usuario ya creado

let formIngreso = document.getElementById("formularioIngreso");
formIngreso.addEventListener("submit",validarIngreso);

function validarIngreso(e){
    // e.preventDefault();
    let formulario = e.target;
    let documentoI = formulario.children[0].value;
    let contraseniaI = formulario.children[1].value;
    if (isNaN(documentoI) || (contraseniaI=="")){
        e.preventDefault();
        alert("Los campos son invalidos");
    }
    else {
        let usuario = ingresar(documentoI,contraseniaI);
        if (usuario==undefined){
            e.preventDefault();
        }
        else{
            usuarioEnLinea = usuario;
            let divUsuario = document.getElementById("saludo");//saludo
            parrafoSaludo = document.createElement("p");
            parrafoSaludo.innerHTML ="<p>" +"Bienvenido a nuestra tienda " + usuarioEnLinea.nombre + " "+ usuarioEnLinea.apellido + "</p>";
            divUsuario.appendChild(parrafoSaludo);
            e.preventDefault(); 
        }
    }
}


//Escuchar botones de cada productos

// let botones = document.getElementsByClassName("botonAgregar");
// for (const boton of botones) {
//     boton.addEventListener("click",respuestaClick);
// }
// function respuestaClick(e){
//     let botonClick = e.target;
//     vender(botonClick.value);
//     guardarCarrito("compra",carrito);
// }
let botonFinalizar = document.getElementById("botonFinalizar");
botonFinalizar.addEventListener("click",finalizarCarrito);
function finalizarCarrito(){
    describirCarrito();
    localStorage.clear();
}





