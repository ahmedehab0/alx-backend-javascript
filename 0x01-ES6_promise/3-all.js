import { uploadPhoto, createUser } from './utilss';

export default function handleProfileSignup() {
	Promise
	.all([uploadPhoto(), createUser()])
    	.then((res) => {
      	console.log(`${res[0].body} ${res[1].firstName} ${res[1].lastName}`);
    	}).catch(() => console.log('Signup system offline'));
}