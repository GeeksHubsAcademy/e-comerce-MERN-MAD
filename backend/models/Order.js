import mongoose from 'mongoose';
const ObjectId = mongoose.SchemaTypes.ObjectId;
const orderSchema = new mongoose.Schema({
    status: {
        type: String,
        required: true
    },
    deliveryDate: Date,
    products: [{
        _id: {
            type: ObjectId,
            ref: 'Product',
        },
        cantidad: Number,
    }],
    user: {
        type: ObjectId,
        ref: 'User',
        required: true
    }
}, {
    timestamps: true,
});
export default mongoose.model('Order', orderSchema);