const ProductManager = require('./productManager.js')

const manager = new ProductManager()
//Crear nuevo producto

manager.addProduct({
    title: "Remera nike",
    description: "Lisa de algodon",
    price: 12.99,
    thumbnail: 'ruta/img2.jpg',
    code: 'A400',
    stock: 5
})
manager.addProduct({
    title: "Pantalon Adidas",
    description: "Liso de friza",
    price: 15.99,
    thumbnail: 'ruta/img2.jpg',
    code: 'A400',
    stock: 5
})



//manager.getProducts()

.then(productos => console.log('productos', productos))
.catch(error => console.error("Error al consultar usuario", error))

