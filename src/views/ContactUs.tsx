import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/contact.css'

function App() {
  
 
 
    return (
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
            </a>
          </div>
          <nav>
            <ul className="d-flex">
              <li><a href="*">Home</a></li>
              <li><a href="ContactUs.tsx">Contact</a></li>
              <li><a href="*">About Us</a></li>
            </ul>
          </nav>
         
        </div>
      </header>

      <div className="contact py-5">
        <div className="container">
          <h1 className="text-center mb-4">Contact</h1>
          <div className="row">
            <div className="col-md-4 mb-4 mb-md-0">
              <div className="con-info bg-light p-4">
                <h3>GENERAL INFORMATION:</h3>
                <p>Prishtina<br />
                  65433561<br />
                  Kosovo</p>
              </div>
            </div>
            <div className="col-md-4 mb-4 mb-md-0">
              <div className="con-info bg-light p-4">
                <h3>CUSTOMER SUPPORT:</h3>
                <p>Email: info@gmail.com<br />
                  Phone: 65433561</p>
                <div className="col">
                  <h4>Monday through Friday</h4>
                  <p>08:30 AM to 02:30 PM</p>
                </div>
              </div>
            </div>
           <div className="con-info bg-light p-4">
                <h3>GENERAL INFORMATION:</h3>
                <p> Pagesat<br />
                  65433561<br />
                  Kosovo</p>
              </div>
          </div>
          
        </div>
        
      </div>
      

      <div className="last bg-light py-5">
        <div className="container">
          <form action="" method="post">
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="fname">First Name</label>
                  <input type="text" className="form-control" id="fname" name="fname" placeholder="Enter First Name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="lname">Last Name</label>
                  <input type="text" className="form-control" id="lname" name="lname" placeholder="Enter Last Name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" className="form-control" id="email" name="email" placeholder="Enter Email" required />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="Subject">Message</label>
                  <textarea className="form-control" id="Subject" name="Subject" placeholder="Write your message..." style={{ height: '200px' }} required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </div>
            </div>
            <div className="col-lg-6 right-image pr-0">
  
</div>

          </form>
        </div>
      </div>

      <section className="footer bg-light">
        <div className="container py-5">
          <hr />
          <div className="row">
            <div className="col-md-3 mb-4 mb-md-0">
              
            </div>
            <div className="col-md-3 mb-4 mb-md-0">
              <div className="div">
                <div className="icons">
                  
                </div>
                <h2>Mundësuar nga Abode, Inc.</h2>
                <h5>Të gjitha të drejtat e rezervuara</h5>
                <a href="">Kushtet e përdorimit  </a>
                <a href="">Politika e Privatësisë</a>
              </div>
            </div>
            <div className="col-md-3 mb-4 mb-md-0">
              <div className="div">
                <h3>Llogaria</h3>
                <a href="">Rezervimet</a>
                <a href="">Lista e deshirave</a>
                <a href="">Llogaria ime</a>
              </div>
            </div>
            <div className="col-md-3">
              <div className="div">
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

export default App;
