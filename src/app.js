const express = require('express');
const app = express();
const { connectDB } = require('./config/database');

app.use(express.json());
app.use("/signup", (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body
        if(!firstName || lastName){
            throw new error('Name is Invalid')
        }else{
            res.send(firstName+lastName)
        }
    } catch (err) {
        console.log("Error in Signup Api", err)
    }

})

connectDB().then(() => {
    console.log('Database connected successfully');
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
}).catch((err) => {
    console.error('Database connection failed', err);
});