const cors = require("cors");
const express = require("express");
const app = express();

app.use(cors());

app.get("/api/message", (req, res) => {
    res.json({ message: "Hello from Node.js Backend!" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
