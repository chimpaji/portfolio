import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeContent from "./HomeContent";
import Navbar from "../components/Navbar";
import About from "./About";
import Footer from "../components/Footer";

const Home = () => {
	return (
		<div className='text-white text-xl bg-gray-800'>
			<Router>
				<Navbar />
				<Switch>
					<Route path='/' exact component={HomeContent} />
					<Route path='/about' exact component={About} />
				</Switch>
				<Footer/>
			</Router>
		</div>
	);
};

export default Home;
