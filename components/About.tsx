"use client";

import { motion } from "framer-motion";

const values = [
  {
    title: "Resultados, no informes",
    description: "Medimos nuestro éxito por el crecimiento de tus ingresos — no por métricas de vanidad o presentaciones bonitas.",
  },
  {
    title: "Asociaciones honestas",
    description: "Solo tomamos clientes a los que sabemos que podemos ayudar. Si no somos la opción correcta, te lo decimos de frente.",
  },
  {
    title: "Construido para durar",
    description: "Cada sistema que construimos es tuyo para siempre. Sin dependencia de proveedores. Sin situaciones de rehén.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 relative">
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
              Sobre Storefe
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Creamos Storefe porque{" "}
              <span className="gradient-text">los negocios locales merecen más</span>
            </h2>
            <p className="text-slate-400 leading-relaxed mb-5 text-lg">
              La mayoría de las agencias digitales se preocupan por los retainers,
              no por los resultados. Construyen sitios que quedan bien en un portfolio
              pero no mueven la aguja para el dueño del negocio.
            </p>
            <p className="text-slate-400 leading-relaxed mb-5">
              Storefe nació para cambiar eso. Nos enfocamos exclusivamente en negocios
              locales — las barberías, gimnasios, restaurantes y prestadores de servicios
              que son el motor de sus comunidades. Les llevamos la misma calidad de
              infraestructura digital que las grandes marcas dan por sentada.
            </p>
            <p className="text-slate-400 leading-relaxed">
              No solo construimos sitios web. Construimos motores de crecimiento — y
              atamos nuestro éxito directamente al tuyo.
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
              <p className="text-slate-600 text-xs mt-2">— Equipo Storefe</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
