import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from '../App';
import Homepage from '../views/Homepage';
import LoginView from '../views/LoginView';
import ContactUs from '../views/ContactUs';
import Contact from '../views/contactform/contact';

export const router = (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/home" element={<Homepage />} />
      <Route path="/login" element={<LoginView />} />
      <Route path="/company" element={<ContactUs />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </BrowserRouter>
);
