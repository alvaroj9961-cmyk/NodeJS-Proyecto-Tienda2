import pc from "picocolors";
import { formatearPrecio, formatearNombre } from "./utils/formato.js";
import { productos } from "./data/productos.js";
import { buscarPorId, listarAgotados, listarPorCategoria, valorInventario, vender, buscarPorNombre } from "./servicios/inventario.js";


const comando = process.argv[2];
const valor1 = process.argv[3];
const valor2 = process.argv[4];

console.log(pc.green("===== TIENDA DON PEDRO ====="));

if (comando === "todos") {
  console.table(productos);
}
if (comando === "agotados") {
  for (const p of listarAgotados()) {
    console.log(`AGOTADO: ${p.nombre}`);
  }
} 
else if (comando === "buscar" && valor1 !== undefined) {
  const resultados = buscarPorNombre(valor1);
  if (resultados.length === 0) {
    console.log(`No hay productos que contengan "${valor1}"`);
  } else {
    for (const p of resultados) {
      console.log(`Encontrado: ${p.nombre}: $ ${formatearPrecio(p.precio)} (quedan ${p.cantidad})`);
    }
  }
} 
else if (comando === "valor") {
  console.log(`Valor del inventario: ${formatearPrecio(valorInventario())}`);
} 
else if (comando === "vender" && valor2 !== undefined) {
  const resultado = vender(Number(valor1), Number(valor2));
  if (resultado.startsWith("ERROR")) {
    console.log(pc.red(resultado));
  } else {
    console.log("Venta: ",resultado);
  }
} 
else {
  console.log("Comandos disponibles:");
  console.log("  npm start -- todos");
  console.log("  npm start -- agotados");
  console.log("  npm start -- buscar <texto>");
  console.log("  npm start -- valor");
  console.log("  npm start -- vender <id> <unidades>");
}