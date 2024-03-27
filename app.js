class ProductManager {
    constructor() {
        this.products = []
        this.nextId = 1
    }


    addProduct(product) {
        if (!this.isProductValid(product)) {
            console.log("Error: El producto no es válido")
            return
        }

        if (this.isCodeDuplicate(product.code)) {
            console.log("Error: El código del producto ya está en uso")
            return
        }

        product.id = this.nextId++
        this.products.push(product)
    }

    getProducts() {
        return this.products
    }

    getProductById(id) {
        const product = this.products.find((p) => p.id === id)
        if (product) {
            return product
        } else {
            console.log("Error: Producto no encontrado")
        }
    }

    isProductValid(product) {
        return (
            product.title &&
            product.description &&
            product.price &&
            product.thumbnail &&
            product.code &&
            product.stock !== undefined
        )
    }

    isCodeDuplicate(code) {
        return this.products.some((p) => p.code === code)
    }
}

const productManager = new ProductManager()

productManager.addProduct({
    title: "joggin",
    description: "camuflado",
    price: 10.99,
    thumbnail: 'ruta/imagenA.jpg',
    code: '340',
    stock: 5
})


productManager.addProduct({
    title: "Remera",
    description: "Blanca Lisa",
    price: 10,
    thumbnail: 'ruta/imagenB.jpg',
    code: '400',
    stock: 10
})

productManager.addProduct({
    title: "Pantalon",
    description: "Rojo",
    price: 42,
    thumbnail: 'ruta/imagenC.jpg',
    code: '405',
    stock: 15
})


const productos = productManager.getProducts()
/* const producto = productManager.getProductById(1)  */

console.log(productos)