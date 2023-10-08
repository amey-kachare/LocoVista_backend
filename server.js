import express from "express";
import dotenv from "dotenv";
import cors from 'cors';
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import tourRoute from "./routes/tour.js";

dotenv.config();
const app=express();
const port=process.env.PORT||8000;

// app.get("/",(res,req)=>{
//     res.send("api is working");
// })

//connect mongodb
mongoose.set("strictQuery",false);
const connect=async()=>{
    try{
        await mongoose.connect(process.env.connection_string,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log("mongodb Connected");
    }catch(err){
        console.log("mongodb Connection fault");
    }
}

//middleware
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use('/tours',tourRoute);

app.listen(port,()=>{
    connect();
    console.log("server is listening on port",port);
})
