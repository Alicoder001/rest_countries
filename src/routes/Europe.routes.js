/** @format */

import express, { Router } from 'express';
import { crud } from '../controller/europe.controller.js';
export const EuropeRoutes = express.Router();
EuropeRoutes.get('/', (req, res) => {
	crud.getAll(req, res);
});
EuropeRoutes.get('/name/:name', (req, res) => {
	crud.search(req, res);
});
EuropeRoutes.get('/name/', (req, res) => {
	crud.getAll(req, res);
});