import React from "react";
import Houses from "../Images/houses.jpeg";

interface Props {}

const SignUp = (props: Props) => {
  const divStyle: React.CSSProperties = {
    display: "block",
    padding: "7px",
  };
  const h2: React.CSSProperties = {
    fontFamily: "sans-serif",
    fontSize: "32px",
  };
  const button: React.CSSProperties = {
    width: "150px",
    marginTop: "10px",
    color: "#65c24e",
    backgroundColor: "#83e59945",
    borderColor: "#9dcca7",
  };
  const input: React.CSSProperties = {
    width: "100%",
    maxWidth: "350px",
    border: "none",
    backgroundColor: "#f2f7f6",
    padding: "4px 4px 4px 30px",
    height: "50px",
  };
  const angle: React.CSSProperties = {
    display: "flex",
    position: 'absolute',
    backgroundColor: "#fff",
    transform: "rotateZ(3deg)",
    width: "100px",
    right: "53%",
    top: "-5px",
    height: "101%",
    zIndex: "1"
  };
  const image: React.CSSProperties = {
    position: "relative",
    width: "55%",
    height: "100%"
  };
  const formWrap: React.CSSProperties = {
    display: "flex",
    overflow: "hidden",
    height: "100vh",
    justifyContent: "space-between",
    alignSelf: "center",
    margin: "0 auto",
    width: "100%",
  };

  return (
    <div className="formWrap flex" style={formWrap}>
      <form className="login" style={{ width: "40%", textAlign: "center", alignSelf: "center" }}>
        <h2 style={h2}> SignUp to Abode</h2>
        <div style={divStyle}>
          <div style={{ padding: "2px" }}>
            <input style={input} type="text" placeholder="First Name" name="Name" />
          </div>
          <div style={{ padding: "2px" }}>
            <input
              style={input}
              type="text"
              placeholder="Last Name"
              name="Surname"
            />
          </div>
          <div style={{ padding: "2px" }}>
            <input style={input} type="text" placeholder="Email" name="email" />
          </div>
          <div style={{ padding: "2px" }}>
            <input style={input} type="Password" placeholder="Password" name="Password" />
          </div>
        </div>
        {/* <div>
          <span>Forgot your Password?</span>
        </div> */}
        <div>
          <button style={button} type="button" className="btn btn-success">
            Sign Up
          </button>
        </div>
        <div>
          <p>
           Alredy have an account?
            <span style={{ cursor: "pointer", color: "#67c23a" }}>
              {" "}
              Sign In
            </span>
          </p>
        </div>
      </form>
      {/* <div> */}
        <div style={angle}></div>
        <img style={image} src={Houses}  alt="" />
      </div>
    // </div>
  );
};

export default SignUp;
