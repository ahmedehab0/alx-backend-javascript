import {uploadPhoto, createUser} from "./utils.js";

export default async function asyncUploadUser() {
	let photo = await uploadPhoto();
	let user = await createUser();

	return {photo,
		user};
}
