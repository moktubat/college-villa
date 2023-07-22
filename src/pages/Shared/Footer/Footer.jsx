import { FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.webp";

const Footer = () => {
  const footerData = [
    {
      id: "1",
      heading: "menu",
      links: [
        { id: "1", title: "Home", link: "www.web.com" },
        { id: "2", title: "Colleges", link: "www.web.com" },
        { id: "3", title: "Admission", link: "www.web.com" },
      ],
    },
    
    {
      id: "2",
      heading: "Location",
      links: [
        { id: "1", title: "Banasree"},
        { id: "2", title: "Rampura"},
        { id: "3", title: "Dhaka"},
        { id: "4", title: "Bangladesh"},
      ],
    },
    {
      id: "3",
      heading: "Contact Us",
      links: [
        { id: "1", title: "collegevilla@gamil.edu", link: "www.web.com" },
        { id: "2", title: "+009-852-693", link: "www.web.com" },
      ],
    },
  ];
  return (
    <div>
      <footer className="bg-[#292647]">
        <div className="mx-auto flex max-w-5xl flex-col px-4 md:h-72 md:flex-row md:px-8 lg:px-0">
          <div className="flex h-[16rem] flex-col justify-evenly md:h-auto md:w-[50%]">
            <div className="flex items-center">
              <img className="w-24" src={logo} alt="" />
              <h2 className="justify-self-center pl-2 text-2xl font-extrabold text-[#f39761]">
                College Villa
              </h2>
            </div>

            <p className="font-light text-gray-500 md:pr-4">
              Welcome to College Villa, your gateway to a brighter future! We
              are your one-stop destination for college admissions, offering
              personalized guidance and resources to help you navigate the
              complex admission process. Discover a vast selection of esteemed
              institutions, explore diverse programs, and take the first step
              towards your dream education. Your journey to success starts here
              at College Villa!
            </p>
            <div className="links flex gap-4">
              <Link
                href="https://twitter.com/Shehza_d_"
                className="rounded-full bg-[#f39761] p-2 text-2xl transition-transform duration-300 hover:-translate-x-[2px] hover:-translate-y-[2px]"
                target="_blank"
              >
                <FaTwitter className="text-white " />
              </Link>
              <Link
                href="https://www.linkedin.com/in/shehzadd/"
                className="rounded-full bg-[#f39761] p-2 text-2xl transition-transform duration-300 hover:-translate-x-[2px] hover:-translate-y-[2px]"
                target="_blank"
              >
                <FaLinkedinIn className="text-white  " />
              </Link>
              <Link
                href="https://www.github.com/shehza-d/"
                className="rounded-full bg-[#f39761] p-2 text-2xl transition-transform duration-300 hover:-translate-x-[2px] hover:-translate-y-[2px]"
                target="_blank"
              >
                <FaGithub className="text-white " />
              </Link>
            </div>
          </div>

          <div className="mb-4 grid min-h-[14rem] w-full grid-cols-2 justify-around capitalize md:ml-2 md:h-auto md:w-[50%] md:grid-cols-3">
            {footerData.map((item) => (
              <ul className="mt-8" key={item.id}>
                <h3 className="text-xl font-semibold text-gray-300">
                  {item.heading}
                </h3>
                {item.links.map((links) => (
                  <li
                    className="cursor-pointer text-gray-400 hover:text-[#f39761]"
                    key={links.id}
                  >
                    {links.title}
                    {/* <a href={links.link}>{links.title}</a> */}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <div className="h-6 bg-[#f39761]"></div>
      </footer>
    </div>
  );
};

export default Footer;
