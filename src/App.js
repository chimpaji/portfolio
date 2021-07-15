import { BrowserRouter as Router, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import Signin from "./pages/Signin";

function App() {
	return (
		<div className='App'>
			<Router>
				<Route exact path='/signin' component={Signin} />
				<ProtectedRoute exact path='*' component={Home} />
			</Router>
		</div>
	);
}

export default App;
