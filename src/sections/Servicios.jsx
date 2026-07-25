import { CardServices } from "../components/ui/CardServices"
import { Globe, Palette, Sparkles } from "lucide-react"
import { motion } from "framer-motion"

export const Servicios = () => {
  return (
    <>
      <section id="servicios" className="bg-backgBlack w-full min-h-svh flex flex-col items-center justify-center gap-5 py-20">
        <motion.div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col items-center w-full" initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 lg:gap-20 mb-16 w-full">
            <div className="flex flex-col items-start gap-3 lg:max-w-2xl shrink-0">
              <span className="uppercase text-secondary text-sm font-semibold tracking-wider">Servicios</span>
              <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-left">
                <span className="bg-clip-text text-transparent bg-linear-to-r from-secondary to-primary">
                  Tres especialidades. Un solo equipo.
                </span>
              </h2>
            </div>
            <div className="lg:max-w-md lg:pb-1">
              <p className="text-base lg:text-lg text-gray-500 text-left leading-relaxed">
                Contratá cada servicio por separado o combinálos en un pack integral según la etapa de tu marca.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center md:items-stretch justify-center flex-wrap gap-8 w-full">
            <CardServices icon={<Globe color="#2463EB" />} title="Desarrollo Web" desc="Sitios informativos y landing pages optimizadas para conversión, con tecnología de vanguardia." items={["Stack moderno: React + Tailwind", "Performance y Core Web Vitals", "SEO técnico on-page", "CMS opcional para autogestión"]} btn="Cotizar desarrollo" />

            <CardServices icon={<Palette color="#2463EB" />} title="Diseño Gráfico" desc="Comunicación visual que cautiva y transmite los valores fundamentales de tu negocio." items={["Sistema visual editorial", "Piezas para redes y campañas", "Diseño impreso y digital", "Plantillas reutilizables"]} btn="Solicitar diseño" />

            <CardServices icon={<Sparkles color="#2463EB" />} title="Branding Visual" desc="Identidades de marca completas que destacan en mercados competitivos y digitales." items={["Logo principal + variantes", "Sistema cromático y tipográfico", "Manual de marca PDF", "Aplicaciones reales"]} btn="Crear identidad" />
          </div>
        </motion.div>
      </section>
    </>
  )
}
