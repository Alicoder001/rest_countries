/** @format */

import { Sequelize } from 'sequelize';
const db = new Sequelize(
	'postgres://countries_eara_user:2tSF0TQli30d9tUy6ZcyY4utxoLv1sRd@dpg-cil38s95rnuvtgtq2dg0-a.singapore-postgres.render.com/countries_eara',
);

try {
	await db.authenticate();
	console.log('Connection has been established successfully.');
} catch (error) {
	console.error('Unable to connect to the database:', error);
}

export default db;
