import express from 'express'
import cors from 'cors'

const app = express()

app.use(cors)
app.use(express.json())

app.listen(1010, () => console.log('Online em: http://localhost:1010'))