import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv'
import userRoutes from './routes/users.js'
import blood_donation_Routes from './routes/blood_donation_form.js'
import blood_request_Routes from './routes/blood_request_form.js'
import users from './models/auth.js'

const app = express();

dotenv.config();

app.use(express.json({limit: "30mb", extended: true}));
app.use(express.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

app.get('/', (req, res) => {
    res.send("Hello everyone")
})

app.put('/updateusers/:id', async (req,resp)=>{
    let result= await users.updateOne({_id:req.params.id},{
        $set : req.body
    })
    resp.send(result)
})

app.use('/user', userRoutes)
app.use('/donate', blood_donation_Routes)
app.use('/request', blood_request_Routes)

const PORT = process.env.PORT || 5001

const DATABASE_URL = process.env.CONNECTION_URL

mongoose.connect(DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () =>
        console.log(`Back01 API listening on port ${PORT}!`),
    ))
    .catch((err) => console.log(err.message))