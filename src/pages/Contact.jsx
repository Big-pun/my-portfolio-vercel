import H1Contact from '../components/Contact/H1Contact'
import Form from '../components/Contact/Form'
import Socials from '../components/Contact/Socials'


function Contact() {
  return (
    <div className='container mx-auto p-4'>
      <section id='section1' className='grid grid-cols-12 md:min-h-screen'>
        <div className='col-span-12 md:col-span-10 md:col-start-2 max-w-prose'>
          <H1Contact />
        </div>

        <div className='col-span-12 md:col-span-10 md:col-start-2 my-8'>
          <Socials />
        </div>

        <div className='col-span-12 md:col-span-10 md:col-start-2'>
          <h2 className='text-5xl mb-12'>Send me a <span className='bg-gradient-green bg-clip-text text-transparent font-bold'>message</span></h2>
          <Form />
        </div>

      </section>
    </div>
  )
}

export default Contact
