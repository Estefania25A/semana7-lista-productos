// Arreglo con productos de ropa
const productos = [
  { nombre: "Blusa de encaje", precio: 25, descripcion: "Blusa elegante con detalles florales." },
  { nombre: "Pantalón palazzo", precio: 30, descripcion: "Cómodo y fresco para cualquier ocasión." },
  { nombre: "Vestido largo", precio: 45, descripcion: "Ideal para eventos formales o salidas nocturnas." }
];

// Función para mostrar los productos en pantalla
function renderizarProductos() {
  const lista = document.getElementById("lista-productos");
  lista.innerHTML = ""; // Limpiar lista antes de renderizar

  productos.forEach(producto => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${producto.nombre}</strong> - $${producto.precio}<br>${producto.descripcion}`;
    lista.appendChild(li);
  });
}

// Botón para agregar un nuevo producto genérico
document.getElementById("agregar-producto").addEventListener("click", () => {
  const nuevoProducto = {
    nombre: "Nueva prenda",
    precio: 0,
    descripcion: "Descripción pendiente."
  };
  productos.push(nuevoProducto);
  renderizarProductos();
});

// Renderizar automáticamente al cargar la página
window.onload = renderizarProductos;
