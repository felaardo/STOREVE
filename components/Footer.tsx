"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const links = {
  Servicios: [
    { label: "Diseño Web", href: "#what-we-do" },
    { label: "Automatización con IA", href: "#what-we-do" },
    { label: "Captación de Clientes", href: "#what-we-do" },
    { label: "SEO Local", href: "#features" },
  ],
  Rubros: [
    { label: "Barberías", href: "#businesses" },
    { label: "Gimnasios y Estudios", href: "#businesses" },
    { label: "Restaurantes", href: "#businesses" },
    { label: "Servicios Generales", href: "#businesses" },
  ],
  Empresa: [
    { label: "Nosotros", href: "#about" },
    { label: "Cómo Funciona", href: "#how-it-works" },
    { label: "Precios", href: "#pricing" },
    { label: "Contacto", href: "#contact" },
  ],
};

export default function Footer() {
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  return (
    <footer className="border-t border-slate-800/60 pt-16 pb-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <a href="#" className="flex items-center gap-2 mb-4">
              <Image src="/logo.jpg" alt="Storefe logo" width={32} height={32} className="rounded-lg" />
              <span className="text-white font-bold text-xl tracking-tight">
                Store<span className="text-blue-400">fe</span>
              </span>
            </a>
            <p className="text-slate-500 text-sm leading-relaxed mb-5">
              Sitios web con IA y sistemas de automatización para negocios locales que quieren crecer.
            </p>
            <div className="flex gap-3">
              {/* Social icons */}
              {[
                { href: "https://x.com/felaardo", label: "Twitter/X", path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L2.254 2.25H8.08l4.266 5.633 4.898-5.633zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" },
                { href: "https://wa.me/2346314827", label: "WhatsApp", path: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.654-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" },
                { href: "https://instagram.com/felimattocio", label: "Instagram", path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg bg-slate-800/60 border border-slate-700/60 flex items-center justify-center text-slate-500 hover:text-blue-400 hover:border-blue-500/30 transition-colors duration-200"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="text-white text-sm font-semibold mb-4">{category}</h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-slate-500 hover:text-blue-400 text-sm transition-colors duration-200"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800/60 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-600 text-sm">
          <p>© 2026 Storefe. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <button onClick={() => setShowPrivacy(true)} className="hover:text-slate-400 transition-colors">Política de Privacidad</button>
            <button onClick={() => setShowTerms(true)} className="hover:text-slate-400 transition-colors">Términos de Servicio</button>
          </div>
        </div>
      </div>

      {showPrivacy && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4" onClick={() => setShowPrivacy(false)}>
          <div className="bg-slate-900 border border-slate-700 rounded-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto p-8" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-white text-2xl font-bold">Política de Privacidad</h2>
              <button onClick={() => setShowPrivacy(false)} className="text-slate-400 hover:text-white text-2xl">&times;</button>
            </div>
            <div className="text-slate-400 space-y-4 text-sm">
              <p className="text-slate-300">Última actualización: Abril de 2026</p>
              <h3 className="text-white font-semibold text-base">1. Recopilación de Datos</h3>
              <p>Recopilamos tu nombre, dirección de correo electrónico, número de teléfono e información de tu negocio cuando te registrás en nuestros servicios. También recopilamos datos de uso y análisis para mejorar nuestra plataforma.</p>
              <h3 className="text-white font-semibold text-base">2. Cómo Usamos Tus Datos</h3>
              <p>Tus datos se utilizan para brindar y mejorar nuestros servicios con IA, comunicar actualizaciones y personalizar tu experiencia. Nunca vendemos tus datos personales a terceros.</p>
              <h3 className="text-white font-semibold text-base">3. Cookies</h3>
              <p>Usamos cookies para rastrear el uso del sitio web, recordar tus preferencias y mejorar el rendimiento. Podés desactivar las cookies en la configuración de tu navegador en cualquier momento.</p>
              <h3 className="text-white font-semibold text-base">4. Servicios de Terceros</h3>
              <p>Utilizamos herramientas de terceros para análisis, procesamiento de pagos y alojamiento. Estos proveedores tienen sus propias políticas de privacidad y manejan los datos según sus términos.</p>
              <h3 className="text-white font-semibold text-base">5. Retención de Datos</h3>
              <p>Conservamos tus datos mientras tu cuenta esté activa. Si solicitás la eliminación, removeremos tus datos personales dentro de los 30 días.</p>
              <h3 className="text-white font-semibold text-base">6. Tus Derechos</h3>
              <p>Tenés derecho a acceder, corregir o eliminar tus datos personales. También podés solicitar una copia de todos los datos que tenemos sobre vos.</p>
              <h3 className="text-white font-semibold text-base">7. Contacto</h3>
              <p>Para preguntas relacionadas con la privacidad, contactanos en privacidad@storefe.com.</p>
            </div>
          </div>
        </div>
      )}

      {showTerms && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4" onClick={() => setShowTerms(false)}>
          <div className="bg-slate-900 border border-slate-700 rounded-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto p-8" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-white text-2xl font-bold">Términos de Servicio</h2>
              <button onClick={() => setShowTerms(false)} className="text-slate-400 hover:text-white text-2xl">&times;</button>
            </div>
            <div className="text-slate-400 space-y-4 text-sm">
              <p className="text-slate-300">Última actualización: Abril de 2026</p>
              <h3 className="text-white font-semibold text-base">1. Aceptación de Términos</h3>
              <p>Al usar los servicios de Storefe, aceptás estos términos. Si no estás de acuerdo, no uses nuestra plataforma.</p>
              <h3 className="text-white font-semibold text-base">2. Descripción del Servicio</h3>
              <p>Storefe brinda herramientas de creación de sitios web con IA, automatización y crecimiento digital para negocios locales. Las funcionalidades y la disponibilidad están sujetas a cambios.</p>
              <h3 className="text-white font-semibold text-base">3. Responsabilidades del Usuario</h3>
              <p>Sos responsable de mantener la seguridad de tu cuenta y de toda la actividad bajo ella. Aceptás proporcionar información comercial precisa.</p>
              <h3 className="text-white font-semibold text-base">4. Propiedad Intelectual</h3>
              <p>Toda la marca, el software y el contenido de Storefe son propiedad de Storefe. El contenido que creás con nuestras herramientas es tuyo.</p>
              <h3 className="text-white font-semibold text-base">5. Limitación de Responsabilidad</h3>
              <p>Storefe no es responsable de daños indirectos, incidentales o consecuentes derivados del uso de nuestros servicios. Nuestra responsabilidad total se limita al monto que pagaste en los últimos 12 meses.</p>
              <h3 className="text-white font-semibold text-base">6. Terminación</h3>
              <p>Nos reservamos el derecho de suspender o cancelar cuentas que violen estos términos. Podés cancelar tu cuenta en cualquier momento contactando al soporte.</p>
              <h3 className="text-white font-semibold text-base">7. Ley Aplicable</h3>
              <p>Estos términos se rigen por las leyes de la jurisdicción en la que opera Storefe. Cualquier disputa se resolverá mediante arbitraje vinculante.</p>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
