/** @format */
import express from 'express';
import { Country } from './models/Countries.model.js';
import CountryRoutes from './routes/country.routes.js';
import process from 'process';
import cors from 'cors';
import { AsiaRoutes } from './routes/asia.routes.js';
import { AfricaRoutes } from './routes/Africa.routes.js';
import { AmericasRoutes } from './routes/americas.routes.js';
import { EuropeRoutes } from './routes/Europe.routes.js';
import { OceaniaRoutes } from './routes/Oceania.routes.js';
import { AlfaRoutes } from './routes/alfa.routes.js';
const app = express();
app.use(express.json());
app.use(cors());
app.use('/all', CountryRoutes);
app.use('/region/asia', AsiaRoutes);
app.use('/region/africa', AfricaRoutes);
app.use('/region/americas', AmericasRoutes);
app.use('/region/europe', EuropeRoutes);
app.use('/region/oceania', OceaniaRoutes);
app.use('/alfa', AlfaRoutes);
app.use('/update/:id', async (req, res) => {
	const id = req.params.id;
	const { name, capital } = req.body;
	try {
		await Country.update(
			{ name, capital },
			{
				where: {
					id: id,
				},
			},
		);
		console.log('updated');

		res.send('updated');
	} catch (err) {
		res.send(err);
	}
});

// let data = [];
// try {
// 	const req = await fetch('https://restcountries.com/v3.1/all');
// 	data = await req.json();
// } catch {}
// await data?.forEach((item) => {
// 	const { name, currencies, capital, region, subregion, languages, flags, population, borders, tld, cioc, cca3 } = item;

// 	try {
// 		Country.create({
// 			name: name.common,
// 			capital: capital ? capital[0] : null,
// 			region,
// 			subregion,
// 			flags: flags.png,
// 			population,
// 			native_name: name?.nativeName && Object.values(name.nativeName)[0]?.common,
// 			currency: currencies && Object.values(currencies)[0]?.name,
// 			languages: languages && Object.values(languages),
// 			borders,
// 			domain_name: tld && tld[0],
// 			alfa: cca3 ? cca3 : cioc,
// 		});
// 	} catch (error) {
// 		console.log(error);
// 	}
// });
const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log('server started...!');
});
