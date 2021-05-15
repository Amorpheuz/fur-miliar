const bodyParser = require('body-parser')
const app = require('express')()
const axios = require('axios')

app.use(bodyParser.json())
app.all('/getBreedInfo', async ({ query }, res) => {
  if (query && query.breed) {
    const catApiRes = await axios
      .get(`https://api.thecatapi.com/v1/breeds/search?q=${query.breed}`, {
        headers: {
          'x-api-key': process.env.CAT_API_KEY,
        },
      })
      .catch((error) => {
        if (error.response) {
          res.status(500).json({
            error: error.response.data,
            errorCode: error.response.status,
          })
        } else if (error.request) {
          res.status(500).json({
            error: 'No response from The Cat API',
            errorCode: 404,
          })
        } else {
          res.status(500).json({
            error: 'Something went wrong',
            errorCode: 500,
          })
        }
      })
    if (catApiRes && catApiRes.status === 200) {
      const catApiResCount = catApiRes.data.length
      let results = catApiRes.data
      if (catApiResCount) {
        if (query && query.limit && query.page) {
          const startIndex = query.page * query.limit
          results = catApiRes.data.slice(
            startIndex,
            startIndex * 1 + query.limit * 1
          )
        }
        res.json({
          success: true,
          data: results,
          dataCount: catApiRes.data.length,
        })
      } else res.status(200).json({ error: 'No results', errorCode: 404.1 })
    }
  } else res.status(404).json({ error: 'No breed name given', errorCode: 404 })
})

module.exports = app
