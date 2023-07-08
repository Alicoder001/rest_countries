/** @format */

import url from 'url';

export const Url = (req) => {
	const fullUrl = req.protocol + '//:' + req.get('host') + req.originalUrl;
	return url.parse(fullUrl, true);
};
export const paginition = (req, data) => {
	let limit = +req.query?._limit || 20;
	let page = +req.query?._page || 1;
	let skip = +req.query?._skip || 0;
	let newData = [...data.slice(skip + limit * (page - 1), skip + limit * (page - 1) + limit)];
	return {
		countries: newData,
		total: data.length,
		skip,
		limit,
		page,
	};
};
