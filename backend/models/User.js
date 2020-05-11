import mongoose from 'mongoose';
import bcrypt from "bcrypt";
const userSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    },
    tokens: [],
    role: {
        type: String,
        enum: ['admin', 'customer']
    }
});
userSchema.pre('save', async function(next) {
    try {
        const user = this;
        console.log(user);
        user.password = await bcrypt.hash(user.password, 9);
        console.log(user.password);
    } catch (error) {
        console.error(error);
    } finally {
        next();
    }
})
export default mongoose.model('User', userSchema);