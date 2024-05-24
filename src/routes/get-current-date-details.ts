import type { Request, Response } from 'express'

export const getCurrentDateDetails = async (req: Request, res: Response) => {
	try {
		const currentDate = new Date(Date.now())

		return res.status(200).json({
			unix: currentDate.valueOf(),
			utc: currentDate.toUTCString(),
		})
	} catch (error) {
		return res.status(500).json({ message: 'internal server error.' })
	}
}
