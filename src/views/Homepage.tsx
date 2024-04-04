import React from "react";
import './css/home.css';

function Homepage(){
  return(
    <div>
      <div className="bar bg-dark text-white py-3">
        <div className="container">
          <h1 className="m-0">Welcome to ABODE: Where Hospitality Meets Home. Feel free to reach out to us. Your comfort is our priority.</h1>
        </div>
      </div>
      <header className="sticky-top bg-light">
        <div className="container d-flex justify-content-between align-items-center py-3">
          
          <div className="logo-2">
            <a href="nav.html">
              <img src="bars.png" alt="Menu" style={{ width: '30px' }} />
            </a>
          </div>
          <nav>
            <ul className="d-flex">
              <li><a href="/">Home</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/">About Us</a></li>
            </ul>
          </nav>
         
        </div>
      </header>
      <section className="main">
        <h1>ABODE</h1>
        <p>Best Prices</p>
        <div className="main-class">
            <p className="check">check our store</p>
            <button><a href="store.php">Our Store</a></button>
        </div>
        
    </section>
    <section className="sign">
        <div className="container">
            <h3>Dont have an account</h3>
            <button><a href="sign-up.php">Register</a></button>
        </div>
    </section>
    <section className="Presentation">
        <div className="div-1">
            <h1>Contact Us</h1>
            <h3>Feel free to reach out to us</h3>
        </div>
        <div className="div-2">
            <a href="contact.php"> <button> Contact</button></a>
        </div>
    </section>
    <div className="bar">
        <span>Best Offers</span> 
    </div>
    <div className="offers">
        <div className="box">
            <div className="first">
               <a href="buy.php">
               {/* img */}
               </a> 
                <h3>First Apartment</h3>
                <h4>Price</h4>
                <button><a href="buy.php">View Apartments</a></button>
            </div>
            {/* More apartments */}
        </div>
    </div>
    <div className="info">
        <div className="one">
            <div className="first">
                {/* img */}
                <h3>Fast Response</h3>
            </div>
        </div>
            <div className="two">
                <div className="first">
                    {/* img */}
                    <h3>Location</h3>
                </div>
            </div>
    </div>
    <section className="footer bg-light">
        <div className="container py-5">
          <hr />
          <div className="row">
            <div className="col-md-3 mb-4 mb-md-0"></div>
            <div className="col-md-3 mb-4 mb-md-0">
              <div>
                <h3>Stay connected with ABODE</h3>
                <div className="icons">
                  <img src="icons8-facebook-30.png" alt="Facebook" />
                  <img src="icons8-instagram-30.png" alt="Instagram" />
                  <img src="icons8-twitter-30.png" alt="Twitter" />
                </div>
                <h2>Mundësuar nga Abode, Inc.</h2>
                <h5>Të gjitha të drejtat e rezervuara</h5>
                <a href="">Kushtet e përdorimit – </a>
                <a href="">Politika e Privatësisë</a>
              </div>
            </div>
            <div className="col-md-3 mb-4 mb-md-0">
              <div>
                <h3>Llogaria</h3>
                <a href="">Rezervimet</a>
                <a href="">Lista e deshirave</a>
                <a href="">Llogaria ime</a>
              </div>
            </div>
            <div className="col-md-3">
              <div>
                <h3>Kontakti</h3>
                <a href="">info@gmail.com</a>
                <a href="">Tel:+383 045 883 702</a>
                <a href="">Prishtinë, Kosovë</a>
                <a href="">.......</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Homepage;
