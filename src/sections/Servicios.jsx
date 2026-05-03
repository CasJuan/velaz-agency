import { CardServices } from "../components/ui/CardServices"
import { Globe, Palette, Sparkles } from "lucide-react"
import { motion } from "framer-motion"

export const Servicios = () => {
  return (
    <>
      <section id="servicios" className="bg-bgWhite w-full min-h-svh flex flex-col items-center justify-center gap-5 py-20">
        <motion.div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col items-center w-full" initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}>
          <span className="uppercase text-secondary text-base font-semibold mb-2 ">Servicios</span>
          <h2 className="text-5xl text-center mb-4 font-extrabold tracking-tight">
            <span className="bg-clip-text text-transparent bg-linear-to-r from-secondary to-primary">
              Todo lo que tu marca necesita
            </span>
          </h2>
          <p className="text-lg text-center mb-10 max-w-2xl text-gray-500">Contratá los servicios por separado o combinálos en un pack integral.</p>
          <div className="flex flex-col md:flex-row items-center md:items-stretch justify-center flex-wrap gap-8 w-full">
            <CardServices icon={<Globe color="#730000" />} title="Sitio Web" desc="Desarrollo de sitios informativos modernos, rápidos y responsive." items={["SPA con React y Tailwind", "Diseño UI/UX a medida", "Optimización SEO", "Hosting y dominio incluidos"]} btn="Cotizar sitio" />

            <CardServices icon={<Palette color="#730000" />} title="Branding Visual" desc="Identidad visual completa: logo, paleta, tipografía y guía de marca." items={["Logo principal y variantes", "Paleta cromática", "Sistema tipográfico", "Manual de marca PDF"]} btn="Crear identidad" />

            <CardServices icon={<Sparkles color="#730000" />} title="Pack Completo" desc="Sitio web + branding visual integrado en una sola solución." items={["Todo lo de Branding Visual", "Todo lo de Sitio Web", "Estrategia de marca", "Soporte premium 3 meses"]} btn="Lanzar mi marca" />
          </div>
        </motion.div>
      </section>
    </>
  )
}
