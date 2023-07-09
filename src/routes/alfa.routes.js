/** @format */

import express, { Router } from 'express';
import { Country } from '../models/Countries.model.js';

export const AlfaRoutes = express.Router();
AlfaRoutes.get('/:name', async (req, res) => {
	const name = req.params.name;
	try {
		const data = await Country.findAll({
			where: { alfa: name.toUpperCase() },
		});
		res.send(data);
	} catch (err) {
		res.send(err);
	}
});

