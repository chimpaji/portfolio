import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

import ProjectCard from "../components/ProjectCard";

const projectData = [
	{
		name: "Snapbox",
		code: "https://google.com",
		link: "https://youtube.com",
		preview: "https://media.giphy.com/media/l41lFw057lAJQMwg0/giphy.gif",
		status: "Ongoing",
		tech: ["XXX,YYY,ZZZ"],
	},
	{
		name: "Snapbox",
		code: "https://google.com",
		link: "https://youtube.com",
		preview: "https://media.giphy.com/media/cJYxwJ9QsP9wS1oYA6/giphy.gif",
		status: "Ongoing",
		tech: ["XXX,YYY,ZZZ"],
	},
	{
		name: "Snapbox",
		code: "https://google.com",
		link: "https://youtube.com",
		preview: "https://media.giphy.com/media/U2GdAhYjS9fVycGhla/giphy.gif",
		status: "Ongoing",
		tech: ["XXX,YYY,ZZZ"],
	},
	{
		name: "Snapbox",
		code: "https://google.com",
		link: "https://youtube.com",
		preview: "https://media.giphy.com/media/U5VkxjCkTm87ovq8hq/giphy.gif",
		status: "Ongoing",
		tech: ["XXX,YYY,ZZZ"],
	},
];

const HomeContent = () => {
	return (
		<div className='h-full w-full flex flex-col items-center'>
			<div className='w-3/4 max-w-3xl py-10 flex flex-col space-y-10'>
				<div aboutMe header className=''>
					<div className='text-4xl font-bold'>
						<span class='bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500'>
							Hello world
						</span>
						, I'm Champ👋
					</div>
					<div>---------------------------</div>

					<div className='flex flex-col space-y-2 mt-4'>
						<div>
							I'm asdfasdfasdf asdfsdfasdfasdfasdfasd asdfasdfsdafasdfasdfasdf
							asdfasdfasdf asdfasdfasdfsadfasd
						</div>
						<div>xxxx xxxxx xxxx xxxxx xxxxx xxxxx xxxx xxx xxxx xxxxx </div>
						<div>
							YYYY YYYY YYY YYYYY YYYY YY YYYYYY YY YY YYY YY YY YYY Y Y YYYYY Y
							YY YYY YYYYY Y Y YYY YY YY Y YYYYY YYYY{" "}
						</div>
					</div>
				</div>
				<div projects className=''>
					<div className='text-4xl font-bold mb-4'>Selected Projects</div>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-4 '>
						{projectData.map((project) => (
							<ProjectCard {...project} />
						))}
					</div>
				</div>
				<div third>
					<div className='text-4xl font-bold mb-4'>Technologies</div>
					<div>{/* <FontAwesomeIcon icon={faCoffee} /> */}</div>
				</div>
			</div>
		</div>
	);
};

export default HomeContent;
