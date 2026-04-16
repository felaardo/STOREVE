"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Nos contás qué necesita tu negocio",
    description:
      "Una llamada de 15 minutos es suficiente. Entendemos qué querés lograr y te explicamos qué podemos hacer por vos.",
    detail: "Llamada gratis · 15 minutos · Sin compromiso",
    icon: "M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z",
    accentColor: "text-blue-400",
    borderColor: "border-blue-500/30",
  },
  {
    number: "02",
    title: "Diseñamos tu sitio y configuramos tu chatbot",
    description:
      "Nuestro equipo construye tu landing page o sitio web y, si lo elegís, integra el chatbot con IA. Todo listo en 7 días.",
    detail: "Sitio web + chatbot IA en 7 días",
    icon: "M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5",
    accentColor: "text-cyan-400",
    borderColor: "border-cyan-500/30",
  },
  {
    number: "03",
    title: "Tu negocio funcionando 24/7",
    description:
      "Tu página online y tu asistente virtual activos. Los clientes entran, preguntan y agendan — incluso cuando dormís.",
    detail: "Soporte y ajustes incluidos",
    icon: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z",
    accentColor: "text-blue-400",
    borderColor: "border-blue-500/30",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-12 md:py-24 px-4 md:px-6 relative border-y border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16">

        {/* Sticky left */}
        <div className="lg:w-5/12 pt-4">
          <div className="lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-4">
                Cómo Funciona
              </p>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Simple, rápido{" "}
                <span className="gradient-text">y sin vueltas.</span>
              </h2>
              <p className="text-slate-400 text-sm md:text-lg mb-8 leading-relaxed">
                En menos de una semana tu negocio ya tiene presencia profesional
                online y atención automatizada.
              </p>
              <a
                href="https://wa.me/5491112345678"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 font-medium inline-flex items-center gap-2 hover:gap-4 transition-all duration-300"
              >
                Empezar hoy
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </motion.div>
          </div>
        </div>

        {/* Scrolling right cards */}
        <div className="lg:w-7/12 flex flex-col gap-6 pb-4">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`glass-card rounded-3xl p-8 md:p-10 relative overflow-hidden group hover:-translate-y-0.5 transition-transform duration-300 border ${step.borderColor}`}
            >
              <div className="absolute -right-4 -top-8 text-9xl font-black text-white/5 group-hover:text-white/10 transition-colors pointer-events-none select-none">
                {step.number}
              </div>
              <div className="relative z-10 max-w-[85%]">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <svg className={`w-6 h-6 flex-shrink-0 ${step.accentColor}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={step.icon} />
                  </svg>
                  {step.title}
                </h3>
                <p className="text-slate-400 leading-relaxed mb-4 text-sm md:text-base">
                  {step.description}
                </p>
                <div className={`flex items-center gap-2 text-sm font-medium ${step.accentColor}`}>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                  {step.detail}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
