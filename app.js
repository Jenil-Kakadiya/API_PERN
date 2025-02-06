const express = require('express')
const studentRoutes = require('./src/router/routes.js')
const app = express();
const PORT = 3000 || process.env.PORT

app.use(express.json());

app.get("/", (req, res) => {
    res.send("HI")
})

app.use("/api/v1/students", studentRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}/`);
})