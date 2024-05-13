import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './views/Homepage';
import LoginView from './views/LoginView';
import ContactUs from './views/ContactUs';
import ProfileView from './views/ProfileView';
import SignUp from './views/SignUp';
// import ContactForm from './views/contactform/contact';


const App: React.FC = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="home" element={<Homepage />} />
				<Route path="login" element={<LoginView />} />
				<Route path="contactus" element={<ContactUs />} />
				<Route path='signup' element={<SignUp />} />	
				{/* <Route path='contact' element={<ContactForm/>}/> */}
   <Route path="profile" element={<ProfileView/>} />
    </Routes>
		</BrowserRouter>
	);

};
export default App;