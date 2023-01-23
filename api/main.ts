import express from 'express'
import cors from 'cors'
import { gerarFrase } from './FoiDeGen'

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    const frase = gerarFrase()
    return res.json({ frase: frase })
})

app.listen(3333, () => console.log('Online em http://localhost:3333'))