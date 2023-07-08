/** @format */

import { Op } from 'sequelize';
import { Crud } from '../crud/crud.js';
import { Country } from '../models/Countries.model.js';
import { Url, paginition } from '../utils/utils.js';

class AllCrud extends Crud {
	getAll = async (req, res) => {
		try {
			let data = await Country.findAll();
			data = paginition(req, data);
			res.send(data);
		} catch (err) {
			res.send(err);
		}
	};
	search = async (req, res) => {
		let q = req.params.name;
		try {
			if (q) {
				let data = await Country.findAll({
					where: {
						name: {
							[Op.or]: [
								{
									[Op.iLike]: `%${q}%`,
								},
								{
									[Op.iLike]: `%${q}`,
								},
								{
									[Op.iLike]: `${q}%`,
								},
							],
						},
					},
				});
				data = paginition(req, data);
				res.send(data);
			} else {
				const data = await Country.findAll();
				data = paginition(req, data);
				res.send(data);
			}
		} catch (err) {
			res.send(err);
		}
	};
}
export const crud = new AllCrud();
