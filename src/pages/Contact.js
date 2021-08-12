import { useState } from "react";
import { send } from "emailjs-com";

const Contact = () => {
	const [success, setSuccess] = useState("");
	const [toSend, setToSend] = useState({
		from_name: "",
		header: "",
		message: "",
		reply_to: "chimpaji@outlook.com",
		sender_email: "",
	});

	const onSubmit = (e) => {
		e.preventDefault();
		send(
			"service_hw6qq9r",
			"template_uise37q",
			toSend,
			"user_HiUAek8ZemQ5QTMpk0Eqt"
		)
			.then((response) => {
				console.log("SUCCESS!", response.status, response.text);
				setSuccess(
					"Email sent to Champ! I'll reply back ASAP or if you're hurry, feel free to ring me with top right phone button"
				);
				setToSend({
					from_name: "",
					header: "",
					message: "",
					reply_to: "chimpaji@outlook.com",
					sender_email: "",
				});
			})
			.catch((err) => {
				console.log("FAILED...", err);
			});
	};

	const handleChange = (e) => {
		setSuccess("");
		setToSend({ ...toSend, [e.target.name]: e.target.value });
	};

	return (
		<div className='flex justify-center h-screen'>
			<div className='flex flex-col items-center justify-center w-6/12'>
				{success && <div className='my-10'>{success}</div>}
				<div className='p-10 text-black bg-gray-700 rounded-xl'>
					<form onSubmit={onSubmit} className='flex flex-col space-y-4 '>
						<input
							required
							type='text'
							name='from_name'
							placeholder='Sender name'
							value={toSend.from_name}
							onChange={handleChange}
						/>
						<input
							required
							type='text'
							name='header'
							placeholder='Header'
							value={toSend.header}
							onChange={handleChange}
						/>

						<textarea
							value={toSend.message}
							onChange={handleChange}
							placeholder='Your message'
							name='message'
							type='text'
							rows={5}
							cols={5}
						/>
						<input
							required
							type='email'
							name='sender_email'
							placeholder='Your email'
							value={toSend.sender_email}
							onChange={handleChange}
						/>
						<button
							className='py-2 text-gray-900 bg-gray-400 hover:bg-gray-800 hover:text-white'
							type='submit'
						>
							Submit
						</button>
					</form>
					<span className='mt-2 text-white'>
						Or email me at champ@chimpaji.com
					</span>
				</div>
			</div>
		</div>
	);
};

export default Contact;
