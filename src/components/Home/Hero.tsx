"use client"
import React, { useRef } from 'react';
import { Button } from '../ui/button';
import { ArrowRightIcon } from 'lucide-react';
import BarChat from "@/assets/hero.png";
import Image from 'next/image';
import Seta from "@/assets/seta.png"
import Robo from "@/assets/robo.png"
import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";

const Hero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"]
  });

  const translateYSeta = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const translateXRobo = useTransform(scrollYProgress, [0, 1], [0, 75]);

  return (
    <section className='p-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#2e51d3,#eaeefe_100%)] py-20'>
      <div className='container mx-auto px-4'>
        <div className='md:flex items-center'>
          <div className='md:w-1/2 text-center md:text-left'>
            <div className='text-sm inline-flex border border-[#222]/10 px-3 py-1 rounded-lg tracking-tight mb-4'>
              Seu negócio Tradicional e Digital em um só lugar.
            </div>
            <h1 className='text-6xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001e80] text-transparent bg-clip-text mb-6'>
              A MELHOR INOVAÇÃO PARA O SEU NEGÓCIO
            </h1>
            <p className='text-xl text-[#010d3f] tracking-tight mb-8'>
              A análise de dados, aliada à inovação e tecnologia, impulsiona a transformação digital, proporcionando insights poderosos que orientam decisões estratégicas e criam novas oportunidades para empresas se destacarem no mercado.
            </p>
            <div className='flex flex-col md:flex-row gap-4 items-center justify-center md:justify-start'>
              <Button className="bg-blue-800 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-blue-900">
                Saiba Mais
              </Button>
              <Button className="bg-transparent text-blue-800 px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-blue-800 hover:text-white">
                <span>Comece Já</span>
                <ArrowRightIcon className='h-5 w-5' />
              </Button>
            </div>
          </div>
          <div className='mt-20 md:mt-0 md:h-[648px] md:flex-1 relative'>
            <motion.img
              src={BarChat.src}
              alt='hero image'
              className='md:absolute md:h-full md:w-auto md:max-w-none'
              animate={{
                translateY: [-30, 30],
              }}
              transition={{
                repeat: Infinity,
                repeatType: 'mirror',
                duration: 2,
                ease: 'easeInOut'
              }}
            />
            <motion.img
              src={Seta.src}
              width={160}
              height={160}
              alt='seta hero'
              className='hidden md:block absolute top-8 right-120'
              style={{ translateY: translateYSeta }}
              transition={{ ease: "easeOut", duration: 2 }}
            />
            <motion.img
              src={Robo.src}
              alt='robo hero'
              width={160}
              className='hidden lg:block absolute top-[524px] left-[448px] rotate-[15deg]'
              style={{ translateX: translateXRobo }}
              transition={{ ease: "easeOut", duration: 2 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
