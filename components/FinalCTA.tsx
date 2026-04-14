"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function FinalCTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (email) setSubmitted(true);
  }

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-blue-600/10" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-600/20 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass-panel border border-blue-500/30 rounded-[2.5rem] p-10 md:p-16 text-center"
        >
          {/* Icon */}
          <div className="text-5xl mb-6 inline-block animate-float">🚀</div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Tenemos lugares disponibles este mes
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Deja de perseguir clientes.{" "}
            <br className="hidden md:block" />
            <span className="gradient-text-blue">Hacé que te agenden.</span>
          </h2>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Agendá una demostración gratuita de 30 minutos. Analizamos tu negocio,
            identificamos exactamente dónde están los problemas y te mostramos qué
            es posible — sin ningún compromiso.
          </p>

          {!submitted ? (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto mb-5"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Tu correo electrónico"
                required
                className="flex-1 bg-[#07091a]/50 border border-white/20 rounded-full px-6 py-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50 transition-all"
              />
              <button
                type="submit"
                className="bg-white text-[#07091a] px-8 py-4 rounded-full font-bold hover:bg-slate-100 transition-colors whitespace-nowrap"
              >
                Agendar Demo
              </button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mb-5 glass-card rounded-2xl p-6 max-w-lg mx-auto border border-green-500/20"
            >
              <div className="text-green-400 font-semibold text-lg mb-1">¡Recibimos tu solicitud!</div>
              <p className="text-slate-400 text-sm">Te contactaremos en las próximas 24 horas.</p>
            </motion.div>
          )}

          <p className="text-xs text-slate-500 mb-8">
            Sin técnicas de venta agresivas. Solo una conversación real sobre tu crecimiento.
          </p>

          {/* Trust micro-copy */}
          <div className="flex flex-wrap gap-6 justify-center items-center text-slate-500 text-sm">
            {[
              "Llamada gratis · Sin compromiso",
              "Resultados en 30 días",
              "Todo lo que construimos es tuyo",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                </svg>
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
