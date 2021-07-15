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
		<div className='w-full flex h-screen justify-center items-center bg-gray-800 text-xl text-gray-900'>
			<div className='w-6/12 flex flex-col items-center space-y-2 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-10 rounded'>
				<div className='mb-2'>Fill a secret code 🔐🤫</div>
				{welcome && <div>You're awesome💐</div>}
				{error && <div>{error}</div>}
				<form
					onSubmit={handleSubmit}
					className='flex flex-col items-center space-y-8'
				>
					<input
						type='password'
						className=' focus:outline-none border-2 border-gray-400'
						onChange={(e) => {
							setError(null);
							setPassword(e.target.value);
						}}
					/>
					<button className='p-2 bg-white hover:bg-black hover:text-white   rounded'>
						SUBMIT
					</button>
				</form>
			</div>
		</div>
	);
};

export default Signin;
