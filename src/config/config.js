/** @format */

import { Sequelize } from 'sequelize';
// const db = new Sequelize('countries', 'postgres', '1234', {
// 	host: 'localhost',
// 	dialect: 'postgres',
// });
// db.options.logging = false;
const db = new Sequelize(
	'postgres://countries_eara_user:2tSF0TQli30d9tUy6ZcyY4utxoLv1sRd@dpg-cil38s95rnuvtgtq2dg0-a.singapore-postgres.render.com/countries_eara',
	{
		port: 5432,
		dialect: 'postgres',
		dialectOptions: {
			ssl: {
				require: true,
				rejectUnauthorized: false, // <<<<<<< YOU NEED THIS
			},
		},
	},
);
db.options.logging = false;
try {
	await db.authenticate();
	console.log('Connection has been established successfully.');
} catch (error) {
	console.error('Unable to connect to the database:', error);
}

export default db;
