import axios from "axios";

//this is taken from our firebse project
const API_KEY = "AIzaSyB3Lx8FprzwUnkXmFNUGRGpiXtgENH2odc";
async function authenticate(mode, email, password) {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;
  const response = await axios.post(url, {
    email: email,
    password: password,
    returnSecureToken: true,
  });
  console.log(response.data);
}
export async function createUser(email, password) {
  await authenticate("signUp", email, password);
}

export async function login(email, password) {
  await authenticate("signInWithPassword", email, password);
}
