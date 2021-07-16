import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { sitecode } from "../sitecode";
const Signin = ({ history }) => {
	// const history = useHistory();
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (Number(password) === sitecode) {
			console.log("correct");
			localStorage.setItem("isAuthenticated", "true");
			setWelcome(true);
			// history.push("/");
			window.location.pathname = "/";

			return;
		}

		setError("Password invalid🙂");
	};
	const [password, setPassword] = useState(null);
	const [error, setError] = useState(null);
	const [welcome, setWelcome] = useState("");

	return (
		<div className='flex items-center justify-center w-full h-screen text-xl text-gray-900 bg-gray-800'>
			<div className='flex flex-col items-center w-8/12 p-4 py-20 space-y-2 rounded md:w-6/12 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500'>
				<div className='mb-2'>Fill a secret code 🔐🤫</div>
				{welcome && <div>You're awesome💐</div>}
				{error && <div>{error}</div>}
				<form
					onSubmit={handleSubmit}
					className='flex flex-col items-center space-y-8'
				>
					<input
						type='password'
						className='w-48 border-gray-400 borde48r-2 md:w-64 focus:outline-none'
						onChange={(e) => {
							setError(null);
							setPassword(e.target.value);
						}}
					/>
					<button className='p-2 bg-white rounded hover:bg-black hover:text-white'>
						SUBMIT
					</button>
				</form>
			</div>
		</div>
	);
};

export default Signin;
