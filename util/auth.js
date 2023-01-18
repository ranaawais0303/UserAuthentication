import axios from "axios";

//this is taken from our firebse project
const API_KEY = "AIzaSyB3Lx8FprzwUnkXmFNUGRGpiXtgENH2odc";
async function createUser(email, password) {
  const response = await axios.post(
    //this is the api from firebase auth rest api signup with email/password
    "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" + API_KEY,

    {
      email: email,
      password: password,
      returnSecureToken: true,
    }
  );
}
