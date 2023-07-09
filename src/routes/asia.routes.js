/** @format */

import express, { Router } from 'express';
import { crud } from '../controller/asia.controller.js';
export const AsiaRoutes = express.Router();
AsiaRoutes.get('/', (req, res) => {
	crud.getAll(req, res);
});
AsiaRoutes.get('/name/:name', (req, res) => {
	crud.search(req, res);
});
AsiaRoutes.get('/name/', (req, res) => {
	crud.getAll(req, res);
});
AsiaRoutes.patch('/:id', (req, res) => {
	crud.update(req, res);
});


