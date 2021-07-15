import { NavLink } from "react-router-dom";

const navbar = [
	{
		name: "Home",
		link: "/",
	},
	{
		name: "About",
		link: "/about",
	},
];

const Navbar = () => {
	return (
		<div className='bg-gray-900 w-full py-2 px-20 flex justify-between space-x-4 border-b-2 border-gray-700'>
			<div className='p-1'>icon</div>
			<div className='flex space-x-6'>
				{navbar.map((nav) => (
					<NavLink className='p-1 rounded hover:bg-gray-700' to={`${nav.link}`}>
						{nav.name}
					</NavLink>
				))}
			</div>

			<div className='p-1'>🍑</div>
		</div>
	);
};

export default Navbar;
