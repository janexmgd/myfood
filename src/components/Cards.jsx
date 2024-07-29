export default function Cards({ image }) {
  return (
    <div className='bg-white shadow-neutral-600 shadow-sm rounded-lg overflow-hidden min-h-60'>
      <img
        className='w-full h-40 object-cover'
        src={image}
        alt='Gambar Resep'
      />
      <div className='p-4'>
        <h3 className='text-xl font-semibold'>Judul Resep</h3>
      </div>
    </div>
  );
}
