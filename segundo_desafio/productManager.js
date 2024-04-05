const fs = require('fs').promises
const path = require('path').promises

class ProductManager {
    constructor() {
        this.numeroId = 1
        this.path = "Productos.json"
        this.productos = []
    }

    //Desafio 2
    async crearProducto(newProduct){
        //let [title, description, price, thumbnail, code, stock, id:newId] = newProduct
        try {
            let productos = await this.leerProducto()
            const productoEncontrado = this.productos.find((producto) => producto.code === newProduct.code)
            if (productoEncontrado) {
                console.log('El producto ya se encuentra registrado')
                return
            }
            const lastId = productos.length > 0 ? productos[productos.length -1].id :0
            //const newId = lastId +1
            newProduct.id = lastId +1
            //const newProduct = {id: newId, ...newProduct}
            productos.push(newProduct)

            await fs.writeFile(this.path, JSON.stringify(productos, null, 2))
            console.log('Producto creado correctamente')
        } catch (error) {
            console.error('Error al crear el producto', error)
        }
    }

    async consultarProductos(){
        try {
            return await this.leerProducto()
        } catch (error) {
            console.error('Error al consultar el usuario')
            return []
        }
    } 

    async leerProducto(){
        try {
            const data = await fs.readFile(this.path, 'utf8')
            return JSON.parse(data)
        } catch (error) {
            if(error.code === 'ENOENT') {
                return []
            } else {
                throw error
            }
            
        }
    }
    async agregarProductoById(producto_id) {
        let productos = await this.leerProducto(productos)
        const productoUnico = this.productos.find((producto) => producto_id === producto.id)
        if (!productoUnico) {
            console.log("Producto no existe")
            return
        }
        return productoUnico
    } 
}
module.exports = ProductManager