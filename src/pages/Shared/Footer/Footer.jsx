import { FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  const footerData = [
    {
      id: "1",
      heading: "home",
      links: [
        { id: "1", title: "discover", link: "www.web.com" },
        { id: "2", title: "explore", link: "www.web.com" },
        { id: "3", title: "join", link: "www.web.com" },
      ],
    },
    {
      id: "2",
      heading: "company",
      links: [
        { id: "1", title: "corporation", link: "www.web.com" },
        { id: "2", title: "fashions", link: "www.web.com" },
        { id: "3", title: "about us", link: "www.web.com" },
      ],
    },
    {
      id: "3",
      heading: "features",
      links: [
        { id: "1", title: "shop", link: "www.web.com" },
        { id: "2", title: "cart", link: "www.web.com" },
        { id: "3", title: "notification", link: "www.web.com" },
        { id: "4", title: "sales", link: "www.web.com" },
      ],
    },
    {
      id: "4",
      heading: "Contact Us",
      links: [
        { id: "1", title: "Privacy & Policy", link: "www.web.com" },
        { id: "2", title: "+009-852-693", link: "www.web.com" },
      ],
    },
  ];
  return (
    <div>
      <footer className="mt-6 bg-[#292647]">
        <div className="mx-auto flex max-w-5xl flex-col px-4 md:h-72 md:flex-row md:px-8 lg:px-0">
          <div className="flex h-[16rem] flex-col justify-evenly md:h-auto md:w-[50%]">
            <div className="flex items-center">
              <h2 className="justify-self-center pl-2 text-2xl font-extrabold text-[#f39761]">
                Classy Closet
              </h2>
            </div>

            <p className="font-light text-gray-500 md:pr-4">
              Looking for an e-commerce website? We offer a turn key e-commerce
              website with the latest technology. Get your online store today!
              Small, artisan label that offers a thoughtfully curated collection
              of high quality everyday essentials made. high quality everyday
              essentials.
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

          <div className="mb-4 grid min-h-[14rem] w-full grid-cols-2 justify-around capitalize md:ml-2 md:h-auto md:w-[50%] md:grid-cols-4">
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
