import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './views/Homepage';
import LoginView from './views/LoginView';
import ContactUs from './views/ContactUs';

const App: React.FC = () => (
	<BrowserRouter>
		<Routes>
			<Route path="home" element={<Homepage />} />
			<Route path="login" element={<LoginView />} />
      <Route path="contactus" element={<ContactUs />} />
		</Routes>
	</BrowserRouter>
);
export default App;