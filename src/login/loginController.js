const axios = require('axios');

const instance = axios.create({
  baseURL: 'http://localhost:3001',
  timeout: 1000,
});

class LoginController {
  async login(credentials) {
    let res = null;
    const { email, password} = credentials;
      return await instance.post('/login/login', {
        email,
        password
      }).catch((e) => {
        res = e.response;
      });
  }
}

export default LoginController;
