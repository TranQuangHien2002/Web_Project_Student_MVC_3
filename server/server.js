// server/server.js
const app = require("./express");
const port = 8082;

app.get("/", (req, res) => {
    res.json("Hello World!");
}); 

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});