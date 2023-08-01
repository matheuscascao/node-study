import express from 'express';
const app = express();

const PORT = 8080;

app.get("/", function(req, res) {
    res.send("Hello World");
});

app.listen(
    PORT,
    () => console.log(`It's alive on http://localhost:${PORT}`)
);