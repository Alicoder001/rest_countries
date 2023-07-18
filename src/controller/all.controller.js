/** @format */

import { Op } from 'sequelize';
import { Crud } from '../crud/crud.js';
import { Country } from '../models/Countries.model.js';
import { Url, paginition } from '../utils/utils.js';
class AllCrud extends Crud {
	getAll = async (req, res) => {
		try {
			let data = await Country.findAll({
				order: [['id', 'ASC']],
			});
			data = paginition(req, data);
			res.cookie('salom', 'hayr', {
				maxAge: 1000 * 3600 * 24 * 2,
				httpOnly: true,
				secure: true,
				path: '/all',
			});
		
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
	update = async (req, res) => {
		const id = req.params.id;
		const { name, capital } = req.body;
		try {
			let data = await Country.update(
				{ name, capital },
				{
					where: {
						id: id,
					},
				},
			);
			console.log('updated');
			data = paginition(req, data);
			res.send(data);
		} catch (err) {
			res.send(err);
		}
	};
}
export const crud = new AllCrud();
