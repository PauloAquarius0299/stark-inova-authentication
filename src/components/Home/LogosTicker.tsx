import Image from 'next/image'
import React from 'react'
import logo1 from "@/assets/logo1.png"
import logo2 from "@/assets/logo2.png"
import logo3 from "@/assets/logo3.png"
import logo4 from "@/assets/logo4.png"
import logo5 from "@/assets/logo5.png"

const LogosTicker = () => {
  return (
    <section className='py-8 bg-gray-100'>
      <div className='container'>
        <div className='flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]'>
            <div className='flex gap-14 flex-none'>
                <Image src={logo1} alt="logo parceira" className='logo-ticker-image' />
                <Image src={logo2} alt="logo parceira" className='logo-ticker-image' />
                <Image src={logo3} alt="logo parceira" className='logo-ticker-image' />
                <Image src={logo4} alt="logo parceira" className='logo-ticker-image' />
                <Image src={logo5} alt="logo parceira" className='logo-ticker-image' />
            </div>
        </div>
      </div>
    </section>
  )
}

export default LogosTicker
