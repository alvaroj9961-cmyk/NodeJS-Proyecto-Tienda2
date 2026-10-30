import { productos } from "./data/productos.js";
import { formatearPrecio, formatearNombre } from "./utils/formato.js";
import fs from "node:fs";
import { buscarPorId, listarAgotados, listarPorCategoria, valorInventario, buscarPorNombre, vender } from "./servicios/inventario.js";


console.log(buscarPorId(3).nombre);
console.log(`${listarAgotados().length} agotado(s)`);
console.log(valorInventario());
console.log(buscarPorNombre("queso").map(p => p.nombre));
console.log(vender(3, 2));
console.log(vender(6, 2));
console.log(vender(9, 2));