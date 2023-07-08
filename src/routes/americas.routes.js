/** @format */

import express, { Router } from 'express';
import { crud } from '../controller/americas.controller.js';
export const AmericasRoutes = express.Router();
AmericasRoutes.get('/', (req, res) => {
	crud.getAll(req, res);
});
AmericasRoutes.get('/name/:name', (req, res) => {
	crud.search(req, res);
});
AmericasRoutes.get('/name/', (req, res) => {
	crud.getAll(req, res);
});


