const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const EmployeeModel = require('./models/employee');

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/employee", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch(err => {
        console.error("Failed to connect to MongoDB", err);
    });

app.listen(3001, () => {
    console.log("Server is running on port 3001");
});

app.post('/register', async (req, res) => {
    try {
        const employee = await EmployeeModel.create(req.body);
        res.status(201).json(employee);
    } catch (err) {
        console.error("Error creating employee:", err);
        res.status(500).json({ error: "Failed to register employee" });
    }
});
