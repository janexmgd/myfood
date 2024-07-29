export default function Footer() {
  return (
    <footer className='bg-gray-800 text-white py-6 mt-5'>
      <div className='container mx-auto text-center'>
        <p className='text-sm mb-2'>© made with love by janexmgd.</p>
        <div className='flex justify-center space-x-4'>
          <a href='#' className='hover:underline'>
            About Me
          </a>
          <a href='#' className='hover:underline'>
            Privacy Policy
          </a>
          <a href='#' className='hover:underline'>
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
