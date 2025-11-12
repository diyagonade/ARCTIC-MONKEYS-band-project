import { Music, ShoppingCart } from 'lucide-react';

export function Header({ cartItemCount, onCartClick }) {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      // Descriptive classes for fixed navigation bar styling
      className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-gray-700"
    >
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Band Logo & Name */}
        <div className="flex items-center gap-2 text-white">
          <Music className="w-8 h-8" />
          <span className="text-2xl font-bold">Arctic Monkeys</span>
        </div>

        {/* Navigation Links and Cart */}
        <div className="flex items-center gap-8">
          <button
            onClick={() => scrollToSection('home')}
            className="text-gray-300 hover:text-white font-medium transition-colors"
          >
            HOME
          </button>
          <button
            onClick={() => scrollToSection('tours')}
            className="text-gray-300 hover:text-white font-medium transition-colors"
          >
            TOURS
          </button>
          <button
            onClick={() => scrollToSection('store')}
            className="text-gray-300 hover:text-white font-medium transition-colors"
          >
            STORE
          </button>
          
          {/* Cart Button with Item Count Badge */}
          <button
            onClick={onCartClick}
            className="relative text-gray-300 hover:text-white transition-colors"
          >
            <ShoppingCart className="w-6 h-6" />
            {cartItemCount > 0 && (
              <span 
                className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold"
              >
                {cartItemCount}
              </span>
            )}
          </button>
        </div>
      </nav>
    </header>
  );
}