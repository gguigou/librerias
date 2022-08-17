class Persona {
    constructor(nombre, apellido, direccion, documento, contrasenia){
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.documento = documento;
        this.contrasenia = contrasenia;
    }
    descripcion(){
        alert("Nombre: " + this.nombre + " Apellido: " + this.apellido + " Direccion: " + this.direccion);
    }
}

const clientes = [];


class Producto {
    constructor(codigo, descripcion, valor, talle, imagen){
        this.codigo=codigo;
        this.descripcion=descripcion;
        this.valor=valor;
        this.talle=talle;
        this.imagen=imagen;
    }
    valorSinIva = () => (this.valor/(1+IVA));
    ivaDelValorFinal = function() { return (this.valor - (this.valor/(1+IVA)))}
    describir() {
        alert(this.descripcion + " " + this.talle + " " + this.valor);
    }
}

const stock = [new Producto(1, "Jumper", 1000, "XS", "jumper.jpg" ),
                new Producto(2, "Pollera", 700, "XS", "pollera.jpg" ),
                new Producto(3, "Remera", 950, "XS", "remera.jpg" )];
stock.push(new Producto(4,"Short", 550, "L", "short.jpg"));
stock.push(new Producto(5,"Zapatitos", 770, "12", "zapatitos.jpg"));

const carrito =[];