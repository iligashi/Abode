import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from '../App';
import Homepage from '../views/Homepage';
import LoginView from '../views/LoginView';
import Contact from '../views/contactformTEST/contact-form-07/contact';

export const router = (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/home" element={<Homepage />} />
      <Route path="/login" element={<LoginView />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </BrowserRouter>
);
