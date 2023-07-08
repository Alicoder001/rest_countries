/** @format */

let borderArray = [];
let data = [];
try {
	const req = await fetch('https://restcountries.com/v3.1/all');
	data = await req.json();
} catch {}

data.array.forEach((element) => {
	const { borders } = element;
	borders.forEach((item) => {
		if (!borderArray.includes(item)) {
			borderArray.push(item);
		}
	});
});
let fullBorder = [];
borderArray.forEach(async (item) => {
	try {
		const req = await fetch(`https://restcountries.com/v3.1/alpha/${item}`);
		data = await req.json();
        
	} catch {}
});
