import mongoose from 'mongoose';
const ObjectId = mongoose.SchemaTypes.ObjectId;
const productSchema = new mongoose.Schema({
    status: {
        type: String,
        required: true
    },
    deliveryDate: Date,
    products: [{
        _id: ObjectId,
        cantidad: Number
    }],
    user: {
        type: ObjectId,
        required: true
    }
});
export default mongoose.model('Product', productSchema);