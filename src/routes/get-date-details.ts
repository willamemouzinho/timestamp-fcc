import type { Request, Response } from 'express'
import { z } from 'zod'

export const getDateDetails = async (req: Request, res: Response) => {
	const getDateDetailsParams = z.object({
		date: z.string().date(),
	})

	try {
		const { date } = getDateDetailsParams.parse(req.params)
		const dateObject = new Date(date)

		return res.status(200).json({
			unix: dateObject.valueOf(),
			utc: dateObject.toUTCString(),
		})
	} catch (error) {
		return res.status(400).json({ error: 'Invalid Date' })
		// return res.status(500).json({ message: 'internal server error.' })
	}
}
