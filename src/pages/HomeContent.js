import { FaReact, FaNode } from "react-icons/fa";
import {
	SiTailwindcss,
	SiJavascript,
	SiRedux,
	SiMongodb,
	SiHeroku,
	SiAmazonaws,
	SiGithub,
	SiStrapi,
} from "react-icons/si";
import ProjectCard from "../components/ProjectCard";
import { ImCss3 } from "react-icons/im";
import { RiHtml5Line, RiFlutterFill } from "react-icons/ri";
import { GrGraphQl } from "react-icons/gr";

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
const tech = ["CSS", "HTML", "JAVASCRIPT", "TAILWIND", "HEROKU"];

const HomeContent = () => {
	return (
		<div className='flex flex-col items-center w-full h-full'>
			<div className='flex flex-col w-3/4 max-w-3xl py-10 space-y-10'>
				<div aboutMe header className='divide-y-2 divide-gray-300'>
					<div className='text-4xl font-bold'>
						Hello World,<span> </span>
						<span class='bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500'>
							I'm Champ
						</span>
						👋
					</div>

					<div className='flex flex-col pt-4 mt-2 space-y-2'>
						<div>
							My name is Champ Paradorn Thongsupaporn. I'm a developer,
							entrepreneur, lifelong learner.
						</div>
						<div>
							In the day, I lead and create countless products, while enjoy
							learning new languages, and frameworks.
						</div>
						<div>
							I listen to{" "}
							<a
								href='https://www.youtube.com/user/PowerfulJRE'
								className='text-blue-500'
							>
								Joe Rogan Podcast
							</a>{" "}
							and read{" "}
							<a href='https://twitter.com/elonmusk'>Elon Musk's tweeter</a> in
							my spare time. if you like to have a conversation about partial
							thinking methodology or UFO, dont hesitate to dm me.🛸
						</div>
					</div>
				</div>
				<div projects className='divide-y-2 divide-gray-300'>
					<div className='mb-4 text-4xl font-bold'>Selected Projects</div>

					<div className='grid grid-cols-1 gap-4 pt-4 md:grid-cols-2 '>
						{projectData.map((project) => (
							<ProjectCard {...project} />
						))}
					</div>
				</div>
				<div third className='divide-y-2 divide-gray-300 '>
					<div className='mb-4 text-4xl font-bold'>Techonologies</div>

					<div className='flex justify-center w-full'>
						<div className='grid w-full grid-cols-4 gap-4 pt-4 md:grid-cols-8'>
							<ImCss3 size='64px' />
							<RiHtml5Line size='64px' />
							<SiJavascript size='64px' />
							<FaReact size='64px' />
							<SiRedux size='64px' />
							<SiTailwindcss size='64px' />
							<GrGraphQl size='64px' />
							<SiGithub size='64px' />
							<SiMongodb size='64px' />
							<RiFlutterFill size='64px' />
							<SiHeroku size='64px' />
							<SiAmazonaws size='64px' />
							<FaNode size='64px' />
							<SiStrapi size='64px' />
						</div>
					</div>
				</div>
				<div fourth className='divide-y-2 divide-gray-300'>
					<div className='mb-4 text-4xl font-bold'>Goals</div>
					<div className='pt-4'>something here</div>
				</div>
			</div>
		</div>
	);
};

export default HomeContent;
