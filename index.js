const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const port = 8080;
const app = express();
const taskRoute = require("./routes/taskRoutes")



dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(
    process.env.MONGODB_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

let db = mongoose.connection;
db.on("error", () => console.error("Connection error."))
db.on("open", () => console.error("Connected to MongoDB!"))

app.use("/tasks", taskRoute);

app.listen(port, () => {
    console.log(`Connected to localhost:${port} successfully!`)
})