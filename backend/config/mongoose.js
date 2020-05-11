import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/MERN-e-comerce', {
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useNewUrlParser: true
    })
    .then(() => console.log('Successfully conected to MongoDB'))
    .catch(error => console.error('Error trying to conect to mongoDB ' + error))