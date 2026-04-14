"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Auditoría & Estrategia",
    description:
      "Analizamos tu presencia actual, tu competencia local y determinamos el embudo exacto y los flujos conversacionales de IA necesarios para tu nicho específico. Nada genérico — mapeamos exactamente dónde están los problemas.",
    detail: "Llamada estratégica gratis · 30 minutos · Sin compromiso",
    icon: "M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z",
    accentColor: "text-blue-400",
    borderColor: "border-blue-500/30",
  },
  {
    number: "02",
    title: "Construcción del Motor",
    description:
      "Nuestro equipo diseña tu web premium, implementa el motor de reservas y entrena tu asistente de Inteligencia Artificial con el tono y datos de tu negocio. Todo listo en menos de 3 semanas.",
    detail: "Sitio web + IA + sistema de reservas incluido",
    icon: "M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5",
    accentColor: "text-cyan-400",
    borderColor: "border-cyan-500/30",
  },
  {
    number: "03",
    title: "Lanzamiento & Flujo Constante",
    description:
      "Activamos el sistema. Las visitas comienzan a convertirse en citas reales en tu calendario. Monitoreamos el rendimiento, optimizamos continuamente y nos aseguramos de que los leads no paren de llegar mes a mes.",
    detail: "Optimización continua + seguimiento de resultados",
    icon: "M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z",
    accentColor: "text-blue-400",
    borderColor: "border-blue-500/30",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-6 relative bg-[#0d1630]/30 border-y border-white/5">
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
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Del anonimato a{" "}
                <span className="gradient-text">líder local.</span>
              </h2>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                Un proceso claro, transparente y rápido. Pasamos de la idea a
                tener tu ecosistema funcionando en menos de 3 semanas.
              </p>
              <a
                href="#contact"
                className="text-cyan-400 font-medium inline-flex items-center gap-2 hover:gap-4 transition-all duration-300 group"
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
              className={`glass-card rounded-3xl p-10 relative overflow-hidden group hover:-translate-y-0.5 transition-transform duration-300 border ${step.borderColor}`}
            >
              {/* Ghost number */}
              <div className="absolute -right-4 -top-8 text-9xl font-black text-white/5 group-hover:text-white/10 transition-colors pointer-events-none select-none">
                {step.number}
              </div>

              <div className="relative z-10 max-w-[85%]">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <svg className={`w-6 h-6 flex-shrink-0 ${step.accentColor}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={step.icon} />
                  </svg>
                  {step.title}
                </h3>
                <p className="text-slate-400 leading-relaxed mb-4">
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
