const productos = [
  { nombre: "Buzo Gris", precio: 4999 },
  { nombre: "Buzo Negro", precio: 4999 },
  { nombre: "Jogging Gris", precio: 3550 },
  { nombre: "Jogging Negro", precio: 3550 },
];

let carrito = [];

let seleccion = alert("¡Bienvenidos a Vegvisir!");

while (seleccion != "Si" && seleccion != "No") {
  alert("Debe seleccionar una respuesta: Si o No");
  seleccion = prompt("Hola, ¿desea comprar algun articulo? Si o No");
}

if (seleccion == "Si") {
  alert("Aceptar para Ver Productos Disponibles");
  let todoslosProductos = productos.map(
    (producto) => producto.nombre + " " + producto.precio + "$"
  );
  alert(todoslosProductos.join("\n"));
} else if (seleccion == "No") {
  alert("¡Gracias por su Visita!");
}

while (seleccion != "No") {
  let productos = prompt(
    "Escriba el nombre del producto para agregarlo al Carrito"
  );
  let precio = 0;

  if (
    productos == "Buzo Gris" ||
    productos == "Buzo Negro" ||
    productos == "Jogging Gris" ||
    productos == "Jogging Negro"
  ) {
    switch (productos) {
      case "Buzo Gris":
        precio = 4999;
        break;
      case "Buzo Negro":
        precio = 4999;
        break;
      case "Jogging Gris":
        precio = 3550;
        break;
      case "Jogging Negro":
        precio = 3550;
        break;
      default:
        break;
    }
    let unidades = parseInt(prompt("¿Cuantas unidades desea comprar?"));

    carrito.push({ productos, unidades, precio });
    console.log(carrito);
  } else {
    alert("Producto Inexistente");
  }

  seleccion = prompt("Desea Seguir Comprando: Si o No");

  while (seleccion === "No") {
    alert("¡Gracias por su compra!");
    carrito.forEach((carritoFinal) => {
      console.log(`producto: ${carritoFinal.producto}, 
      unidades: ${carritoFinal.unidades}, Total a pagar por producto ${
        carritoFinal.unidades * carritoFinal.precio
      }`);
    });
    break;
  }
}


const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0);
console.log("El total a pagar por su compra es de: " + total);

