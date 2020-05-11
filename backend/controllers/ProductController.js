import Product from '../models/Product.js';

const ProductController = {
    getAll(req, res) {
        Product.find()
            .then(products => res.send(products))
            .catch(error => {
                console.error(error)
                res.status(500).send({
                    message: 'There was a problem trying get the products'
                })
            })
    },
    insert(req, res) {
        Product.create(req.body)
            .then(product => res.send(product))
            .catch(error => {
                console.error(error)
                res.status(500).send({
                    message: 'There was a problem trying insert the product'
                })
            })
    },
    update(req, res) {
        Product.findByIdAndUpdate(req.params.id, req.body, { new: true })
            .then(product => res.send(product))
            .catch(error => {
                console.error(error)
                res.status(500).send({
                    message: 'There was a problem trying updating the product'
                })
            })
    },
    delete(req, res) {
        Product.findByIdAndDelete(req.params.id)
            .then(product => res.send(product))
            .catch(error => {
                console.error(error)
                res.status(500).send({
                    message: 'There was a problem trying removing the product'
                })
            })
    }
}

export default ProductController