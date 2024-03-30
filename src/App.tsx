import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './views/Homepage';
import LoginView from './views/LoginView';
import ContactUs from './views/ContactUs';
import ProfileView from './views/ProfileView';

const App: React.FC = () => (
	<BrowserRouter>
		<Routes>
			<Route path="home" element={<Homepage />} />
			<Route path="login" element={<LoginView />} />
      <Route path="contactus" element={<ContactUs />} />
      <Route path="profile" element={<ProfileView />} />
		</Routes>
	</BrowserRouter>
);
export default App;