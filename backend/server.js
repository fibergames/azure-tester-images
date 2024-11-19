const express = require("express");
const app = express();

app.get("/api/message", (req, res) => {
    res.json({ message: "Hello from Node.js Backend!" });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
