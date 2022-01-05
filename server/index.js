import express from "express";
const app = express();
const port = 5000;
import bookRouter from "./routes/books.js"

app.use(express.json())

app.use('/books', bookRouter);

app.listen(port, () => {
    console.log(`listening on port http://localhost: ${port}`)
})

