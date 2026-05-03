import { ArrowRight, Brush } from "lucide-react"
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <main className="relative w-full min-h-svh flex items-center justify-center overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 max-w-7xl mx-auto px-4 md:px-12 w-full pt-20">

        <motion.div className="flex flex-col items-center lg:items-start justify-center gap-6 w-full lg:w-1/2" initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}>

          <span className="bg-primary/20 border border-primary rounded-full px-5 py-2 text-secondary flex flex-row gap-2 justify-center items-center font-medium text-sm animate-[bounce_4s_ease-in-out_2]" >
            <Brush className="h-4 w-4" /> Agencia digital - Buenos Aires
          </span>

          <h1 className="text-5xl lg:text-7xl font-extrabold text-center lg:text-left leading-tight tracking-tight ">
            <span className="bg-clip-text text-transparent bg-linear-to-r from-secondary to-primary">
              Tu marca empieza aquí
            </span>
          </h1>

          <p className="text-xl text-gray-500 text-center lg:text-left max-w-xl">
            Diseñamos sitios web informativos, identidades visuales y branding completo. Soluciones a medida o paquetes integrales para hacer crecer tu marca con propósito.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 w-full mt-4">
            <button className="w-full sm:w-auto px-8 py-4 bg-primary text-secondary rounded-full shadow-lg flex flex-row items-center justify-center gap-2 hover:bg-secondary hover:text-white transition-all duration-300 font-bold">
              Ver Servicios <ArrowRight className="h-5 w-5" />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 border-2 border-secondary text-secondary rounded-full hover:bg-secondary hover:text-white transition-all duration-300 font-bold">
              Hablar con un asesor
            </button>
          </div>
        </motion.div>

        <div className="hidden lg:block w-full lg:w-1/2 relative h-125">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
            className="w-full h-full relative flex items-center justify-center"
          >
            <motion.div
              animate={{ rotate: [0, 6, 0], y: [0, -15, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 right-10 w-64 h-64 rounded-[3rem] bg-primary/60 shadow-2xl backdrop-blur-md"
            />
            <motion.div
              animate={{ rotate: [0, -8, 0], y: [0, 20, 0] }}
              transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-10 left-10 w-48 h-48 rounded-full bg-tertiary/80 shadow-xl border-4 border-white"
            />
            <motion.div
              animate={{ y: [0, -25, 0], rotate: [0, 10, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/4 left-1/4 w-32 h-32 rounded-3xl bg-secondary/10 border-2 border-secondary/20 shadow-lg backdrop-blur-sm z-10"
            />
            <div className="absolute bottom-32 right-32 w-16 h-16 rounded-full border-4 border-primary/80 z-0" />
          </motion.div>
        </div>

      </div>

      {/* Grid de fondo */}
      <div className="absolute inset-0 -z-20 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size-[14px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[500px] w-[500px] rounded-full bg-primary/20 opacity-50 blur-[100px]"></div>
      </div>
    </main>
  )
}
