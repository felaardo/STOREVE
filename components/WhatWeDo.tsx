"use client";

import { motion, type Variants } from "framer-motion";

const services = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3" />
      </svg>
    ),
    title: "Landing pages y sitios web",
    description:
      "Diseñamos páginas rápidas, profesionales y optimizadas para convertir visitantes en clientes. Listas en 7 días.",
    highlight: "Entrega en 7 días",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
      </svg>
    ),
    title: "Chatbots con IA",
    description:
      "Configuramos asistentes inteligentes que responden consultas, agendan turnos y atienden a tus clientes en automático por WhatsApp o tu web.",
    highlight: "Disponible 24/7 sin intervención humana",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function WhatWeDo() {
  return (
    <section id="what-we-do" className="py-12 md:py-24 px-4 md:px-6 relative">
      <div className="section-divider mb-24" />

      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-4">
            Qué Hacemos
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-5">
            Dos servicios.{" "}
            <span className="gradient-text">Un solo objetivo.</span>
          </h2>
          <p className="text-slate-400 text-sm md:text-lg max-w-xl mx-auto">
            Que tu negocio tenga presencia profesional online y que tus clientes
            sean atendidos en automático.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6"
        >
          {services.map((service, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className="glass-card rounded-2xl p-8 group cursor-default transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-6 group-hover:bg-blue-600/20 group-hover:border-blue-500/40 transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-slate-400 leading-relaxed mb-6">
                {service.description}
              </p>
              <div className="flex items-center gap-2 text-cyan-400 text-sm font-medium">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                </svg>
                {service.highlight}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
