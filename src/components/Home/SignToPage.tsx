import React from 'react'
import { Button } from '../ui/button'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Robot from "@/assets/robot.png"
import Robot2 from "@/assets/robot2.png"

const SignToPage = () => {
  return (
    <section className='p-8 pb-20 md:pt-5 md:pb-10 py-20 bg-gradient-to-b from-white to-[#d2dcff]'>
      <div className='container'>
        <div className='section-heading relative'>
            <h2 className='section-title'>Cadastre e tenha acesso a pacotes grátis</h2>
            <p className='section-description'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto repellendus odit cupiditate? Reiciendis dolorum veritatis quia culpa pariatur! Eligendi iste aspernatur ab excepturi qui quae expedita vero magnam debitis perspiciatis.
            </p>
            <Image
            src={Robot}
            alt='robot image'
            width={360}
            className='absolute hidden md:block -left-[350px] -top-[80px]'
            />
            <Image
            src={Robot2}
            alt='robot2 image'
            width={360}
            className='absolute hidden md:block -right-[331px] -top-[19px]'
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
