export default function setFromArray(array) {
	const set = new Set();

	array.map((value) => set.add(value));
	return set;
}
