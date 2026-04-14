"use client";

import { motion } from "framer-motion";

const included = [
  "Sitio web personalizado de alta conversión",
  "Diseño optimizado para móvil",
  "Optimización de Google Business",
  "Seguimiento de leads con IA",
  "Sistema de reservas/contacto online",
  "Automatización de reseñas",
  "Configuración de SEO local",
  "Reporte mensual de resultados",
  "Soporte continuo y actualizaciones",
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6 relative">
      <div className="section-divider mb-24" />

      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-4">
            Precios
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">
            Simple, transparente,{" "}
            <span className="gradient-text">orientado a resultados</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            No te cobramos por parecer ocupados. Nuestro modelo está construido en torno
            a tus resultados reales — solo ganamos cuando vos ganás.
          </p>
        </motion.div>

        {/* Model cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Setup */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-3xl p-8"
          >
            <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-6">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
              </svg>
            </div>

            <div className="mb-2">
              <span className="text-xs text-slate-500 uppercase tracking-widest">Único pago</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Tarifa de Configuración</h3>
            <p className="text-slate-400 leading-relaxed mb-6">
              Una inversión única para construir tu sistema de crecimiento completo — sitio web, automatizaciones, configuración SEO y todo lo demás. Todo lo que construimos es tuyo.
            </p>

            <div className="text-4xl font-black text-white mb-1">
              Desde <span className="gradient-text">$249</span>
            </div>
            <p className="text-slate-600 text-sm mb-8">El precio exacto depende del alcance. Siempre se habla antes de empezar.</p>

            <div className="space-y-3">
              {included.slice(0, 5).map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-slate-300 text-sm">
                  <svg className="w-4 h-4 text-blue-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                  </svg>
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Performance */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative glass-card rounded-3xl p-8 border border-blue-500/30 overflow-hidden md:scale-105 shadow-[0_0_50px_rgba(37,99,235,0.15)]"
          >
            {/* Popular badge */}
            <div className="absolute top-0 right-8 -translate-y-1/2">
              <span className="px-3 py-1 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 text-white text-xs font-bold uppercase tracking-wide">
                Recomendado
              </span>
            </div>

            {/* Glow */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-600/20 rounded-full blur-2xl pointer-events-none" />

            <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-6">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
              </svg>
            </div>

            <div className="mb-2">
              <span className="text-xs text-blue-400 uppercase tracking-widest">Configuración + Mensual</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Configuración + Rendimiento</h3>
            <p className="text-slate-400 leading-relaxed mb-6">
              Nuestro modelo insignia. Tarifa de configuración reducida más una mensualidad atada a tus resultados. Seguimos comprometidos con tu crecimiento, no solo con el lanzamiento.
            </p>

            <div className="text-4xl font-black text-white mb-1">
              Desde <span className="gradient-text">$99</span>
              <span className="text-2xl text-slate-500 font-normal"> configuración</span>
            </div>
            <p className="text-slate-600 text-sm mb-8">+ mensual según los resultados obtenidos</p>

            <div className="space-y-3">
              {included.map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-slate-300 text-sm">
                  <svg className="w-4 h-4 text-blue-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                  </svg>
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 glass-card rounded-2xl p-6 flex flex-col md:flex-row items-center gap-5 border border-blue-500/20"
        >
          <div className="w-14 h-14 rounded-xl bg-blue-600/10 flex items-center justify-center flex-shrink-0">
            <svg className="w-7 h-7 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-1">Sin Cargos Sorpresa. Nunca.</h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              Todo se habla y se acuerda antes de empezar. Sin cargos ocultos, sin contratos de los que no podés salir. Si no entregamos resultados, no te cobramos el mes siguiente.
            </p>
          </div>
          <a href="#contact" className="flex-shrink-0 btn-primary text-white text-sm font-semibold px-6 py-3 rounded-xl whitespace-nowrap">
            Pedir Cotización
          </a>
        </motion.div>
      </div>
    </section>
  );
}
