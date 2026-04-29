import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const Contacto = () => {
    return (
    <section id="cta" className="py-24 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="container max-w-6xl"
      >
        <div className="relative overflow-hidden rounded-3xl bg-gradient-dark p-12 md:p-20 text-center shadow-glow bg-secondary">
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: "radial-gradient(circle at 20% 30%, hsl(var(--primary-glow)) 0%, transparent 50%), radial-gradient(circle at 80% 70%, hsl(var(--primary)) 0%, transparent 50%)",
          }} />
          <div className="absolute inset-0 opacity-[0.06]" style={{
            backgroundImage: "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }} />

          <div className="relative">
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-dark-foreground text-bgWhite">
              ¿Listo para que tu marca
              <br />
              <span className="text-gradient bg-linear-to-r from-white to-primary-glow bg-clip-text">
                despegue?
              </span>
            </h2>
            <p className="mt-6 text-bgWhite text-lg text-dark-foreground/80 max-w-xl mx-auto">
              Conversemos sobre tu proyecto. Te respondemos en menos de 24 horas
              con una propuesta a medida.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <button className="rounded-full bg-white text-dark hover:bg-white/90 h-14 px-8 text-base font-semibold flex flex-row items-center justify-center">
                <a href="mailto:hola@velaz.studio" className="flex flex-row items-center justify-center">
                  Empezá tu proyecto <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </button>
              <button className="rounded-full h-14 px-8 text-base border-2 border-white/30 text-dark-foreground bg-transparent hover:bg-white/10 hover:text-dark-foreground">
                <a href="#servicios">Ver servicios</a>
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
