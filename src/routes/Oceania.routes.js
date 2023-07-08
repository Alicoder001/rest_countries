/** @format */

import express, { Router } from 'express';
import { crud } from '../controller/oceania.controller.js';
export const OceaniaRoutes = express.Router();
OceaniaRoutes.get('/', (req, res) => {
	crud.getAll(req, res);
});
OceaniaRoutes.get('/name/:name', (req, res) => {
	crud.search(req, res);
});
OceaniaRoutes.get('/name/', (req, res) => {
	crud.getAll(req, res);
});
