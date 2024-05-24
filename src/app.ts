import path from 'node:path'
import cors from 'cors'
import express, { type Request, type Response } from 'express'

import { getDateDetails } from './routes/get-date-details'

const app = express()

app.use(cors())
app.use('/public', express.static(path.join(__dirname, '../public')))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.get('/', (req: Request, res: Response) => {
	res.sendFile(path.join(__dirname, '../views/index.html'))
})

app.get('/api/:date', getDateDetails)

const PORT = 3333
app.listen(PORT, () => {
	console.log(`App listening on port ${PORT}`)
})
