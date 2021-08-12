const ProjectCard = (props) => {
	const { preview, link, code, name, status } = props;
	return (
		<div
			card
			className='flex flex-col max-w-screen-md text-black rounded w-72 md:w-80 lg:w-96'
		>
			<div className='flex w-full pl-2 space-x-1 bg-gray-900 select-none rounded-t-xl'>
				<div className='text-4xl text-red-500'>•</div>
				<div className='text-4xl text-yellow-500'>•</div>
				<div className='text-4xl text-green-500'>•</div>
			</div>
			<div
				className='flex items-end justify-end w-full h-48 bg-center bg-cover '
				style={{
					backgroundImage: `url(${preview})`,
				}}
			>
				{link && (
					<a
						className='p-2 m-2 font-bold bg-white border-2 border-black rounded hover:bg-black hover:text-white'
						href={`${link}`}
					>
						Visit
					</a>
				)}
				{code && (
					<a
						className='p-2 m-2 font-bold bg-white border-2 border-black rounded hover:bg-black hover:text-white'
						href={`${code}`}
					>
						Code
					</a>
				)}
			</div>
			<div className='p-4 text-white bg-gray-600 rounded-b'>
				<div>{name}</div>
				<div>Status: {status}</div>
			</div>
		</div>
	);
};

export default ProjectCard;
