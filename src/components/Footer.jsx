import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { BsThreads } from "react-icons/bs";

const Footer = () => {
  const footerLinks = [
    {
      name: "Facebook",
      img: <FaFacebook />,
    },
    {
      name: "Instagram",
      img: <FaInstagram />,
    },
    {
      name: "Twitter",
      img: <FaTwitter />,
    },
    {
      name: "Threads",
      img: <BsThreads />,
    },
  ];

  return (
    <div className='w-full bg-gray-950 text-gray-200 text-sm'>
      <ul className='w-full flex justify-center items-center'>
        {footerLinks.map((items, index) => (
          <li
            key={index}
            className='flex flex-row p-2 m-2 w-1/5 justify-center items-center'
          >
            {items.img}
            <p className='mx-1'>{items.name}</p>
          </li>
        ))}
      </ul>
      <div className='copyright py-1 text-center'>
        All copyrights reserved.&copy;
      </div>
    </div>
  );
};
export default Footer;
