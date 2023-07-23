import React from "react";
import logo from "../../../assets/logo.webp";
import {
  Navbar,
  MobileNav,
  Typography,
  IconButton,
  Input,
  Button,
} from "@material-tailwind/react";
import useAuth from "../../../hook/useAuth";

const NavBar = () => {
  const [openNav, setOpenNav] = React.useState(false);
  const { user, logOut } = useAuth();
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="/" className="flex items-center">
          Home
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="colleges" className="flex items-center">
          Colleges
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="admission" className="flex items-center">
          Admission
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="admission" className="flex items-center">
          My College
        </a>
      </Typography>
      {user ? (
            <div className="flex items-center gap-3">
              <Typography to="/profile" className="hover:text-gray-800 cursor-pointer">{user?.displayName}</Typography>
              <ul>
                <Typography
                  onClick={handleLogOut}
                  className="bg-[#159A9C] text-white py-2 px-5 rounded-md hover:text-gray-200"
                >
                  Logout
                </Typography>
              </ul>
            </div>
          ) : (
            <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="login" className="flex items-center">
          Sign-In
        </a>
      </Typography>
          )}
      
    </ul>
  );
  return (
    <>
      <Navbar className="sticky bg-blend-overlay top-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4 shadow-xl">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="/"
            className="mr-4 cursor-pointer py-1.5 font-medium"
          >
            <img
            className="w-40"
              alt="college villa"
              src={logo}
            />
          </Typography>
          <div className="relative flex w-full gap-2 md:w-max">
          <Input
            type="search"
            label="Type here..."
            className="pr-20"
            containerProps={{
              className: "min-w-[288px]",
            }}
          />
          <Button size="sm" color="indigo" className="!absolute right-1 top-1 rounded">
            Search
          </Button>
        </div>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>{navList}</MobileNav>
      </Navbar>
    </>
  );
};

export default NavBar;
