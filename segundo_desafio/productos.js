const ProductManager = require('./productManager.js')

const manager = new ProductManager()

//Crear nuevo producto

manager.crearProducto({
    title: "Remera nike",
    description: "Lisa de algodon",
    price: 12.99,
    thumbnail: 'ruta/img2.jpg',
    code: 'A400',
    stock: 5
})
manager.crearProducto({
    title: "Pantalon Adidas",
    description: "Liso de friza",
    price: 15.99,
    thumbnail: 'ruta/img2.jpg',
    code: 'A400',
    stock: 5
})

//Consultar productos

//manager.consultarProductos()
.then(productos => console.log('productos', productos))
.catch(error => console.error("Error al consultar usuario", error))
