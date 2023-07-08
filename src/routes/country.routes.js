/** @format */

import express, { Router } from 'express';
import { Country } from '../models/Countries.model.js';
import { Op } from 'sequelize';
import { Url } from '../utils/utils.js';
import { crud } from '../controller/all.controller.js';
const CountryRoutes = express.Router();

CountryRoutes.get('/', async (req, res) => {
	crud.getAll(req, res);
});
CountryRoutes.get('/name/:name', (req, res) => {
	crud.search(req, res);
});
CountryRoutes.get('/name/', (req, res) => {
	crud.getAll(req, res);
});

export default CountryRoutes;
