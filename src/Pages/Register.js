import React, { Component } from "react";
import { register } from "./userFunction";
import { Link } from "react-router-dom";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      email: "",
      password: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();

    const newUser = {
      name: this.state.username,
      email: this.state.email,
      password: this.state.password
    };

    register(newUser).then(res => {
      this.props.history.push(`/login`);
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form className="form" onSubmit={this.onSubmit}>
              <h1
                className="h3 mb-3 font-weight-normal"
                style={{
                  color: "#322F56;",
                  fontSize: "1000px;",
                  
                  // fontFamily: "Karla,sans-serif",
                  fontFamily: "Merriweather, serif",
                  marginLeft: "15px"
                }}
              >
                Please Register
              </h1>
              <div className="form-group">
                <input
                  style={{ height: "35px", width: "370px" }}
                  type="text"
                  className="form-control"
                  id="exampleInputusername"
                  aria-describedby="username"
                  name="username"
                  placeholder="Name"
                  value={this.state.name}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <input
                  style={{ height: "35px", width: "370px" }}
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  name="email"
                  placeholder="email"
                  value={this.state.email}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <input
                  style={{ height: "35px", width: "370px" }}
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  name="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.onChange}
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="masuk"
                  style={{
                    marginLeft: "85px",
                    height: "35px",
                    width: "225px",
                    marginTop: "10px"
                  }}
                  className="btn btn-lg btn-primary "
                  // variant="secondary"
                >
                  Register
                </button>
              </div>
            </form>

            <div
              className="belumdaftar"
              style={{
                marginLeft: "-105px",
                marginTop: "165px"
                // height: "30px"
              }}
            >
              Have Account?
              {/* <a href="#!" className="daftar">
                
                Daftar
              </a> */}
              <Link to="/login" className="daftar">
                Login
              </Link>
            </div>
            <div>
              <hr
                className="baris1"
                style={{
                  width: "160px"
                }}
              ></hr>
              <hr
                className="baris2"
                style={{
                  width: "160px",
                  marginLeft: "220px"
                }}
              ></hr>
              {/* <p
                className="atau"
                style={{
                  marginLeft: "185px",
                  marginTop: "-22px"
                  //  marginBottom: "20px"
                }}
              >
                atau
              </p>
            </div>

            <div
              className="afs"
              style={{
                // marginLeft: "85px"
                width: "370px"
              }}
            >
              <img
                className="gambar1"
                style={{ marginLeft: "55px" }}
                src="https://res.cloudinary.com/afsori/image/upload/v1574059472/Arkamedia/facebook_dks2xz.png"
              ></img>
              <div>
                <a href="">
                  <p style={{ marginLeft: "50px" }} className="masukfacebook">
                    Daftar Dengan Facebook
                  </p>
                </a>
              </div>
            </div>
            <div
              className="afs2"
              style={{
                // marginLeft: "85px"
                width: "370px"
              }}
            >
              <img
                className="gambar2"
                style={{ marginLeft: "53px" }}
                src="https://res.cloudinary.com/afsori/image/upload/v1574326813/Arkamedia/google_p8df8o.png"
              ></img>
              <div>
                <a href="">
                  <p style={{ marginLeft: "27px" }} className="masukgoogle">
                    Daftar Dengan Google
                  </p> */}
                {/* </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
