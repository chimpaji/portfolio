import { NavLink } from "react-router-dom";
import { GiInvisibleFace } from "react-icons/gi";
import { TiPhone } from "react-icons/ti";
const navbar = [
	{
		name: "Home",
		link: "/",
	},
	{
		name: "About",
		link: "/about",
	},
	{
		name: "Contact",
		link: "/about",
	},
];

const Navbar = () => {
	return (
		<div className='flex justify-between w-full py-2 space-x-4 bg-gray-900 border-b-2 border-gray-700 xl:px-20'>
			<div className='p-1'>
				<GiInvisibleFace size='32px' />
			</div>
			<div className='flex space-x-6'>
				{navbar.map((nav) => (
					<NavLink className='p-1 rounded hover:bg-gray-700' to={`${nav.link}`}>
						{nav.name}
					</NavLink>
				))}
			</div>

			<a href='https://join.skype.com/uA9SCVCPFfCZ' className='p-1 '>
				<TiPhone size='32px' />
			</a>
		</div>
	);
};

export default Navbar;
