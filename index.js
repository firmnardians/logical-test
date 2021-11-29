function triangular(num, withY) {
	let x = [];
	let y = [];

	for (let i = 0; i < num; i++) {
		const formula = i * ((i + 1) / 2);
		x.push(formula);

		const z = formula * i;
		y.push(z);
	}

	return withY ? y : x;
}

console.log(triangular(10));
console.log(triangular(10, true));
