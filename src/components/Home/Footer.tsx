import Image from 'next/image';
import React from 'react';
import Logo from "@/assets/logo.png";
import { Github, Instagram, Linkedin, X, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-[#bcbcbc] text-sm text-center py-10">
      <div className="container flex flex-col items-center">
        {/* Logo centralizado */}
        <div className="relative">
          <Image src={Logo} height={120} alt="Stark Inova Logo" />
        </div>

        {/* Navegação em linha */}
        <nav className="flex gap-6 mt-6">
          <a href="#" className="hover:text-gray-400 transition-colors">Sobre</a>
          <a href="#" className="hover:text-gray-400 transition-colors">Valores</a>
          <a href="#" className="hover:text-gray-400 transition-colors">Serviços</a>
          <a href="#" className="hover:text-gray-400 transition-colors">Clientes</a>
          <a href="#" className="hover:text-gray-400 transition-colors">Contato</a>
        </nav>

        {/* Redes sociais organizadas */}
        <div className="flex gap-6 mt-6">
          <a href="#" className="hover:text-gray-400 transition-colors"><X /></a>
          <a href="#" className="hover:text-gray-400 transition-colors"><Instagram /></a>
          <a href="#" className="hover:text-gray-400 transition-colors"><Linkedin /></a>
          <a href="#" className="hover:text-gray-400 transition-colors"><Youtube /></a>
          <a href="#" className="hover:text-gray-400 transition-colors"><Github /></a>
        </div>

        {/* Copyright */}
        <p className="mt-6">
          &copy; 2025 <a href="https://paulotech.vercel.app/" className="hover:text-blue-800 text-bold transition-colors">PauloTech</a> Inc, direitos de criação
        </p>
      </div>
    </footer>
  );
};

export default Footer;
