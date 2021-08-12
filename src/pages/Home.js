import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeContent from "./HomeContent";
import Navbar from "../components/Navbar";
import About from "./About";
import Contact from "./Contact";
import Footer from "../components/Footer";
const Home = () => {
	return (
		<div className='text-xl text-white bg-gray-800'>
			<Router>
				<Navbar />
				<Switch>
					<Route path='/' exact component={HomeContent} />
					<Route path='/about' exact component={About} />
					<Route path='/contact' exact component={Contact} />
				</Switch>
				<Footer/>
			</Router>
		</div>
	);
};

export default Home;
