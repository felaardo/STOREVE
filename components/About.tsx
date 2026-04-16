"use client";

import { motion } from "framer-motion";

const values = [
  {
    title: "Entrega en 7 días",
    description: "Sin demoras ni excusas. Tu sitio web listo y funcionando en una semana desde que arrancamos.",
  },
  {
    title: "Todo tuyo",
    description: "El código, el dominio, el chatbot — todo lo que construimos te pertenece. Sin ataduras.",
  },
  {
    title: "Soporte real",
    description: "Te acompañamos después del lanzamiento. Si algo no funciona, lo resolvemos.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-12 md:py-24 px-4 md:px-6 relative">
      <div className="section-divider mb-24" />

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-900/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto relative">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          {/* Left: copy */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-4">
              Sobre StoreVER
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Creamos StoreVER para{" "}
              <span className="gradient-text">simplificar la presencia digital</span>
            </h2>
            <p className="text-slate-400 leading-relaxed mb-5 text-sm md:text-lg">
              Muchos negocios no tienen tiempo ni conocimientos técnicos para
              construir su presencia online. Contratan agencias caras que tardan
              meses y entregan poco.
            </p>
            <p className="text-slate-400 leading-relaxed mb-5 text-sm md:text-base">
              StoreVER nació para cambiar eso. Hacemos dos cosas bien: sitios web
              profesionales en 7 días y chatbots con IA que atienden a tus clientes
              en automático. Sin complejidad, sin demoras.
            </p>
            <p className="text-slate-400 leading-relaxed text-sm md:text-base">
              Trabajamos con startups, emprendedores y negocios que quieren
              crecer sin depender de equipos técnicos grandes.
            </p>
          </motion.div>

          {/* Right: values */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex flex-col gap-5"
          >
            {values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="glass-card rounded-2xl p-6 flex gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                  <div className="w-2 h-2 rounded-full bg-blue-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">{value.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            ))}

            {/* Vision quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-2 border-l-2 border-blue-500/40 pl-5"
            >
              <p className="text-slate-300 italic text-sm leading-relaxed">
                &quot;Nuestra visión es un mundo donde cada dueño de negocio local tenga acceso
                a las herramientas y sistemas que antes estaban reservados para las grandes
                corporaciones.&quot;
              </p>
              <p className="text-slate-600 text-xs mt-2">— Equipo StoreVER</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
