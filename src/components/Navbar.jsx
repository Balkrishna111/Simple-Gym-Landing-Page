import { useState } from "react";
import { RiMenuLine } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-scroll";

const Navbar = () => {
  const [navStatus, setNavStatus] = useState(false);

  const navLinks = [
    {
      name: "Home",
    },
    {
      name: "About",
    },
    {
      name: "Services",
    },
    {
      name: "Plan",
    },
    {
      name: "Contact",
    },
  ];
  return (
    <>
      <div className='fixed w-full bg-gray-950 px-8 py-4 flex justify-between items-center z-20'>
        <div className='text-4xl logo font-logoFont md:text-5xl  text-white'>
          GYM
        </div>

        <div className='nav-links md:text-gray-200'>
          <div className='hamburgerMenu md:hidden '>
            {navStatus ? (
              <RxCross2
                className='text-white cursor-pointer'
                size={30}
                onClick={() => setNavStatus(!navStatus)}
              />
            ) : (
              <RiMenuLine
                className=' text-white cursor-pointer z-10'
                size={30}
                onClick={() => setNavStatus(!navStatus)}
              />
            )}
          </div>
          <ul className='hidden md:flex justify-evenly gap-8'>
            {navLinks.map((item, index) => (
              <Link
                key={index}
                className='cursor-pointer'
                to={item.name}
                smooth
                duration={500}
              >
                {item.name}
              </Link>
            ))}
          </ul>
        </div>
      </div>

      {navStatus && (
        <div className='z-10 fixed w-screen h-full bottom-0 bg-gray-950 flex flex-col justify-center items-center text-4xl text-gray-200 text-center'>
          <ul className='flex flex-col'>
            {navLinks.map((item, index) => (
              <Link
                key={index}
                className='cursor-pointer my-10'
                onClick={() => setNavStatus(!navStatus)}
                to={item.name}
                smooth
                duration={500}
              >
                {item.name}
              </Link>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};
export default Navbar;
