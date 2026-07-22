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
              Tres especialidades. Un solo equipo.
            </span>
          </h2>
          <p className="text-lg text-center mb-10 max-w-2xl text-gray-500">Contratá cada servicio por separado o combinálos en un pack integral según la etapa de tu marca.</p>
          <div className="flex flex-col md:flex-row items-center md:items-stretch justify-center flex-wrap gap-8 w-full">
            <CardServices icon={<Globe color="#730000" />} title="Desarrollo Web" desc="Sitios informativos y landing pages optimizadas para conversión, con tecnología de vanguardia." items={["Stack moderno: React + Tailwind", "Performance y Core Web Vitals", "SEO técnico on-page", "CMS opcional para autogestión"]} btn="Cotizar desarrollo" />

            <CardServices icon={<Palette color="#730000" />} title="Diseño Gráfico" desc="Comunicación visual que cautiva y transmite los valores fundamentales de tu negocio." items={["Sistema visual editorial", "Piezas para redes y campañas", "Diseño impreso y digital", "Plantillas reutilizables"]} btn="Solicitar diseño" />

            <CardServices icon={<Sparkles color="#730000" />} title="Branding Visual" desc="Identidades de marca completas que destacan en mercados competitivos y digitales." items={["Logo principal + variantes", "Sistema cromático y tipográfico", "Manual de marca PDF", "Aplicaciones reales"]} btn="Crear identidad" />
          </div>
        </motion.div>
      </section>
    </>
  )
}
