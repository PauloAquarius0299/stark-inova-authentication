"use client";
import { useState } from "react";
import Image from "next/image";
import { ArrowRight, MenuIcon, X } from "lucide-react";
import Logo from "@/assets/logo.png";
import { useRouter } from "next/navigation";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter(); 

  const redirectToSignup = () => {
    router.push('/signup'); 
  }

  return (
    <header className="sticky top-0 w-full bg-white shadow-md z-50">
      <div className="bg-black text-white text-sm py-2 flex justify-center gap-3">
        <p className="text-white/60">Seu negócio Tradicional e Digital em um só lugar.</p>
        <div className="inline-flex gap-1 items-center">
            Comece já!
            <ArrowRight className="h-4 w-4" aria-label="Seta para a direita" />
        </div>
      </div>
      <div className="py-4">
        <div className="container mx-auto flex items-center justify-between px-4 md:px-6">
          <Image src={Logo} alt="Logo" height={60} width={60} />
          <nav className="hidden md:flex gap-6 text-black/60 items-center">
            <a href="#" className="hover:text-black">Sobre</a>
            <a href="#" className="hover:text-black">Valores</a>
            <a href="#" className="hover:text-black">Serviços</a>
            <a href="#" className="hover:text-black">Clientes</a>
            <a href="#" className="hover:text-black">Contato</a>
            <button className="bg-black text-white px-4 py-2 rounded-lg font-medium flex items-center justify-center">
              Se Cadastre
              <ArrowRight className="h-4 w-4 ml-1" aria-label="Seta para a direita" />
            </button>
          </nav>
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir Menu"
          >
            {menuOpen ? <X className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md md:hidden">
          <nav className="flex flex-col items-center gap-4 py-4 text-black">
            <a href="#" className="hover:text-gray-700">Sobre</a>
            <a href="#" className="hover:text-gray-700">Valores</a>
            <a href="#" className="hover:text-gray-700">Serviços</a>
            <a href="#" className="hover:text-gray-700">Clientes</a>
            <a href="#" className="hover:text-gray-700">Contato</a>
            <button className="bg-black text-white px-4 py-2 rounded-lg font-medium flex items-center justify-center"
            onClick={redirectToSignup}
            >
              Se Cadastre
              <ArrowRight className="h-4 w-4 ml-1" aria-label="Seta para a direita" />
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
