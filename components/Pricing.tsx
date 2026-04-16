"use client";

import { motion } from "framer-motion";

const plans = [
  {
    name: "Sitio Web",
    icon: (
      <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    description:
      "Landing page o sitio multipágina. Diseño profesional, responsive, optimizado para móvil. Entrega en 7 días.",
    features: [
      "Diseño personalizado",
      "Responsive y rápido",
      "Optimizado para móvil",
      "Formulario de contacto",
      "Entrega en 7 días",
    ],
    recommended: false,
  },
  {
    name: "Sitio Web + Chatbot IA",
    icon: (
      <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
      </svg>
    ),
    description:
      "Todo lo anterior más un asistente virtual con IA integrado a tu web y WhatsApp. Responde consultas y agenda turnos solo.",
    features: [
      "Todo lo del plan Sitio Web",
      "Chatbot con IA personalizado",
      "Integración con WhatsApp",
      "Responde consultas automáticamente",
      "Agenda turnos 24/7",
    ],
    recommended: true,
  },
  {
    name: "Chatbot IA",
    icon: (
      <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
      </svg>
    ),
    description:
      "Asistente virtual con IA para tu WhatsApp o sitio web existente. Responde consultas, agenda turnos y atiende clientes en automático.",
    features: [
      "Chatbot con IA personalizado",
      "Integración con WhatsApp",
      "Responde consultas 24/7",
      "Agenda turnos automáticamente",
      "Entrenado con info de tu negocio",
    ],
    recommended: false,
  },
];

export default function Pricing() {
  return (
    <section id="precios" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Precios
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Elegí el plan que mejor se ajuste a tu negocio.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative rounded-2xl p-8 flex flex-col border ${
                plan.recommended
                  ? "border-blue-500/50 bg-blue-950/0"
                  : "border-white/5 bg-white/4"
              }`}
            >
              {plan.recommended && (
                <div className="absolute -top-3 right-6 bg-blue-500 text-white text-xs font-bold px-4 py-1 rounded-full">
                  RECOMENDADO
                </div>
              )}

              <div className="w-12 h-12 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6">
                {plan.icon}
              </div>

              <h3 className="text-xl font-bold text-white mb-3">{plan.name}</h3>
              <p className="text-slate-400 text-sm mb-6">{plan.description}</p>

              <div className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <svg
                      className="w-5 h-5 text-blue-400 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-slate-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <a
                href="https://wa.me/5491112345678"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-3 rounded-lg text-center font-semibold transition-colors ${
                  plan.recommended
                    ? "bg-blue-500 text-white hover:bg-blue-600"
                    : "bg-blue-500 text-white hover:bg-blue-600"
                }`}
              >
                Consultar precio
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}