"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "24/7", label: "Captación de clientes vía IA" },
  { value: "+85%", label: "Aumento en conversión de visitas" },
  { value: "Cero", label: "Curva de aprendizaje técnico" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-pattern">
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/15 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center pt-28 pb-20">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-cyan-400 text-sm font-medium mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          Agencia de Crecimiento IA para Negocios Locales
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6"
        >
          Multiplica tus clientes{" "}
          <br className="hidden md:block" />
          sin{" "}
          <span className="gradient-text-blue glow-text italic">mover un dedo.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light"
        >
          Diseñamos ecosistemas digitales automatizados para barberías, gimnasios y
          restaurantes. Tu agenda se llena de lunes a domingo mientras te enfocás
          en tu negocio.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <a
            href="#contact"
            className="w-full sm:w-auto bg-white text-[#07091a] font-bold px-8 py-4 rounded-full text-lg inline-flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:bg-slate-100 transition-colors"
          >
            Quiero Crecer Mi Negocio
          </a>
          <a
            href="#how-it-works"
            className="w-full sm:w-auto glass-btn text-white font-semibold px-8 py-4 rounded-full text-base inline-flex items-center justify-center gap-2"
          >
            Ver Cómo Funciona
          </a>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="glass-panel rounded-2xl p-2 max-w-2xl mx-auto grid grid-cols-3 divide-x divide-white/10"
        >
          {stats.map((stat, i) => (
            <div key={i} className="text-center py-4 px-4">
              <div className="text-2xl md:text-3xl font-bold gradient-text-blue">{stat.value}</div>
              <div className="text-slate-500 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600"
      >
        <span className="text-xs uppercase tracking-widest">Bajar</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-0.5 h-8 bg-gradient-to-b from-blue-500 to-transparent rounded-full"
        />
      </motion.div>
    </section>
  );
}
