import gymHero2 from "../assets/heroImage2.jpg";

const Home = () => {
  return (
    <div
      name='Home'
      className='pt-60 px-8 w-full pb-20 text-white bg-gradient-to-b from-red-950 to-gray-500 flex flex-col items-center justify-center md:justify-between md:h-screen md:flex-row'
    >
      <div className='details text-center md:text-right md:w-1/2'>
        <div className='motto font-logoFont mb-4 w-full'>
          <h1 className='text-8xl'>GYM</h1>
          <p className='text-2xl'>Addicted to working out!</p>
        </div>
        <h2 className='text-xl font-bold underline mb-10'>
          We provide the best gym facilites.
        </h2>
      </div>
      <div className='images px-8'>
        <img
          src={gymHero2}
          alt='gymImage'
          className='w-[100%] rounded-xl mx-auto md:w-[90%]'
        />
      </div>
    </div>
  );
};
export default Home;
