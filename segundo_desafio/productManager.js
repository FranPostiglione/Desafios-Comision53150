const fs = require('fs').promises


class ProductManager {
    constructor() {
        this.path = "Productos.json"
    }

    //Desafio 2
    async crearProducto(producto){
        try {
            let productos = await this.leerProducto

            productos.push(producto)
            await fs.writeFile(this.path, JSON.stringify(usuarios, null, 2))
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

    async leerUsuarios(){
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
}
module.exports = ProductManager