import type { Request, Response } from 'express'

export const getSpecificDateDetails = async (req: Request, res: Response) => {
	try {
		const dateFromParams = req.params.date
		const date = Number(dateFromParams)
			? new Date(Number(dateFromParams))
			: new Date(dateFromParams)

		if (Number.isNaN(date.getTime())) {
			return res.status(400).json({ error: 'Invalid Date' })
		}

		return res.status(200).json({
			unix: date.getTime(),
			utc: date.toUTCString(),
		})
	} catch (error) {
		console.error(error)
		return res.status(500).json({ message: 'internal server error.' })
	}
}
