import { Play } from 'lucide-react';

export function Hero() {
  return (
    <section
      id="home"
      // Full screen section, centered content
      className="relative h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900"
    >
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-20"
      ></div>

      {/* Main Hero Content */}
      <div className="relative z-10 text-center space-y-8 px-6">
        <h1 
          // Large, bold, white text for the band name
          className="text-7xl md:text-9xl font-bold text-white tracking-tight"
        >
          ARCTIC MONKEYS
        </h1>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button 
            // Primary Button: White background, black text
            className="group px-8 py-4 bg-white text-black font-bold rounded-full 
                       transition-all transform hover:scale-105 hover:bg-gray-200"
          >
            Get Our Latest Album
          </button>

          <button 
            // Secondary/Outline Button: White border, white text
            className="flex items-center gap-2 px-8 py-4 border-2 border-white text-white font-bold rounded-full 
                       transition-all transform hover:scale-105 hover:bg-white hover:text-black"
          >
            <Play className="w-5 h-5" />
            Watch Video
          </button>
        </div>
      </div>
    </section>
  );
}