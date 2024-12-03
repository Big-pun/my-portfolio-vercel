import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import Confirmation from './Confirmation';

function Form() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {

        const currentForm = {
            name: data.name,
            email: data.email,
            message: data.message,

        };

        emailjs
            .send(
                import.meta.env.VITE_EMAILJS_SERVICE_KEY,
                import.meta.env.VITE_EMAILJS_TEMPLATE_KEY,
                currentForm,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )
            .then(
                (response) => {
                    console.log('SUCCESS!', response.status, response.text);
                    setIsSubmitted(true);
                },
                (err) => {
                    console.log('FAILED...', err);
                },
            );
    }

    const emailRegexPattern = {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
        message: 'Invalid email address'
    };



    return (
        isSubmitted ? (
        <Confirmation />
    ) : ( 
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-center mx-auto max-w-screen-md rounded-lg shadow-lg bg-slate-600 bg-opacity-50 p-12 space-y-8' noValidate>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 w-full'>
                <div className='mb-4 flex flex-col w-2/3 md:w-full'>
                    <label htmlFor='name' className='block text-lg'>Name</label>
                    <input type='text' id='name' name='name' placeholder='Enter your name'
                        {...register('name', {
                            required: 'Please enter a name',
                            maxLength: { value: 20, message: 'Name is too long' },
                            minLength: { value: 2, message: 'Name is too short' },

                        })} className=' text-black mt-1 shadow-sm text-lg border-gray-300 rounded-md ' />
                    {errors.name && <span className='text-red-500'>{errors.name.message}</span>}
                </div>

                <div className='mb-4 mx-auto flex flex-col w-2/3 md:w-full'>
                    <label htmlFor='email' className='block text-lg'>Email</label>
                    <input type='email' id='email' name='email' placeholder='Enter your email'
                        {...register('email', {
                            required: 'Please enter an email',
                            pattern: emailRegexPattern,
                        })}
                        className='mt-1 text-black shadow-sm text-lg border-gray-300 rounded-md' />
                    {errors.email && <span className='text-red-500'>{errors.email.message}</span>}
                </div>
            </div>

            <div className='mb-8 flex flex-col w-full'>
                <label htmlFor='message' className='block text-lg'>Message</label>
                <textarea id='message' name='message' rows={4} placeholder='Enter your message'
                    {...register('message', {
                        required: 'Please enter a message',
                        minLength: { value: 10, message: 'Message is too short' },
                        maxLength: { value: 500, message: 'Message is too long' }

                    })}
                    className='mt-1 text-black block w-full shadow-sm text-lg border-gray-300 rounded-md' />
                {errors.message && <span className='text-red-500'>{errors.message.message}</span>}
            </div>

            <div>
                <button type='submit' className="rounded-lg relative flex h-[50px] w-40 items-center justify-center overflow-hidden bg-gray-800 text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-green-600 before:duration-500 before:ease-out hover:shadow-green-600 hover:before:h-56 hover:before:w-56">
                    <span className="relative z-10">Send</span>
                </button>
            </div>
        </form>
    )   
    )
}

export default Form