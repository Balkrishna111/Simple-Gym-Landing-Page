import { useForm } from "react-hook-form";

const Contact = () => {
  const form = useForm({
    defaultValues: {
      name: "",
      details: { email: "", text: "" },
    },
    mode: "onTouched",
  });
  const { register, handleSubmit, formState, reset } = form;
  const { errors, isDirty, isValid, isSubmitting } = formState;

  const submitForm = (data) => {
    console.log("form submitted: ", data);
    reset();
  };
  return (
    <div className='pt-20 w-full h-full bg-gradient-to-b from-red-950 to-gray-500  flex flex-col justify-center items-center text-white px-16 md:px-48'>
      <h1 className='text-4xl font-logoFont underline mx-auto text-center  mb-8'>
        Contact
      </h1>

      <div name='Contact' className='form-container w-10/12 sm:w-[500px]'>
        <form
          action=''
          className='flex flex-col items-center'
          id='form'
          onSubmit={handleSubmit(submitForm)}
        >
          <label htmlFor='name'></label>
          <input
            type='text'
            name='name'
            id='name'
            {...register("name", {
              required: "Enter a proper Name.",
            })}
            placeholder='Enter your name...'
            className='w-full px-4 py-2 rounded-lg bg-transparent  border'
          />
          <p className='text-red-400 font-bold my-4 text-xs'>
            {errors.name?.message}
          </p>
          <label htmlFor='email'></label>
          <input
            type='text'
            name='email'
            id='email'
            {...register("details.email", {
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Enter a valid E-mail Address",
              },
            })}
            placeholder='Enter your Email...'
            className='w-full px-4 py-2 rounded-lg my-8 bg-transparent  border'
          />
          <p className='text-red-400 font-bold my-4 text-xs'>
            {errors.email?.message}
          </p>

          <label htmlFor='text'></label>
          <textarea
            placeholder='Enter a messege...'
            name='text'
            id='text'
            {...register("details.text", {
              required: "Enter some Text.",
            })}
            className='w-full px-4 py-2 rounded-lg bg-transparent  border'
            rows='6'
          ></textarea>
          <p className='text-red-400 font-bold my-4 text-xs'>
            {errors.text?.message}
          </p>
          <button
            disabled={!isDirty || !isValid || isSubmitting}
            onSubmit={submitForm}
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
