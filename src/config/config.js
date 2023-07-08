/** @format */

import { Sequelize } from 'sequelize';
const db = new Sequelize(
	'postgres://countries_d301_user:EfdaZhILRps16W3BFj0FMHymxaaOeJ8u@dpg-ciks6hdgkuvinfl1a38g-a.singapore-postgres.render.com/countries_d301',
	{
		dialect: 'postgres',
		protocol: 'postgres',
		dialectOptions: {
			ssl: {
				require: 'true',
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
