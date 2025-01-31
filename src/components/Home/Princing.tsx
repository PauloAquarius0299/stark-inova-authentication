'use client';

import React, { useRef } from "react";
import { Button } from "../ui/button";
import { CheckCheckIcon } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

const pricingTiers = [
  {
    title: "Negócios",
    monthlyPrice: 19,
    buttonText: "Inscreva-se agora",
    features: [
      "Até 5 membros por projeto",
      "Tarefas e projetos ilimitados",
      "200GB de armazenamento",
      "Integrações",
      "Gerente de conta dedicado",
      "Campos personalizados",
      "Análises avançadas",
      "Capacidade de exportação",
      "Acesso à API",
      "Recursos avançados de segurança",
    ],
  },
  {
    title: "Empresarial",
    monthlyPrice: 49,
    buttonText: "Experimente grátis",
    features: [
      "Até 20 membros por projeto",
      "Tarefas e projetos ilimitados",
      "1TB de armazenamento",
      "Integrações premium",
      "Gerente de conta exclusivo",
      "Campos personalizados avançados",
      "Relatórios detalhados",
      "Exportação de dados em tempo real",
      "Acesso total à API",
      "Segurança empresarial aprimorada",
    ],
  },
  {
    title: "Corporativo",
    monthlyPrice: 99,
    buttonText: "Fale com um especialista",
    features: [
      "Membros ilimitados por projeto",
      "Tarefas e projetos ilimitados",
      "Armazenamento ilimitado",
      "Integrações personalizadas",
      "Gerente de conta exclusivo 24/7",
      "Fluxos de trabalho automatizados",
      "Painel de análise completo",
      "Exportação avançada e relatórios personalizados",
      "Acesso prioritário à API",
      "Segurança e conformidade de nível empresarial",
    ],
  },
];

const Pricing = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center center"],
  });

  const leftX = useTransform(scrollYProgress, [0, 1], [-200, 0]); 
  const rightX = useTransform(scrollYProgress, [0, 1], [200, 0]); 
  const centerScale = useTransform(scrollYProgress, [0, 1], [0.8, 1]); 

  return (
    <section
      ref={sectionRef}
      className="p-8 pb-20 md:pt-5 py-20 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#5a79e9,#eaeefe_100%)]"
    >
      <div className="container mx-auto">
        <h2 className="text-center text-4xl font-bold">Planos</h2>
        <p className="text-center text-gray-600 mt-2">
          Escolha o melhor plano para o seu negócio
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {pricingTiers.map(({ title, monthlyPrice, buttonText, features }, index) => (
            <motion.div
              key={title}
              className={`p-10 rounded-3xl shadow-lg text-center border ${
                title === "Empresarial"
                  ? "bg-black text-white border-gray-700"
                  : "bg-white text-gray-900 border-gray-200"
              }`}
              style={{
                x: index === 0 ? leftX : index === 2 ? rightX : 0,
                scale: index === 1 ? centerScale : 1,
              }}
            >
              <h3 className="text-lg font-bold">{title}</h3>
              <div className="flex justify-center items-baseline gap-1 mt-4">
                <motion.span
                  className="text-4xl font-bold tracking-tighter leading-none"
                  animate={{
                    backgroundPositionX: "-100%",
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "linear",
                    repeatType: "loop",
                  }}
                >
                  ${monthlyPrice}
                </motion.span>
                <span className="tracking-tight font-bold text-black/50">/mês</span>
              </div>
              <Button
                className={`btn-primary w-full mt-6 ${
                  title === "Empresarial" ? "bg-white text-black hover:bg-gray-300" : ""
                }`}
              >
                {buttonText}
              </Button>
              <ul className="flex flex-col gap-3 mt-6">
                {features.map((feature, index) => (
                  <li key={index} className="text-sm flex items-center gap-3">
                    <CheckCheckIcon className="w-5 h-5 text-blue-600" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
