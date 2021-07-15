const ProjectCard = (props) => {
	const { preview, link, code, name, status } = props;
	return (
		<div card className='w-96 flex flex-col text-black rounded'>
			<div
				className='w-full h-48 bg-cover bg-center rounded-t flex justify-end items-end'
				style={{
					backgroundImage: `url(${preview})`,
				}}
			>
				{link && (
					<a
						className='p-2 bg-white rounded font-bold border-2 border-black m-2 hover:bg-black hover:text-white'
						href={`${link}`}
					>
						Visit
					</a>
				)}
				{code && (
					<a
						className='p-2 bg-white rounded font-bold border-2 border-black m-2 hover:bg-black hover:text-white'
						href={`${code}`}
					>
						Code
					</a>
				)}
			</div>
			<div className='p-4 bg-gray-600 rounded-b text-white'>
				<div>{name}</div>
				<div>Status: {status}</div>
			</div>
		</div>
	);
};

export default ProjectCard;
