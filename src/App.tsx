import { BrowserRouter, Routes, Route  , Navigate} from "react-router-dom";
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import Homepage from "./views/Homepage";
import LoginView from "./views/LoginView";
import ContactUs from "./views/ContactUs";
import ProfileView from "./views/ProfileView";
import SignUp from "./views/SignUp";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="home" element={<Homepage />} />
        <Route path="login" element={<LoginView />} />
        <Route path="contactus" element={<ContactUs />} />
        <Route path="signup" element={<SignUp />} />
        {/* <Route path='contact' element={<ContactForm/>}/> */}
        <Route path="profile" element={<ProfileView />} />
        <Route path="*" element={<Navigate to="/login" />} />

      </Routes>
    </BrowserRouter>
  );
};
export default App;
