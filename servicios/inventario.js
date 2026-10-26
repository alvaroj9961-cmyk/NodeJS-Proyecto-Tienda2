import { productos } from "../data/productos.js";
export const buscarPorId = (id) => productos.find((p) => p.id === id);
export const listarAgotados = () => productos.filter((p) => p.cantidad === 0);
export const valorInventario = () => {
let total = 0;
for (const p of productos) {
total = total + p.precio * p.cantidad;
}
return total;
};
export const listarPorCategoria=(categoria) => productos.filter((p) => p.categoria.toLowerCase()===categoria.toLowerCase());