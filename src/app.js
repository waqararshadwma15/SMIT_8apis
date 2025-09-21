const express = require('express');
const app = express();
const { connectDB } = require('./config/database');
const bcrypt = require('bcrypt');

app.use(express.json());
app.use("/signup", (req, res) => {
    try {
        // signup logic here
        res.send("Signup route");
    } catch (error) {
        console.log("Error", error);
        res.status(500).send("Internal Server Error");
    }
});

connectDB().then(() => {
    console.log('Database connected successfully');
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
}).catch((err) => {
    console.error('Database connection failed', err);
});