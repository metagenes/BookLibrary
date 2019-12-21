import axios from "axios";
// var jwtDecode = require("jwt-decode");

export const register = newUser => {
  return axios
    .post("http://localhost:8000/user/register", {
      name: newUser.name,
      email: newUser.email,
      password: newUser.password
    })
    .then(response => {
      console.log("Registered");
    });
};

export const loginUser = user => {
  return axios
    .post("http://localhost:8000/user/login", {
      email: user.email,
      password: user.password
    })
    .then(response => {
      // localStorage.setItem("usertoken", response.data.token);
      // console.log(localStorage);
      // localStorage.getItem("usertoken", response.data);
    //   token = response.data.token;
    //   console.log(token);
      // return response.data.token;
      console.log(response.data);
    })
    .catch(err => {
      console.log(err);
    });
};
// const jwtDecode = (req, res, next) => {
//   const token = req.token;
//   const jwtDecode = jwt.decode(token);
//   console.log("jwt decode", decode);
//   next();
// };

// module.exports = {
//   jwtDecode
// };
