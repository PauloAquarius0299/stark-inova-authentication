'use client'
import React, { useRef } from 'react'
import { Button } from '../ui/button'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Robot from "@/assets/robot.png"
import Robot2 from "@/assets/robot2.png"
import {motion, useScroll, useTransform} from 'framer-motion'

const SignToPage = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const translateY = useTransform(scrollYProgress, [0,1], [150, -150]);

  return (
    <section ref={sectionRef} className='p-8 pb-20 md:pt-5 md:pb-10 py-20 bg-gradient-to-b from-white to-[#d2dcff]'>
      <div className='container'>
        <div className='section-heading relative'>
            <h2 className='section-title'>Cadastre e tenha acesso a pacotes grátis</h2>
            <p className='section-description'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto repellendus odit cupiditate? Reiciendis dolorum veritatis quia culpa pariatur! Eligendi iste aspernatur ab excepturi qui quae expedita vero magnam debitis perspiciatis.
            </p>
            <motion.img
            src={Robot.src}
            alt='robot image'
            width={360}
            className='absolute hidden md:block -left-[350px] -top-[80px]'
            style={{
              translateY,
            }}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2, ease: 'easeOut' }}
            />
            <motion.img
            src={Robot2.src}
            alt='robot2 image'
            width={360}
            className='absolute hidden md:block -right-[331px] -top-[19px]'
            style={{
              translateY,
            }}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2, ease: 'easeOut' }}
            />
        </div>
        <div className='flex gap-2 mt-10 justify-center'>
            <Button className='btn-primary'>Acesse já</Button>
            <Button className="bg-transparent text-blue-800 px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-blue-800 hover:text-white">Saiba mais
                <ArrowRight />
            </Button>
        </div>
      </div>
    </section>
  )
}

export default SignToPage
