import express from "express"
import cors from "cors"
const app = express()
const port = 3002
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World1as1121!')
})

app.listen(port, () => {
  console.log(`Example app listening port ${port}`)
})