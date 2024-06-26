export default class HolbertonCourse {
	constructor(name, length, students) {
		this._name = name;
		this._length = length;
		this._students = students;
	}
	get name() {
		return this._name;
	}
	set name(newname) {
		if (typeof(newname) !== 'string') {
			throw new TypeError("Name must be a string");
		} else {
		this._name = newname;
		}
	}

	get length() {
		return this._length;
	}
	set length(newlength) {
		if (typeof(newlength) !== 'number') {
			throw new TypeError("Length must be a number");
		}
		this._length = newlength;
	}

	get students() {
		return this._students;
	}

	set students(value) {
    		if (!(value instanceof Array)) {
      			throw new TypeError('Students must be an array of strings');
    		}
    		if (!value.every((student) => typeof student === 'string')) {
      			throw new TypeError('Students must be an array of strings');
    		}
    		this._students = value;
  	}
}
