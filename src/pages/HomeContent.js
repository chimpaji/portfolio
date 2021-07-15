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
		<div className='h-full w-full flex flex-col items-center'>
			<div className='w-3/4 max-w-3xl py-10 flex flex-col space-y-10'>
				<div aboutMe header className='divide-y-2 divide-gray-300'>
					<div className='text-4xl font-bold'>
						<span class='bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500'>
							Hello world
						</span>
						, I'm Champ👋
					</div>

					<div className='flex flex-col space-y-2 mt-2 pt-4'>
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
				<div projects className='divide-y-2 divide-gray-300'>
					<div className='text-4xl font-bold mb-4'>Selected Projects</div>

					<div className='pt-4 grid grid-cols-1 md:grid-cols-2 gap-4 '>
						{projectData.map((project) => (
							<ProjectCard {...project} />
						))}
					</div>
				</div>
				<div third className='divide-y-2 divide-gray-300 '>
					<div className='text-4xl font-bold mb-4'>Techonologies</div>

					<div className='flex w-full justify-center'>
						<div className='pt-4 grid grid-cols-4 md:grid-cols-8 w-full gap-4'>
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
					<div className='text-4xl font-bold mb-4'>Goals</div>
					<div className='pt-4'>something here</div>
				</div>
			</div>
		</div>
	);
};

export default HomeContent;
