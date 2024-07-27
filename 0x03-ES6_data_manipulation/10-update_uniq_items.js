function update(value, key, map) {
	if (value === 1) {
		map.set(key, 100);
	}
}

export default function updateUniqueItems(map) {
	if (typeof(map) !== 'object') {
		throw new Error('Cannot process');
	}
	map.forEach(update);
}
