"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "Antes de Storefe, dependía 100% del boca a boca. Ahora recibo entre 8 y 12 nuevas solicitudes de reserva por semana solo a través de mi sitio web. El sistema de seguimiento con IA es increíble — responde a los leads más rápido de lo que yo podría.",
    name: "Marcos T.",
    role: "Dueño, Studio M Barbería",
    location: "Buenos Aires, AR",
    initials: "MT",
    color: "from-orange-500 to-amber-500",
    result: "+134% reservas",
  },
  {
    quote:
      "El gimnasio tenía un sitio web, pero no hacía nada. Storefe lo reconstruyó todo y armó un embudo automatizado — ahora promediamos 23 pruebas de nuevos socios por mes contra 6 antes. Se paga solo y con creces.",
    name: "Sofía R.",
    role: "Co-Fundadora, IronForm Fitness",
    location: "Córdoba, AR",
    initials: "SR",
    color: "from-blue-500 to-cyan-500",
    result: "+91% nuevos socios",
  },
  {
    quote:
      "Al principio era escéptico — me habían fallado agencias de marketing antes. Pero Storefe cumplió en el primer mes. Más reservas, mejor posición en Google y casi no tuve que hacer nada. Eso era exactamente lo que necesitaba.",
    name: "David L.",
    role: "Dueño, Maison Léa Restaurante",
    location: "Rosario, AR",
    initials: "DL",
    color: "from-emerald-500 to-teal-500",
    result: "+78% reservas",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-6 relative overflow-hidden">
      <div className="section-divider mb-24" />

      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-80 h-80 bg-blue-900/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-4">
            Resultados Reales
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">
            Dueños de negocios que{" "}
            <span className="gradient-text">dejaron de adivinar</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            No son casos excepcionales elegidos a dedo. Son resultados típicos
            de negocios locales como el tuyo.
          </p>
        </motion.div>

        {/* Testimonial cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="glass-card rounded-2xl p-8 flex flex-col gap-6 hover:-translate-y-1 transition-transform duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1">
                {[...Array(5)].map((_, si) => (
                  <svg key={si} className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-slate-300 leading-relaxed flex-1 italic text-sm">
                &quot;{t.quote}&quot;
              </blockquote>

              {/* Result badge */}
              <div className={`inline-flex items-center gap-2 bg-gradient-to-r ${t.color} bg-clip-text`}>
                <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${t.color}`} />
                <span className={`text-sm font-bold bg-gradient-to-r ${t.color} bg-clip-text text-transparent`}>
                  {t.result}
                </span>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-800">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white text-sm font-bold flex-shrink-0`}>
                  {t.initials}
                </div>
                <div>
                  <div className="text-white text-sm font-semibold">{t.name}</div>
                  <div className="text-slate-500 text-xs">{t.role} · {t.location}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-wrap gap-8 justify-center items-center mt-14 text-slate-600"
        >
          {[
            "50+ negocios atendidos",
            "4.9/5 calificación promedio",
            "100% hecho para vos",
            "Resultados en 30 días",
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-sm">
              <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
              </svg>
              {item}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
