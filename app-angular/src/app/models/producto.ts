export interface Producto {
    id: string,
    nombre: string,
    categoria: string,
    precio: number,
    descripcion: string,
    almacenamiento: string,
    color: string,
    stock: number,
    imagen: string
};

export interface ProductoStateModel {
  productos: Producto[]
}
