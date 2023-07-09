/** @format */

import { Op } from 'sequelize';
import { Country } from '../models/Countries.model.js';
import { Url, paginition } from '../utils/utils.js';

export class Crud {
	path = 'Asia';
	getAll = async (req, res) => {
		try {
			let data = await Country.findAll({
				where: {
					region: this.path,
				},
			});
			console.log(Country);
			data = paginition(req, data);
			res.send(data);
		} catch (err) {
			res.send(err);
		}
	};
	search = async (req, res) => {
		let q = req.params.name;
		try {
			if (q && q.length > 0) {
				let data = await Country.findAll({
					where: {
						region: this.path,
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
				const data = await Country.findAll({
					where: {
						region: this.path,
					},
				});
				data = paginition(req, data);
				res.send(data);
			}
		} catch (err) {
			res.send(err);
		}
	};
	update = async (req, res) => {
		const id = req.params.id;
		console.log('salom');
		try {
			let data = await Country.update(
				{ name: 'assalom' },
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
