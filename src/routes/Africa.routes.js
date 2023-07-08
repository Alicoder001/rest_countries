/** @format */

import express, { Router } from 'express';
import { crud } from '../controller/africa.controller.js';
export const AfricaRoutes = express.Router();
AfricaRoutes.get('/', (req, res) => {
	crud.getAll(req, res);
});
AfricaRoutes.get('/name/:name', (req, res) => {
	crud.search(req, res);
});
AfricaRoutes.get('/name/', (req, res) => {
	crud.getAll(req, res);
});