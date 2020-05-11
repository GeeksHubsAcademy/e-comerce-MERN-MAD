import './config/mongoose.js';
import express from 'express';
import usersRouter from './routes/users.js'
const app = express();
const PORT = process.env.PORT || 3001;

app.use('/users', usersRouter);

app.listen(PORT, () => console.log('Server running on port ' + PORT));