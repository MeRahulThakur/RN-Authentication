//import axios from 'axios';

async function authenticate(mode: string, email: string, password: string) {
  // const url = `https://devserverurl.com/`;

  // const response = await axios.post(url, {
  //   email: email,
  //   password: password,
  //   returnSecureToken: true,
  // });

  const token = 'Asdfgtgwe23465ß'; // get token from response

  return token;
}

export function createUser(email: string, password: string) {
  return authenticate('signUp', email, password);
}

export function login(email: string, password: string) {
  return authenticate('signInWithPassword', email, password);
}