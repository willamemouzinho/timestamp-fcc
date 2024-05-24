import path from 'node:path'
import cors from 'cors'
import express, { type Request, type Response } from 'express'

import { getCurrentDateDetails } from './routes/get-current-date-details'
import { getSpecificDateDetails } from './routes/get-specific-date-details'

const app = express()

app.use(cors())
app.use('/public', express.static(path.join(__dirname, '../public')))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.get('/', (req: Request, res: Response) => {
	res.sendFile(path.join(__dirname, '../views/index.html'))
})

app.get('/api/:date', getSpecificDateDetails)
app.get('/api', getCurrentDateDetails)

const PORT = 3333
app.listen(PORT, () => {
	console.log(`App listening on port ${PORT}`)
})
