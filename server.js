const PORT = 8000
const express = require('express')
const cors = require('cors')
const axios = require('axios')

require('dotenv').config()

const app = express()

app.use(cors())

app.get('/stats', (req, res) => {
    const id = req.query.id
    const year = req.query.year

    const options = {
        method: 'GET',
        url: `https://api-nba-v1.p.rapidapi.com/standings?league=standard&season=${year}&team=${id}`,
        headers: {
            'X-RapidAPI-Key': process.env.NBA_API_KEY,
            'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
        }
    }

    axios.request(options).then((response) => {
        res.json(response.data)
    }).catch((err) => {
        console.log(err)
    })
})


app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`))