import Typewriter from "react-ts-typewriter";
import myImg from "../../assets/me.png";
import Background from "../../assets/animation/animation.json";
import Lottie from "react-lottie-player";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
} from "react-icons/fa";
import 'animate.css';
import ShareCommentButton from "../ShareCommentButton/ShareCommentButton";
import DownloadButton from "../DownloadButton/DownloadButton";

const Banner = () => {
  const words = [
    "Building robust web applications",
    "Crafting seamless user experiences",
    "Powerful backend with Node.js & Express",
    "Database mastery with MongoDB",
    "Dynamic front-end with React.js",
    "Full-stack development expertise",
    "Innovative solutions for modern web problems",
    "Optimizing performance for faster websites",
    "Creating scalable and maintainable code",
    "From front-end to back-end, I handle it all",
  ];

  // Check for undefined or empty words array
  if (
    !Array.isArray(words) ||
    words.some((word) => word === undefined || word === null)
  ) {
    console.warn("Words array contains invalid values!");
  }

  return (
    <div className="w-full h-full bg-[#1c1f23] p-8   rounded-md">
      {/* Main */}
      <header className="flex  flex-col-reverse lg:flex-row gap-[50px] lg:gap-0 items-center justify-between lg:mt-3 ">
        <div className="lg:w-[50%] w-full  text-center lg:text-left animate__animated animate__fadeInRight"> 
          <p className="">Welcome to my world</p>

          <h1 className="text-[30px] lg:text-[30px] h-24 mb-3 leading-[35px] lg:leading-[35px] lg:text-start text-center">
            Hi, I’m <span className="text-red-700 ">Masud Rana</span>{" "}
            <span style={{ color: "white", fontWeight: "bold" }}>
              <h1 >
                <Typewriter speed={400} text={words} loop={true} />
              </h1>
            </span>
          </h1>
          <p className="text-[16px] mt-2 lg:text-start text-center">
            Explore innovative web solutions with modern technologies like MERN
            stack, MongoDB, and Express. Empowering your digital presence for
            success!
          </p>
          <div className=" flex items-center lg:flex-row flex-col gap-2">
            <p className="text-lg ">Find Me Online</p>
            <span className="hidden lg:block">||</span>
            <div className=" flex items-center gap-3">
              <a
                className="inline-block shadow-md shadow-white/80 text-3xl rounded-full p-2 cursor-pointer hover:bg-blue-600 hover:text-white"
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </a>
              <a
                className="inline-block shadow-md shadow-white/80 text-3xl rounded-full p-2 cursor-pointer hover:bg-blue-500 hover:text-white"
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
            
              <a
                className="inline-block shadow-md shadow-white/80 text-3xl rounded-full p-2 cursor-pointer hover:bg-blue-700 hover:text-white"
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
              <a
                className="inline-block shadow-md shadow-white/80 text-3xl rounded-full p-2 cursor-pointer hover:bg-gray-800 hover:text-white"
                href="https://github.com/Masud-Rana-1002"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
              <a
                className="inline-block shadow-md shadow-white/80 text-3xl rounded-full p-2 cursor-pointer hover:bg-green-400 hover:text-white"
                href="https://wa.me/+9660533597085"
                target="_blank"
                rel="noopener noreferrer"
              >
               <FaWhatsapp />
              </a>
            </div>
          </div>
          <div className="mt-6  ">
            <DownloadButton/>

          </div>
        </div>
        {/* banner img */}
        <div className=" relative animate__animated animate__fadeInLeft">
          <Lottie
            loop
            animationData={Background}
            play
            style={{ width: 350, height: 450 }}
          />
          <div className="absolute -bottom-0 right-8 md:-right-8">
            <img src={myImg} alt="image" className="w-full mx-auto" />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Banner;
