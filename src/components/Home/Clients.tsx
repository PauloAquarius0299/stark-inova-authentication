'use client'
import React from 'react'
import avatar1 from "@/assets/avatar1.jpg"
import avatar2 from "@/assets/avatar2.jpg"
import avatar3 from "@/assets/avatar3.jpg"
import avatar4 from "@/assets/avatar4.jpg"
import avatar5 from "@/assets/avatar5.jpg"
import avatar6 from "@/assets/avatar6.jpg"
import avatar7 from "@/assets/avatar7.png"
import avatar8 from "@/assets/avatar8.jpeg"
import avatar9 from "@/assets/avatar9.jpg"
import Image from 'next/image'
import {motion} from "framer-motion"

const testimonials = [
    {
      text: "Ótimo serviço! Superou minhas expectativas em todos os aspectos.",
      imageSrc: avatar1,
      name: "Ana Souza",
      username: "Ana_Sz",
    },
    {
      text: "A qualidade do atendimento é excelente, recomendo sem dúvidas.",
      imageSrc: avatar6,
      name: "Carlos Menezes",
      username: "CarlosM",
    },
    {
      text: "Facilidade de uso e suporte eficiente. Nota 10!",
      imageSrc: avatar3,
      name: "Mariana Lima",
      username: "Mari_Lm",
    },
    {
      text: "Melhor experiência que já tive! Equipe muito atenciosa.",
      imageSrc: avatar5,
      name: "Fernando Castro",
      username: "Fer_Castro",
    },
    {
      text: "Atendimento ágil e plataforma intuitiva. Estou muito satisfeito!",
      imageSrc: avatar8,
      name: "Roberto Silva",
      username: "RobSilva",
    },
    {
      text: "Simplesmente incrível! Tudo funciona perfeitamente.",
      imageSrc: avatar2,
      name: "Juliana Pereira",
      username: "Ju_Pereira",
    },
    {
      text: "Muito profissionalismo e qualidade. Indico a todos!",
      imageSrc: avatar7,
      name: "Eduardo Martins",
      username: "EduMartins",
    },
    {
      text: "Atendimento diferenciado e muita eficiência nos processos.",
      imageSrc: avatar4,
      name: "Camila Rocha",
      username: "CamiRocha",
    },
    {
      text: "Ótimo custo-benefício, valeu cada centavo!",
      imageSrc: avatar9,
      name: "Bruno Oliveira",
      username: "Bruno_Olvr",
    },
  ];

  const firstColumn = testimonials.slice(0, 3);
  const secondColumn = testimonials.slice(3, 6);
  const thirdColumn = testimonials.slice(6, 9);

  const Clients = (props: unknown) => {
    return (
      <section className='bg-white p-8 pb-20 md:pt-5 md:pb-10 py-20'>
        <div className='container'>
          <div className='flex justify-center'>
              <div className='tag'>
                  Clientes
                  </div>
          </div>
              <h2 className='section-title'>O que eles dizem</h2>
              <p className='section-description'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur, possimus beatae! Debitis laboriosam, quam voluptatem ratione eum libero magni recusandae.
  
              </p>
              <div className='flex justify-center gap-6'>
                  <div className='flex flex-col gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black,transparent,black_25%,black_75%,transparent)]'>
                      {firstColumn.map(({text, imageSrc, name, username}) => (
                          <div className='card' key={name}>
                              <div>{text}</div>
                              <div className='flex items-center gap-2 mt-5'>
                                  <Image src={imageSrc} alt={name} width={40} height={40} className='h-10 w-10 rounded-full' />
                                  <div className='flex flex-col'>
                                      <div className='font-medium tracking-tight leading-5'>{name}</div>
                                      <div className='leading-5 tracking-tight'>{username}</div>
                                  </div>
                              </div>
                          </div>
                      ))}
                  </div>
  
                  <div className='flex flex-col gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black,transparent,black_25%,black_75%,transparent)]'>
                      {secondColumn.map(({text, imageSrc, name, username}) => (
                          <div className='card' key={name}>
                              <div>{text}</div>
                              <div className='flex items-center gap-2 mt-5'>
                                  <Image src={imageSrc} alt={name} width={40} height={40} className='h-10 w-10 rounded-full' />
                                  <div className='flex flex-col'>
                                      <div className='font-medium tracking-tight leading-5'>{name}</div>
                                      <div className='leading-5 tracking-tight'>{username}</div>
                                  </div>
                              </div>
                          </div>
                      ))}
                  </div>
  
                  <div className='flex flex-col gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black,transparent,black_25%,black_75%,transparent)]'>
                      {thirdColumn.map(({text, imageSrc, name, username}) => (
                          <div className='card' key={name}>
                              <div>{text}</div>
                              <div className='flex items-center gap-2 mt-5'>
                                  <Image src={imageSrc} alt={name} width={40} height={40} className='h-10 w-10 rounded-full' />
                                  <div className='flex flex-col'>
                                      <div className='font-medium tracking-tight leading-5'>{name}</div>
                                      <div className='leading-5 tracking-tight'>{username}</div>
                                  </div>
                              </div>
                          </div>
                      ))}
                  </div>
              </div>
          </div> 
      </section>
    )
  }

export default Clients;
