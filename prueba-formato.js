import { calcularIVA,totalConIVA } from "./utils/formato.js";
import { formatearPrecio, formatearNombre } from "./utils/formato.js";
import {aplicarDescuento}from "./utils/formato.js";

console.log(formatearPrecio(8400));
console.log(`${calcularIVA(8400)}`);
console.log(`${totalConIVA(8400)}`);
console.log(`Factura:${formatearPrecio(totalConIVA(8400))}`);
console.log(`${aplicarDescuento(6500, 10)}`);

