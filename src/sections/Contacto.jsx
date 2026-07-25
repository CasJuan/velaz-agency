import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const Contacto = () => {
  return (
    <section id="cta" className="bg-backSecondaryBlack py-24 px-4 w-full flex justify-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-6xl"
      >
        <div className="relative overflow-hidden rounded-3xl bg-primaryBack p-12 md:p-20 text-center shadow-2xl">
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: "radial-gradient(circle at 20% 30%, hsl(var(--primary-glow)) 0%, transparent 50%), radial-gradient(circle at 80% 70%, hsl(var(--primary)) 0%, transparent 50%)",
          }} />
          <div className="absolute inset-0 opacity-[0.06]" style={{
            backgroundImage: "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }} />

          <div className="relative">
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
              ¿Listo para transformar <br /> tu presencia digital?
            </h2>
            <p className="mt-6 text-white/90 text-lg max-w-xl mx-auto">
              Conversemos sobre tu próximo gran paso. Respondemos en menos de 24 horas con una propuesta a medida y sin compromiso.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:hola@velaz.studio" className="rounded-full bg-white text-primary hover:bg-white/90 h-14 px-8 text-base font-semibold flex flex-row items-center justify-center transition-colors shadow-lg">
               Agendar consultoria <ArrowRight className="ml-2 w-4 h-4" />
              </a>
              <a href="#servicios" className="rounded-full h-14 px-8 text-base border-2 border-white/30 text-white bg-transparent hover:bg-white/10 hover:border-white flex flex-row items-center justify-center transition-all">
                Ver servicios
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
