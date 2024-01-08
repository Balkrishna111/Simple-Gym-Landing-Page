const Contact = () => {
  return (
    <div className='w-full h-screen bg-gradient-to-b from-red-950 to-gray-500  flex flex-col justify-center items-center text-white px-16 md:px-48'>
      <h1 className='text-4xl font-logoFont underline mx-auto text-center  mb-8'>
        Contact
      </h1>

      <div name='Contact' className='form-container w-10/12 sm:w-[500px]'>
        <form action='' className='flex flex-col items-center' id='form'>
          <input
            type='text'
            name='name'
            placeholder='Enter your name...'
            className='w-full px-4 py-2 rounded-lg bg-transparent  border'
          />
          <input
            type='text'
            name='email'
            placeholder='Enter your Email...'
            className='w-full px-4 py-2 rounded-lg my-8 bg-transparent  border'
          />
          <textarea
            placeholder='Enter a messege...'
            name='text'
            className='w-full px-4 py-2 rounded-lg bg-transparent  border'
            rows='6'
          ></textarea>
          <button
            type='submit'
            className='bg-white py-2 px-8 text-gray-500 rounded-lg my-8 hover:bg-gray-100'
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};
export default Contact;
