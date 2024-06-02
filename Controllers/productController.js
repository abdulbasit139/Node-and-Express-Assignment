const products = require('../Config/data')

const getProducts = (req, res) => {
    res.status(200).json(products)
}

const createProduct = (req, res) => {
    let { id, name, price } = req.body
    const newProduct = {id, name, price}
    products.push(newProduct)
    res.status(201).json(newProduct)
}

const getSingleProduct = (req, res) => {
    const id = req.params.id
    const specificProduct = products.find(p => p.id == id)
    if (specificProduct) {
        res.status(200).json(specificProduct)
    } else {
        res.status(400).json({mssg: "product not found"})
    }
}

const updateProduct = (req, res) => {
    let id = req.params.id
    let {name, price} = req.body

    const specificProduct = products.find(p => p.id == id)
    if (specificProduct) {
        specificProduct.name = name
        specificProduct.price = price

        res.status(200).json(specificProduct)
    } else {
        res.status(400).json({mssg: `couldn't find the data to update of id ${req.params.id}`})
    }
}

const deleteProduct = (req, res) => {
    const id = req.params.id

    const specificProduct = products.findIndex(p => p.id == id)

    if (specificProduct >= 0) {
        products.splice(specificProduct, 1)
        res.status(200).json({mssg: "Product Deleted"})
    } else {
        res.status(400).json({mssg: "couldn't find that data"})
    }  
} 

module.exports = {
    getProducts,
    createProduct,
    getSingleProduct,
    updateProduct,
    deleteProduct
}