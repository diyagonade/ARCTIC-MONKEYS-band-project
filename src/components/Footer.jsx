import { Music, Youtube, Instagram, Facebook } from 'lucide-react';

export function Footer() {
  const socialLinkClass = "hover:text-gray-300 transition-colors";

  return (
    <footer 
      className="bg-black text-white py-12"
    >
      <div className="container mx-auto px-6">
        <div 
          className="flex flex-col items-center space-y-6"
        >
          <div className="flex items-center gap-2">
            <Music className="w-8 h-8" />
            <span className="text-3xl font-bold">Arctic Monkeys</span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="#"
              className={socialLinkClass}
              aria-label="YouTube"
            >
              <Youtube className="w-6 h-6" />
            </a>
            <a
              href="#"
              className={socialLinkClass}
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="#"
              className={socialLinkClass}
              aria-label="Facebook"
            >
              <Facebook className="w-6 h-6" />
            </a>
          </div>

          <p className="text-sm text-gray-400">
            © 2024 Arctic Monkeys. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}