require('dotenv').config();
const cors = require('cors')
const express = require('express');
const routes = require(`./routes`);
const app = express();
const port = process.env.PORT || 7000;

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(`/`, routes)

app.listen(port, () => {
    console.log(`now we are open at ${port}`)
})
