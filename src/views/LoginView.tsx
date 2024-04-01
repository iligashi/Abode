import React, { useEffect, useState } from "react";
import Houses from "../Images/houses.jpeg";

interface Props {}

const LoginView = (props: Props) => {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
    display: windowWidth <= 768 ? "none" : "block",
    position: "absolute",
    backgroundColor: "#fff",
    transform: "rotateZ(3deg)",
    width: "100px",
    right: "53%",
    top: "-5px",
    height: "101%",
    zIndex: "1",
  };
  const image: React.CSSProperties = {
    display: windowWidth <= 768 ? "none" : "block",
    position: "relative",
    width: "55%",
    height: "100%",
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
      <form
        className="login"
        style={{
          width: windowWidth <= 768 ? "100%" : "40%",
          textAlign: "center",
          alignSelf: "center",
        }}
      >
        <h2 style={h2}> Login to Abode</h2>
        <div style={divStyle}>
          <div style={{ padding: "2px" }}>
            <input style={input} type="text" placeholder="Email" name="email" />
          </div>
          <div style={{ padding: "2px" }}>
            <input
              style={input}
              type="password"
              placeholder="Password"
              name="password"
            />
          </div>
        </div>
        <div>
          <span>Forgot your Password?</span>
        </div>
        <div>
          <button style={button} type="button" className="btn btn-success">
            Sign In
          </button>
        </div>
        <div>
          <p>
            Don't have an account?
            <span style={{ cursor: "pointer", color: "#67c23a" }}>
              {" "}
              <a style={{ textDecoration: "none", color: "#67c23a" }} href="signup">
                Sign Up
              </a>
            </span>
          </p>
        </div>
      </form>
        <div style={angle}></div>
        <img style={image} src={Houses} alt="" />
    </div>
  );
};

export default LoginView;
