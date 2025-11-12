import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { ShoppingCart } from 'lucide-react';

function ProductCard({ product, onAddToCart }) {
  return (
    <div 
      // Card appearance and hover effect
      className="group bg-white rounded-lg overflow-hidden shadow-sm 
                 transition-all transform hover:-translate-y-2 hover:shadow-xl"
    >
      <div 
        // Image container with aspect ratio
        className="aspect-square bg-gray-100 overflow-hidden"
      >
        <img
          src={product.image_url}
          alt={product.name}
          // Image zoom effect on hover
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      <div className="p-4 space-y-3">
        <h4 className="font-semibold text-lg text-gray-800">{product.name}</h4>
        <p className="text-2xl font-bold text-gray-900">
          ${product.price.toFixed(2)}
        </p>

        <button
          onClick={() => onAddToCart(product)}
          // Clear CTA styling: Full width, dark background
          className="w-full flex items-center justify-center gap-2 px-4 py-3 
                     bg-black text-white font-bold rounded-lg 
                     transition-colors hover:bg-gray-800"
        >
          <ShoppingCart className="w-4 h-4" />
          ADD TO CART
        </button>
      </div>
    </div>
  );
}

export function Store({ onAddToCart }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      // Supabase integration logic remains the same
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .order('type', { ascending: true });

      if (error) throw error;
      setProducts(data || []);
    } catch (error) {
      console.error('Error loading products:', error);
    } finally {
      setLoading(false);
    }
  };

  const albums = products.filter((p) => p.type === 'album');
  const merch = products.filter((p) => p.type === 'merch');

  if (loading) {
    return (
      <section id="store" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-16">ARCTIC MONKEYS STORE</h2>
          <div className="text-center text-gray-500">Loading products...</div>
        </div>
      </section>
    );
  }

  return (
    <section id="store" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-16">ARCTIC MONKEYS STORE</h2>

        <div className="max-w-6xl mx-auto space-y-16">
          
          {/* MUSIC / ALBUMS Section */}
          <div>
            <h3 className="text-3xl font-bold mb-8 text-center">OFFICIAL MUSIC RELEASES</h3>
            <div 
              // Responsive grid layout for products
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {albums.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={onAddToCart}
                />
              ))}
            </div>
          </div>

          {/* MERCHANDISE Section */}
          <div>
            <h3 className="text-3xl font-bold mb-8 text-center">OFFICIAL MERCHANDISE</h3>
            <div 
              // Responsive grid layout for products
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {merch.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={onAddToCart}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}