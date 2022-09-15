import express from 'express'

const app = express()

app.get('/ads', (request, response) => {
  return response.json([
    { id: 1, name: 'testeserver' },
    { id: 2, name: 'testeserver' },
    { id: 3, name: 'testeserver' }
  ])
})

app.listen(3333)
