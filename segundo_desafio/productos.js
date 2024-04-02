const ProductManager = require('/productManager.js')

const manager = new ProductManager()

//Crear nuevo producto

manager.crearProducto({
    id: 1,
    title: "Remera nike",
    description: "Lisa de algodon",
    price: 12.99,
    thumbnail: 'ruta/img2.jpg',
    code: 'A400',
    stock: 5
})

//Consultar productos

manager.consultarProductos()
.then(productos => console.log('Productos', productos));
