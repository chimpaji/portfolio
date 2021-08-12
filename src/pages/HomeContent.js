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
  SiStyledComponents,
  SiFirebase,
} from "react-icons/si";
import ProjectCard from "../components/ProjectCard";
import { ImCss3 } from "react-icons/im";
import { RiHtml5Line, RiFlutterFill } from "react-icons/ri";
import { GrGraphQl } from "react-icons/gr";
import ImageGallery from "react-image-gallery";

const projectData = [
  {
    name: "Snappic",
    code: "https://github.com/chimpaji/snappic",
    link: "https://snappic.chimpaji.com",
    preview: "https://media.giphy.com/media/LnQNJg6LoVzEa5Ccvr/giphy.gif",
    status: "Ongoing",
    tech: ["React, Tailwind, Heroku, Strapi, MongoDB, Cloudinary, Hotjar"],
  },
  {
    name: "Dev.to Clone",
    code: "https://github.com/chimpaji/dev-to-clone",
    link: "https://dev-to-clone-five.vercel.app/",
    preview: "https://media.giphy.com/media/rEMkSGrGEt7ezKKLh5/giphy.gif",
    status: "Ongoing",
    tech: ["Next, Firestore, Firebase Storage, Firebase Auth"],
  },
  {
    name: "Whatsapp Clone",
    code: "https://github.com/chimpaji/whatsapp-clone",
    link: "https://whatsapp-clone-vert.vercel.app/",
    preview: "https://media.giphy.com/media/xBpwB80DIBuYzDKeSq/giphy.gif",
    status: "Ongoing",
    tech: ["Next, Styled Components, Firestore, Firebase Auth"],
  },
  {
    name: "Airbnb Clone",
    code: "https://github.com/chimpaji/airbnb-clone",
    link: "https://airbnb-clone-liard-iota.vercel.app/",
    preview: "https://media.giphy.com/media/6Yxc9seHAyTov5zgIb/giphy.gif",
    status: "Ongoing",
    tech: ["Next, Tailwind, Mapbox, Airbnb reactdates"],
  },
  {
    name: "Snapbox",
    code: "",
    link: "https://spotify.chimpaji.com",
    preview: "https://media.giphy.com/media/NP47la6Rm3Ot4FpkQ2/giphy.gif",
    status: "Ongoing",
    tech: ["XXX,YYY,ZZZ"],
  },
  //   {
  //     name: "Foodder",
  //     code: "",
  //     link: "",
  //     preview: "https://media.giphy.com/media/U2GdAhYjS9fVycGhla/giphy.gif",
  //     status: "Discontinue",
  //     tech: ["XXX,YYY,ZZZ"],
  //   },
  //   {
  //     name: "Kodtep",
  //     code: "",
  //     link: "",
  //     preview: "https://media.giphy.com/media/U5VkxjCkTm87ovq8hq/giphy.gif",
  //     status: "Discontinue",
  //     tech: ["XXX,YYY,ZZZ"],
  //   },
];
const tech = ["CSS", "HTML", "JAVASCRIPT", "TAILWIND", "HEROKU"];

const HomeContent = () => {
  return (
    <div className="flex flex-col items-center w-full h-full">
      <div className="flex flex-col w-3/4 max-w-3xl py-10 space-y-10">
        <div className="divide-y-2 divide-gray-300">
          <div className="flex justify-center">
            <img
              className="rounded-xl mb-12 w-xs  md:w-xl center	"
              src="profile.jpg"
            />
          </div>
          <div className="text-4xl font-bold">
            Hello World,<span> </span>
            <span class="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
              I'm Champ
            </span>
            👋
          </div>

          <div className="flex flex-col pt-4 mt-2 space-y-2">
            <div>
              My name is Champ Paradorn Thongsupaporn. I'm a developer,
              entrepreneur, indy hacker🐱‍💻. Born and raise in Thailand but I'm
              never enough with the beach here🌞
            </div>
            <div>
              I enjoy making thingsss done, while have opportunity to learn new
              languages, and framworks. Transformed complicated tasks into easy
              peasy lemon is my fav!
            </div>
            <div>
              I listen to{" "}
              <a
                href="https://www.youtube.com/user/PowerfulJRE"
                className="text-blue-500"
              >
                Joe Rogan Podcast
              </a>{" "}
              and read{" "}
              <a href="https://twitter.com/elonmusk" className="text-blue-500">
                Elon Musk's tweets
              </a>{" "}
              in my spare time. if you like to have a conversation about how
              partial thinking methodology work or how ravens are smarter than
              chimps, please dont hesitate to dm me.🛸
            </div>
          </div>
        </div>
        <div className="divide-y-2 divide-gray-300">
          <div className="mb-4 text-4xl font-bold">Selected Projects</div>

          <div className="grid grid-cols-1 gap-4 pt-4 md:grid-cols-2 ">
            {projectData.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
        <div className="divide-y-2 divide-gray-300 ">
          <div className="mb-4 text-4xl font-bold">Techonologies</div>

          <div className="flex justify-center w-full">
            <div className="grid w-full grid-cols-4 gap-4 pt-4 md:grid-cols-8">
              <ImCss3 size="64px" />
              <RiHtml5Line size="64px" />
              <SiJavascript size="64px" />
              <FaReact size="64px" />
              <SiRedux size="64px" />
              <SiTailwindcss size="64px" />
              <GrGraphQl size="64px" />
              <SiGithub size="64px" />
              <SiMongodb size="64px" />
              <RiFlutterFill size="64px" />
              <SiHeroku size="64px" />
              <SiAmazonaws size="64px" />
              <FaNode size="64px" />
              <SiStrapi size="64px" />
              <SiStyledComponents size="64px" />
              <SiFirebase size="64px" />
            </div>
          </div>
        </div>
        {/* <div fourth className='divide-y-2 divide-gray-300'>
					<div className='mb-4 text-4xl font-bold'>Goals</div>
					<div className='pt-4'>something here</div>
				</div> */}
      </div>
    </div>
  );
};

export default HomeContent;
