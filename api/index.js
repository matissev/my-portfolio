require('dotenv').config()
const express = require('express')
const cors = require('cors')
const axios = require('axios')

const PORT = process.env.PORT

const app = express()

app.use(cors())

app.get('/experimentals', (req, res) => {
    const options = {
        method: "GET",
        url: "https://api.gumroad.com/v2/products",
        headers: {
            Authorization: `Bearer ${process.env.GUMROAD_ACCESS_TOKEN}`
        }
    }

    axios.request(options).then((response) => {
        res.json(response.data)
    }).catch((error) => {
        console.error(error)
    })
})

app.listen(PORT, () => console.log(`API server is running on port ${PORT}`))