const express = require("express")
const app = express();
const cors = require("cors")

require("dotenv").config();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(cors())

app.get('/', (req, res) => {
    res.send('Welcome home')
})

app.listen(port, () => {
    console.log(`App is running on port ${port}`)
})
