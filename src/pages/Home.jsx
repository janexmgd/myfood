import { Fragment } from 'react';
import Navbar from '../components/Navbar.jsx';
import landingImage from '../assets/images/landing_image.jpg';
import Footer from '../components/Footer.jsx';
import Card from '../components/Cards.jsx';
export default function Home() {
  return (
    <Fragment>
      <div className=''>
        <Navbar />
        <div className='md:container md:mx-auto min-w-full flex justify-center flex-col px-11'>
          <div className='relative w-full h-80'>
            <div
              className='absolute inset-0 bg-cover bg-center'
              style={{ backgroundImage: `url(${landingImage})` }}
            ></div>
            <div className='absolute inset-0 bg-black opacity-30'></div>
            <div className='relative flex items-center justify-center h-full'>
              <p className='text-5xl text-white italic'>All Recipe</p>
            </div>
          </div>
          <div className='flex w-90 justify-center align-middle min-h-80 bg-red p-16'>
            <p className='text-black italic'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec
              blandit ex. Praesent sit amet urna accumsan neque volutpat
              efficitur in eu lacus. In porttitor vel leo nec commodo.
              Vestibulum sit amet accumsan eros, sed mollis felis. Praesent
              dictum convallis vulputate. Nullam a tincidunt augue. Nulla eu
              tempor augue. Nam ac arcu hendrerit, vulputate libero et, tempor
              ex. Quisque pretium, erat ut laoreet varius, quam nisl dapibus
              leo, non aliquet felis leo in nisl. Donec leo nisl, pellentesque
              sed mauris sed, pulvinar varius lectus.
            </p>
          </div>
          <div className='flex min-w-full flex-col'>
            <p className='text-4xl italic'>Recipe</p>
            <div className='pt-6'>
              <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
                <Card image={landingImage} />
                <Card image={landingImage} />
                <Card image={landingImage} />
                <Card image={landingImage} />
              </div>
            </div>
            <div className='flex justify-end min-w-72 mt-5'>
              <a className='text-xl hover:underline italic' href=''>
                See More
              </a>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </Fragment>
  );
}
