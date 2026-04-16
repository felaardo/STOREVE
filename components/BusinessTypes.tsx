"use client";

import { motion } from "framer-motion";

const bentoItems = [
  {
    id: "barbershop",
    label: "Barberías & Salones",
    headline: "Llenate la Agenda Todos los Días",
    description:
      "Sistema de reservas con recordatorios por WhatsApp. Reduce ausencias un 60% en piloto automático.",
    stat: "+134%",
    statLabel: "más reservas en 90 días",
    image:
      "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=1200&q=80",
    large: true,
    iconPath:
      "M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm2.122-9.596a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z",
  },
  {
    id: "gym",
    label: "Gimnasios y Estudios",
    headline: "Convertí Visitas en Socios",
    description:
      "Captación de leads locales en piloto automático.",
    stat: "+91%",
    statLabel: "nuevas inscripciones",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
    large: false,
    iconPath:
      "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z",
  },
  {
    id: "restaurant",
    label: "Restaurantes",
    headline: "Más Mesas Reservadas Cada Noche",
    description:
      "Menús digitales y gestión de mesas sin fricción.",
    stat: "+78%",
    statLabel: "reservas por mes",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
    large: false,
    iconPath:
      "M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.87c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513m-3-4.87v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.38a48.474 48.474 0 00-6-.37c-2.032 0-4.034.125-6 .37m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.17c0 .62-.504 1.124-1.125 1.124H4.125A1.125 1.125 0 013 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 015 13.12",
  },
  {
    id: "services",
    label: "Clínicas y Servicios Especializados",
    headline: "IA que Trabaja Mientras Dormís",
    description:
      "Chatbots que responden dudas, filtran prospectos y agendan citas 24/7 sin asistencia humana.",
    stat: "+112%",
    statLabel: "leads calificados",
    image: null,
    large: false,
    ai: true,
    iconPath:
      "M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z",
  },
];

export default function BusinessTypes() {
  return (
    <section id="businesses" className="py-12 md:py-24 px-4 md:px-6 relative">
      <div className="section-divider mb-24" />

      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-4">
            Diseñado Para Tu Negocio
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
            No importa tu local,
            <br />
            <span className="gradient-text">optimizamos tu flujo.</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl">
            Sistemas pre-entrenados para los sectores que requieren presencia
            física y agendas llenas.
          </p>
        </motion.div>

        {/* Bento grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-4"
        >
          {/* Large card: Barbershop */}
          <div className="md:col-span-2 glass-card rounded-3xl overflow-hidden relative group flex flex-col justify-end min-h-[300px] cursor-default">
            {bentoItems[0].image && (
              <>
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-30 group-hover:opacity-40 transition-opacity duration-500 mix-blend-luminosity"
                  style={{ backgroundImage: `url(${bentoItems[0].image})` }}
                />
                <div className="absolute inset-0 bg-black/60 md:bg-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07091a] via-[#07091a]/80 to-transparent" />
              </>
            )}
            <div className="relative z-10 p-4 md:p-8">
              <div className="w-12 h-12 glass-panel rounded-full flex items-center justify-center mb-4 text-cyan-400">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={bentoItems[0].iconPath} />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{bentoItems[0].label}</h3>
              <p className="text-slate-300 max-w-md">{bentoItems[0].description}</p>
              <div className="flex items-baseline gap-2 mt-4">
                <span className="text-lg md:text-2xl font-black gradient-text">{bentoItems[0].stat}</span>
                <span className="text-slate-500 text-sm">{bentoItems[0].statLabel}</span>
              </div>
            </div>
          </div>

          {/* Gyms */}
          <div className="glass-card rounded-3xl overflow-hidden relative group flex flex-col justify-end min-h-[300px] cursor-default">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-luminosity"
              style={{ backgroundImage: `url(${bentoItems[1].image})` }}
            />
            <div className="absolute inset-0 bg-black/60 md:bg-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#07091a] to-[#07091a]/40" />
            <div className="relative z-10 p-4 md:p-6">
              <svg className="w-8 h-8 text-blue-400 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d={bentoItems[1].iconPath} />
              </svg>
              <h3 className="text-xl font-bold text-white mb-1">{bentoItems[1].label}</h3>
              <p className="text-sm text-slate-300">{bentoItems[1].description}</p>
              <div className="flex items-baseline gap-2 mt-3">
                <span className="text-lg md:text-xl font-black gradient-text">{bentoItems[1].stat}</span>
                <span className="text-slate-500 text-xs">{bentoItems[1].statLabel}</span>
              </div>
            </div>
          </div>

          {/* Restaurants */}
          <div className="glass-card rounded-3xl overflow-hidden relative group flex flex-col justify-end min-h-[240px] cursor-default">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-luminosity"
              style={{ backgroundImage: `url(${bentoItems[2].image})` }}
            />
            <div className="absolute inset-0 bg-black/60 md:bg-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#07091a] to-[#07091a]/40" />
            <div className="relative z-10 p-4 md:p-6">
              <svg className="w-8 h-8 text-cyan-400 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d={bentoItems[2].iconPath} />
              </svg>
              <h3 className="text-xl font-bold text-white mb-1">{bentoItems[2].label}</h3>
              <p className="text-sm text-slate-300">{bentoItems[2].description}</p>
              <div className="flex items-baseline gap-2 mt-3">
                <span className="text-lg md:text-xl font-black gradient-text">{bentoItems[2].stat}</span>
                <span className="text-slate-500 text-xs">{bentoItems[2].statLabel}</span>
              </div>
            </div>
          </div>

          {/* AI Services — wide card */}
          <div className="md:col-span-2 glass-card rounded-3xl overflow-hidden relative flex items-center min-h-[240px] cursor-default">
            <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-blue-600 to-cyan-400" />
            <div className="relative z-10 p-8 flex flex-col md:flex-row items-center gap-8 w-full">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">{bentoItems[3].label}</h3>
                <p className="text-slate-300">{bentoItems[3].description}</p>
                <div className="flex items-baseline gap-2 mt-4">
                  <span className="text-lg md:text-2xl font-black gradient-text">{bentoItems[3].stat}</span>
                  <span className="text-slate-500 text-sm">{bentoItems[3].statLabel}</span>
                </div>
              </div>
              <div className="flex-shrink-0">
                <div className="glass-btn px-5 py-3 rounded-xl flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-sm font-medium text-white">IA Asistente Online</span>
                  <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
