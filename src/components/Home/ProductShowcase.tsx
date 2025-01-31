"use client";
import Image from 'next/image'
import React, { useRef } from 'react'
import product from "@/assets/product-image.png"
import Guy from "@/assets/laptop2.png"
import Mundo from "@/assets/mundo.png"
import {motion, useScroll, useTransform} from "framer-motion";

const ProductShowcase = () => {

  const sectionRef = useRef(null);
  const {scrollYProgress} = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });

  const scaleProduct = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  return (
    <section className='p-8 pb-20 bg-gradient-to-b from-[#ffffff] to-{#d2dcff] py-24 overflow-x-clip'> 
      <div className='container'>
        <div className='max-w-full mx-auto'>
            <div className='flex justify-center'>
                <div className='tag'>Aproveite nosso produto</div>
            </div>
            <h2 className='text-center text-4xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-black to-[#001e80] text-transparent bg-clip-text'>Uma maneira mais eficaz de acompanhar o progresso</h2>
            <p className=' text-center text-[22px] leading-[30px] tracking-tight text-[#010d3e] mt-5'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores sunt velit, rerum dolor facere enim ratione? Aliquam consequuntur voluptatem quas, repellendus omnis, non repellat, commodi saepe vel laboriosam quam est.
            </p>
        </div>
        <div className='relative'>
            <motion.img
            src={product.src}
            alt='product hero imagem'
            className='mt-10'
            style={{ scale: scaleProduct }}
            transition={{ ease: "easeOut", duration: 0.5 }}
            />
            <motion.img
            src={Guy.src}
            alt='Guy in laptop'
            width={340}
            height={340}
            className='absolute hidden md:block -right-36 -top-32'
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
            src={Mundo.src}
            alt='Guy in world'
            width={380}
            height={380}
            className='absolute hidden md:block -bottom-20 -left-15'
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
        </div>
      </div>
    </section>
  )
}

export default ProductShowcase
