/** @format */

import { Sequelize } from 'sequelize';
const db = new Sequelize('countries', 'postgres', '1234', {
	host: 'localhost',
	dialect: 'postgres',
});
db.options.logging = false;
try {
	await db.authenticate();
	console.log('Connection has been established successfully.');
} catch (error) {
	console.error('Unable to connect to the database:', error);
}

export default db;
