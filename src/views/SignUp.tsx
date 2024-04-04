import React, { useEffect, useState } from 'react';

import Houses from "../Images/houses.jpeg";

interface Props {}

const SignUp = (props: Props) => {
    const [formData, setFormData] = useState({
        Name: '',
        email: '',
        Password: '',
        Surname: ''
      });
      const [errors, setErrors] = useState({
        Name: '',
        email: '',
        Password: '',
        Surname: ''
      });
    
   
    
    const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let newErrors = {
            Name: '',
            email: '',
            Password: '',
            Surname: ''

    }
    // const isValidEmail = (email: string): boolean => {
    //     // Regular expression for basic email validation
    //     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //     return regex.test(email);
    //   };

    if (formData.Name.trim() === '') {
        newErrors.Name = 'please fill out this field.';
      }
    if (formData.Password.trim() === '') {
        newErrors.Password = 'please fill out this field.';
      }
  
    if (formData.Surname.trim() === '') {
        newErrors.Surname = 'please fill out this field.';
      }
      

     
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!formData.email.trim() ) {
        newErrors.email = 'please fill out this field.';
      }
      
      else if (!emailRegex.test(formData.email))  {
        newErrors.email = 'email is not available';
      }
    
      setErrors(newErrors);
      if (
        !newErrors.Name &&
        !newErrors.email &&
        !newErrors.Password &&
        !newErrors.Surname
      ) {
        // Submit the form
        console.log('Form submitted successfully:', formData);
      }
    };
   

   
    
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
      <form  onSubmit={handleSubmit}
      className="signUp"  style={{
          width: windowWidth <= 768 ? "100%" : "40%",
          textAlign: "center",
          alignSelf: "center",
        }}>
        <h2 style={h2}> SignUp to Abode</h2>
        <div style={divStyle}>
            <div>
          <div style={{ padding: "2px" }}>
            <input style={input} type="text" placeholder="First Name" name="Name" onChange={handleChange} value={formData.Name}/>
            
          </div>
          {errors.Name && <span style={{color:'red',}}>{errors.Name}</span>}
          </div>
         <div>

        
          <div style={{ padding: "2px" }}>
            <input
              style={input}
              type="text"
              placeholder="Last Name"
              name="Surname"
              value={formData.Surname}
              onChange={handleChange}
            />
              
          </div>{errors.Surname && <span style={{color:'red',}}>{errors.Surname}</span>}
           </div>
           <div>
          <div style={{ padding: "2px" }}>
            <input style={input} type="text" placeholder="Email" name="email" value={formData.email} onChange={handleChange} />
            
          </div>
          {errors.email && <span style={{color:'red',}}>{errors.email}</span>}
          </div>
          <div>
          <div style={{ padding: "2px" }}>
            <input style={input} type="Password" placeholder="Password" name="Password" value={formData.Password} onChange={handleChange} />
            
          </div>
          {errors.Password && <span style={{color:'red',}}>{errors.Password}</span>}
          </div>
          
        </div>
        {/* <div>
          <span>Forgot your Password?</span>
        </div> */}
        <div>
          <button  style={button} type="submit" className="btn btn-success">
            Sign Up
          </button>
        </div>
        <div>
          <p>
           Already have an account?
            <span style={{ cursor: "pointer", color: "#67c23a" }}>
              {" "}
             <a style={{textDecoration:'none', color:'#67c23a'}} href="login"> Sign In</a>
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
