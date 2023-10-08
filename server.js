import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import authRoute from './routes/auth.js';
import tourRoute from './routes/tour.js';
import userRoute from './routes/users.js';

dotenv.config();
const app = express();
const port = process.env.PORT || 8000;
const corsOptions = {
    origin: true,
    credentials: true
};

// app.get("/",(res,req)=>{
//     res.send("api is working");
// })

//connect mongodb
mongoose.set('strictQuery', false);
const connect = async () => {
    try {
        await mongoose.connect(process.env.connection_string, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB Connected');
    } catch (err) {
        console.log('MongoDB Connection fault');
    }
};

//middleware
app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());
app.use('/api/v1/auth', authRoute);
app.use('/api/v1/tours', tourRoute);
app.use('/api/v1/users', userRoute);

app.listen(port, () => {
    connect();
    console.log('server is listening on port', port);
});
