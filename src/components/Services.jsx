import instructorImg from "../assets/servicesImages/instructor.jpg";
import img1 from "../assets/servicesImages/img1.avif";
import img2 from "../assets/servicesImages/img2.avif";
import img3 from "../assets/servicesImages/img3.avif";
import img4 from "../assets/servicesImages/img4.jpg";
import img5 from "../assets/servicesImages/img5.jpg";

const Services = () => {
  const serviceData = [
    {
      title: "Trained Instructors",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis omnis harum architecto a possimus sint",
      src: instructorImg,
    },
    {
      title: "Bulk Exercise",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis omnis harum architecto a possimus sint",
      src: img1,
    },
    {
      title: "Jumba",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis omnis harum architecto a possimus sint",
      src: img2,
    },
    {
      title: "Modern Equipments",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis omnis harum architecto a possimus sint",
      src: img3,
    },
    {
      title: "Community",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis omnis harum architecto a possimus sint",
      src: img4,
    },
    {
      title: "Any age group",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis omnis harum architecto a possimus sint",
      src: img5,
    },
  ];

  return (
    <div
      name='Services'
      className='pt-20 w-full h-full bg-gradient-to-b from-red-950 to-gray-500  flex flex-col justify-center items-center text-white px-16 md:px-48'
    >
      <h1 className='text-4xl font-logoFont underline mx-auto text-center mb-20'>
        Services
      </h1>

      <div className='mt-10 container flex flex-col lg:flex-wrap lg:flex-row lg:justify-center'>
        {serviceData.map((data, index) => (
          <div
            key={index}
            className='card h-40 mb-28  flex md:mr-8 xl:w-[40%]  sm:mb-16'
          >
            <div className='w-1/3  flex justify-center items-center md:w-1/2 '>
              <img src={data.src} alt='img' className='h-full' />
            </div>
            <div className='w-2/3  pl-2 flex justify-center  flex-col'>
              <h1 className='font-bold underline mb-2'>{data.title}</h1>
              <p className='text-gray-300'>{data.info}</p>
            </div>
          </div>
        ))}
      </div>

      {/* <div className='services-container md:flex md:flex-wrap'>
        {serviceData.map((data, index) => (
          <div
            key={index}
            className='bg-gray-300 mb-8 service-card w-[100%]  flex justify-between items-center py-0 md:w-21/'
          >
            <div className='img w-1/3 md:w-2/3'>
              <img src={data.src} alt={data.title} />
            </div>
            <div className='content w-2/3 ml-8'>
              <h1 className='font-bold underline mb-2'>{data.title}</h1>
              <p className='text-gray-300'>{data.info}</p>
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
};
export default Services;
