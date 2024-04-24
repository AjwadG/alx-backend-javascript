import createUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const middle = (promise, ...params) => promise(...params).then((value) => ({ status: 'fulfilled', value }))
    .catch((error) => ({ status: 'rejected', value: String(error) }));

  return Promise.all([middle(createUser, firstName, lastName), middle(uploadPhoto, fileName)])
    .then((results) => results.map((values) => values));
}
