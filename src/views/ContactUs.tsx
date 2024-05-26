import React, { useState, ChangeEvent, FormEvent } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/contact.css';
import Header from "./Header";
import axios from 'axios';
import emailjs from 'emailjs-com';

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    subject: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      await axios.post('https://localhost:7083/api/Contacts', formData);
      console.log('Data sent to API successfully.');
    } catch (error) {
      console.error('Error sending data to API:', error);
    }

    try {
      const emailResponse = await emailjs.send(
        'service_h3ral8d', 
        'template_0dzx88f', 
        {
          fname: formData.fname,
          lname: formData.lname,
          email: formData.email,
          subject: formData.subject,
        },
        'XjDQ16Moq4IOUH77j' 
      );
      console.log('Email sent successfully:', emailResponse.status, emailResponse.text);
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  return (
    <div>
      <Header />
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
              <h3>PAYMENT INFORMATION:</h3>
              <p> 
                Methods: Credit Card<br />
                Bank Transfer <br />
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="last bg-light py-5">
        <div className="container">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="fname">First Name</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="fname" 
                    name="fname" 
                    placeholder="Enter First Name" 
                    required 
                    value={formData.fname} 
                    onChange={handleChange} 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lname">Last Name</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="lname" 
                    name="lname" 
                    placeholder="Enter Last Name" 
                    required 
                    value={formData.lname} 
                    onChange={handleChange} 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input 
                    type="email" 
                    className="form-control" 
                    id="email" 
                    name="email" 
                    placeholder="Enter Email" 
                    required 
                    value={formData.email} 
                    onChange={handleChange} 
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="subject">Message</label>
                  <textarea 
                    className="form-control" 
                    id="subject" 
                    name="subject" 
                    placeholder="Write your message..." 
                    style={{ height: '200px' }} 
                    required 
                    value={formData.subject} 
                    onChange={handleChange} 
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </div>
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
                <a href="*">Kushtet e përdorimit  </a>
                <a href="*">Politika e Privatësisë</a>
              </div>
            </div>
            <div className="col-md-3 mb-4 mb-md-0">
              <div className="div">
                <h3>Llogaria</h3>
                <a href="*">Rezervimet</a>
                <a href="*">Lista e deshirave</a>
                <a href="*">Llogaria ime</a>
              </div>
            </div>
            <div className="col-md-3">
              <div className="div">
                <h3>Kontakti</h3>
                <a href="*">info@gmail.com</a>
                <a href="*">Tel:+383 045 883 702</a>
                <a href="*">Prishtinë, Kosovë</a>
                <a href="*">.......</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactUs;
