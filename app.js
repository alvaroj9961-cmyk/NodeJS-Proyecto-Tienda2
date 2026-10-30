import pc from "picocolors";
import { formatearPrecio, formatearNombre } from "./utils/formato.js";
import { productos } from "./data/productos.js";
import { buscarPorId, listarAgotados, listarPorCategoria, valorInventario } from "./servicios/inventario.js";
import { calcularIVA,totalConIVA } from "./utils/formato.js";

console.log(pc.green("API Mi Tienda de Barrio"));
console.log(pc.yellow("Aprendiz: Alvaro Javier Arcila"));
console.log(pc.blue("Bienvenido/a"));
console.log(pc.red("ERROR de prueba"));
console.log(formatearPrecio(8400));
console.log(formatearPrecio(270700));
console.log(formatearNombre("leche 1 l"))
console.table(productos);
console.log(`La tienda tiene ${productos.length} productos`);
console.log(pc.cyan("\n--- Listado de Productos Formateado ---"));

for (const producto of productos) {
  console.log(`${producto.nombre} – ${formatearPrecio(producto.precio)}`);
}

console.log("\nProducto 3:", buscarPorId(3).nombre);
console.log("Agotados:", listarAgotados().length);
console.log("Valor del inventario:", formatearPrecio(valorInventario()));
console.log(pc.magenta("\nProductos de granos:"), listarPorCategoria("granos").length);
