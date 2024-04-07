import React,  { useEffect, useState } from "react";
import AbodeLogo from "../Images/AbodeLogo.png";


interface Props {}

const Header = (props: Props) => {
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

      const SearchAndProfile: React.CSSProperties = {
        display: 'flex',
        
        // marginLeft: windowWidth <= 768 ? "0px": "400px",
      };



    
    return (
        
        <header className="p-3 mb-3 border-bottom">
        <div className="container">
          {/* <div className="d-flex flex-wrap  "> */}
            
           <div style={{display:'flex', justifyContent:'space-between', flexWrap:'wrap', alignItems: 'center', width: '100%'}}>

           
            
            <div style={{display:'inline-flex'}}>

            

            <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 link-body-emphasis text-decoration-none">
              <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlinkHref="#bootstrap"></use></svg>
            </a>
  
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0" style={{alignItems:'center',}}>
              <li><a href="#" ><img style={{width:'120px',}} src={AbodeLogo} alt="" /></a></li>
              <li><a href="#" className="nav-link px-2 link-body-emphasis"> Home</a></li>
              <li><a href="#" className="nav-link px-2 link-body-emphasis">Contact Us</a></li>
              <li><a href="#" className="nav-link px-2 link-body-emphasis">Profile</a></li>
            </ul>
            </div>
           

           <div style={SearchAndProfile}>

           
            <form className="col-12 col-lg-auto" role="search">
              <input type="search" className="form-control" placeholder="Search..." aria-label="Search" />
            </form>
  
            <div className="dropdown text-end">
              <a href="#" className="d-block link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" className="rounded-circle" />
              </a>
               </div>
            
              <ul className="dropdown-menu text-small" style={{}}>
                <li><a className="dropdown-item" href="#">New project...</a></li>
                <li><a className="dropdown-item" href="#">Settings</a></li>
                <li><a className="dropdown-item" href="#">Profile</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Sign out</a></li>
              </ul>
              </div>
              </div>
            {/* </div> */}
          </div>
    
      </header>
    );
}
export default Header;
