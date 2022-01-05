import express from "express";
const app = express();
const port = 5000;

app.get('/get', function (req, res,) {
    res.send('get request')
    console.log('Get successful')
})

app.post('/post', function (req, res,) {
    res.send('post request')
    console.log('Post successful')
})

app.listen(port, () => {
    console.log(`listening on port http://localhost: ${port}`)
})