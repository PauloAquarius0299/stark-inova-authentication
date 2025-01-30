import Image from 'next/image'
import React from 'react'
import product from "@/assets/product-image.png"
import Guy from "@/assets/laptop2.png"
import Mundo from "@/assets/mundo.png"

const ProductShowcase = () => {
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
            <Image
            src={product}
            alt='product hero imagem'
            className='mt-10'
            />
            <Image 
            src={Guy}
            alt='Guy in laptop'
            width={340}
            height={340}
            className='absolute hidden md:block -right-36 -top-32'
            />
            <Image 
            src={Mundo}
            alt='Guy in world'
            width={380}
            height={380}
            className='absolute hidden md:block -bottom-20 -left-15'
            />
        </div>
      </div>
    </section>
  )
}

export default ProductShowcase
