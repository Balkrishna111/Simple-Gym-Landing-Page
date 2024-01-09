import bulkImg from "../assets/plansImage/bulking.webp";
import zumbaImg from "../assets/plansImage/zumbaImg.jpg";
import calistheticImg from "../assets/plansImage/calistheticImg.jpg";
import { TiTick } from "react-icons/ti";

const Plans = () => {
  const plansData = [
    {
      title: "Jumba Plan",
      price: 39.99,
      style: "bg-gradient-to-br from-gray-500 to-gray-800",
      img: zumbaImg,
    },
    {
      title: "Heavy Weights/Bulking",
      price: 45.99,
      style: "bg-gradient-to-br from-orange-300 to-orange-800",
      img: bulkImg,
    },
    {
      title: "Calisthetic Plan",
      price: 29.99,
      style: "bg-gradient-to-br from-gray-500 to-gray-800",
      img: calistheticImg,
    },
  ];

  const plan1Content = [
    "Lorem ipsum dolor sit amet.",
    "Lorem ipsum dolor.",
    "Lorem ipsum dolor sit amet.",
    "Lorem ipsum dolor sit.",
    "Lorem ipsum.",
    "Lorem ipsum dolor sit .",
    "Lorem .",
  ];

  return (
    <div
      name='Plan'
      className='w-full h-[100%] pt-20 bg-gradient-to-b from-gray-500 to-red-950  flex flex-col justify-center items-center text-white '
    >
      <h1 className='text-4xl font-logoFont underline mx-auto text-center  mb-20'>
        Plans
      </h1>
      <div className='plans-container w-full flex flex-col justify-center items-center lg:flex-row'>
        {plansData.map((item, index) => (
          <div
            key={index}
            className={
              item.style +
              "px-2 plan1 h-[80%] sm:h-[70%] w-80  rounded-lg  text-center py-4 flex justify-center items-center flex-col text-gray-200 my-4  lg: mx-4 lg:flex-wrap md:w-[40%] lg:mx-8"
            }
            // className='px-2 plan1 h-[80%] sm:h-[70%] w-80  rounded-lg bg-gradient-to-br from-orange-300 to-orange-800 text-center py-4 flex justify-center items-center flex-col text-gray-200 my-4  lg: mx-4 lg:flex-wrap md:w-[40%] lg:mx-8'
          >
            <h1 className='font-logoFont text-xl underline px-4 '>
              {item.title}
            </h1>
            <img
              src={item.img}
              alt='bulkImg'
              className='w-20 my-8 rounded-full'
            />

            <h1 className='underline mb-4'>You will be able to</h1>

            <div className='plan-list'>
              <ul className='w-full flex flex-col justify-start text-left'>
                {plan1Content.map((data, index) => (
                  <li key={index}>
                    <TiTick className='text-green-700 inline \' size={30} />
                    <p className='inline text-end'>{data}</p>
                  </li>
                ))}
              </ul>
            </div>

            <button className='px-4 py-2 my-4 bg-gradient-to-br from-blue-800 to-blue-700 rounded-xl hover:bg-gradient-to-br hover:from-blue-500 hover:to-blue-800'>
              Purchase ${item.price}/m
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Plans;
