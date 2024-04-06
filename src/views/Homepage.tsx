import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import './css/home.css';
import outputOnlinePngToolsImage from "../Images/output-onlinepngtools.png"; 
import img1 from "../Images/1.jpg";
import img2 from "../Images/2.jpg";
import img3 from "../Images/3.jpg";
import img4 from "../Images/4.jpg";
import img5 from "../Images/5.jpg";
import img6 from "../Images/6.jpg";
import img7 from "../Images/7.jpg";
import img8 from "../Images/8.jpg";
import img9 from "../Images/9.webp";
import img10 from "../Images/10.png";
import img11 from "../Images/11.jpg";
import img12 from "../Images/12.jpg";
import img13 from "../Images/13.jpg";
import img14 from "../Images/14.png";
import img15 from "../Images/15.jpg";
import img16 from "../Images/16.jpg";
import img17 from "../Images/17.jpg";
import img18 from "../Images/18.jpg";
import img19 from "../Images/19.webp";
import img20 from "../Images/20.jpg";
import img21 from "../Images/21.webp";
import img22 from "../Images/22.jpg";
import img23 from "../Images/23.webp";
import img24 from "../Images/24.jpg";


function Homepage(){
  return(
    <div>
      <header className="sticky-top bg-light">
        <div className="container d-flex justify-content-between align-items-center py-3">
        <div className="header-1" data-visible-range="0-100">

          <div className="logo-2">
          <img src={outputOnlinePngToolsImage} alt="" /> 
          </div>
          <nav>
            <ul className="d-flex">
              <li>Home</li>
              <li>Contact</li>
              <li>About Us</li>

            </ul>
          </nav>
         
        </div>
        
          <div className="header-2" data-visible-range="101-500">
            <nav>
              <ul>
                <div className="where"><li>Where</li></div>
                <div className="checkIn"><li>Check in</li></div>
                <div className="checkOut"><li>Check out</li></div>
                <div className="who"><li>Who</li></div>
              </ul>
            </nav>
          </div>
          <div className="header-3" data-visible-range="501-">
          <nav>
              <ul>
                <div className="buY"><li>Buy</li></div>
                <div className="rent"><li>Rent</li></div>
                <div className="sold"><li>Sold</li></div>
                <div className="newH"><li>New</li></div>
                <div className="findA"><li>Find agents</li></div>
              </ul>
            </nav>
          </div>
          </div>
          
      </header>
      <section className="main">
      <div className="offers">
        <div className="box">
            <div className="first">
              
               
               <Carousel>
      <Carousel.Item>
      <img src={img1} alt="" />
        <Carousel.Caption>
    
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={img2} alt="" />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={img3} alt="" />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
               
                <h3>First apartament</h3>
                <h4>99999.0$</h4>
                <button>Shiko apartamentin</button>
            </div>
            <div className="first">
            <Carousel>
      <Carousel.Item>
      <img src={img4} alt="" />
        <Carousel.Caption>
    
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={img5} alt="" />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={img8} alt="" />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
                <h3>Second apartament</h3>
                <h4>54900.00 €</h4>
                <button><a href="buy.php">Shiko apartamentin</a></button>
            </div>
            <div className="first">
            <Carousel>
      <Carousel.Item>
      <img src={img6} alt="" />
        <Carousel.Caption>
    
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={img7} alt="" />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={img9} alt="" />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>       
                   <h3>Third apartament</h3>
                <h4>29000.oo$</h4>
                <button><a href="buy.php">Shiko apartamentin</a></button>
            </div>
            <div className="first">
            <Carousel>
      <Carousel.Item>
      <img src={img10} alt="" />
        <Carousel.Caption>
    
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={img11} alt="" />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={img12} alt="" />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
                <h3>Fourth</h3>
                <h4>99900.0$</h4>
                <button><a href="buy.php">Shiko apartamentin</a></button>
            </div>
            <div className="first">
                
            <Carousel>
      <Carousel.Item>
      <img src={img13} alt="" />
        <Carousel.Caption>
    
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={img14} alt="" />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={img15} alt="" />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel> 
                <h3>Fifth apartament</h3>
                <h4>70000.0$</h4>
                <button><a href="buy.php">Shiko apartamentin</a></button>
            </div>
            <div className="first">
            <Carousel>
      <Carousel.Item>
      <img src={img16} alt="" />
        <Carousel.Caption>
    
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={img17} alt="" />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={img18} alt="" />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel> 
                    <h3>Sixth apartament</h3>
                <h4>700000.0$</h4>
                <button><a href="buy.php">Shiko apartamentin</a></button>
            </div>
            <div className="first">
            <Carousel>
      <Carousel.Item>
      <img src={img19} alt="" />
        <Carousel.Caption>
    
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={img20} alt="" />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={img21} alt="" />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>                
                   <h3>Seventh apartament</h3>
                <h4>99900.0$</h4>
                <button><a href="buy.php">Shiko apartamentin</a></button>
            </div>
            <div className="first">
            <Carousel>
      <Carousel.Item>
      <img src={img22} alt="" />
        <Carousel.Caption>
    
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={img23} alt="" />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={img24} alt="" />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel> 
                <h3>Eighth apartament</h3>
                <h4>99900.0$</h4>
                <button><a href="buy.php">Shiko apartamentin</a></button>
            </div>
        </div>
    </div>
        </section>
    <section className="footer bg-light">
        <div className="container py-5">
          <hr />
          <div className="row">
            <div className="col-md-3 mb-4 mb-md-0"></div>
            <div className="col-md-3 mb-4 mb-md-0">
              <div>
                <h3>Stay connected with ABODE</h3>
                <div className="icons">
                  //img
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