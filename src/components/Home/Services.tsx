import React from 'react'
import { Button } from '../ui/MovingBorders';
import ser1 from "@/assets/ser1.png"
import ser2 from "@/assets/ser2.png"
import ser3 from "@/assets/ser3.png"
import ser4 from "@/assets/ser5.png"
import Image from 'next/image';

export const workExperience = [
    {
      id: 1,
      title: "Análise de Dados",
      desc: "Coletar, processar e interpretar informações para ajudar as empresas a tomar decisões mais informadas. Analistas de dados utilizam ferramentas e técnicas estatísticas para transformar grandes volumes de dados em insights acionáveis.",
      className: "md:col-span-2 p-2",
      thumbnail: ser1,
    },
    {
      id: 2,
      title: "Plano de Saúde",
      desc: "Oferecemos planos de saúde completos que cobrem tanto os profissionais quanto suas famílias. Com acesso a consultas médicas, exames e tratamentos, garantimos o bem-estar e a tranquilidade dos nossos colaboradores e seus entes queridos.",
      className: "md:col-span-2 p-2",
      thumbnail: ser3,
    },
    {
      id: 3,
      title: "Desenvolvimento Web",
      desc: "Desenvolver websites envolve criar e programar soluções digitais, seja por meio de código customizado ou utilizando plataformas como o WordPress. O foco é construir sites responsivos, rápidos e funcionais para atender às necessidades dos usuários e clientes.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: ser4,
    },
    {
      id: 4,
      title: "Serviço de Automação",
      desc: "A automação de processos visa melhorar a eficiência e reduzir erros ao automatizar tarefas repetitivas. Implementamos soluções que otimizam processos empresariais, economizando tempo e recursos, e permitindo que a equipe foque em atividades mais estratégicas.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: ser2,
    },
  ];
const Service = () => {
    return (
        <section className='p-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_top_left,#5a79e9,#eaeefe_100%)] py-20' >
            <h1 className='section-title'>
               Nossos Serviços
            </h1>
            <p className='section-description'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, vel.
            </p>
            <div className='w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10'>
                {workExperience.map((card) => (
                    <Button
                    key={card.id}
                    duration={Math.floor(Math.random() * 10000) + 10000}
                    borderRadius='1.75rem'
                    className='flex-1 text-white border-neutral-200 dark:border-slate-800'
                    >
                        <div>
                        <Image
                         src={card.thumbnail}
                         alt={card.thumbnail}
                         className="lg:w-32 md:w-20 w-16 ml-2"
                           />
                           <div className='lg:ms-5'>
                            <h1 className='text-start text-xl md:text-2xl font-bold'>
                                {card.title}
                            </h1>
                            <p className='text-start text-blue-500 mt-3 font-semibold'>
                                {card.desc}
                            </p>
                           </div>
                        </div>
                    </Button>
                ))}
            </div>
        </section>
  )
}

export default Service
