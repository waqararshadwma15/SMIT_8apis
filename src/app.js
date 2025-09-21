const express = require('express');
const app = express();
const {connectDB} = require('./config/database');

app.use(express.json());
app.use("/",(req,res)=>{
    res.send("Hello World!")

})

connectDB().then(() => {
    console.log('Database connected successfully');
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
}).catch((err) => {
    console.error('Database connection failed', err);
});