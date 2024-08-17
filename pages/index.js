export default function ComingSoon() {
    return (
      <div
        className="min-h-screen w-full flex flex-col items-center justify-center bg-gray-900 text-white"
        style={{
          backgroundImage: 'url("/ladybg.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="bg-black bg-opacity-60 p-10 rounded-lg shadow-lg text-center">
          <h1 className="text-5xl font-bold mb-4">Coming Soon</h1>
          <p className="text-lg mb-8">We're working hard to bring something amazing. Stay tuned!</p>
          <div className="mt-6">
            <a 
              href="https://x.com/ladybtc_" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded"
            >
              Follow Us on X
            </a>
          </div>
        </div>
      </div>
    );
  }
  