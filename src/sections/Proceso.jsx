import { MessageCircle, FileText, Paintbrush, Rocket, FileSearchCorner } from "lucide-react"
import { motion } from "framer-motion"

const steps = [
    {
        number: "01",
        icon: MessageCircle,
        title: "Descubrimiento",
        description: "Analizamos tus objetivos, audiencia y mercado para trazar la ruta estratégica más efectiva.",

    },
    {
        number: "02",
        icon: FileText,
        title: "Estrategia & Diseño",
        description: "Creamos conceptos visuales y estructuras funcionales que conectan con tu audiencia.",

    },
    {
        number: "03",
        icon: Paintbrush,
        title: "Desarrollo",
        description: "Implementamos soluciones robustas y escalables con los más altos estándares técnicos.",

    },
    {
        number: "04",
        icon: Paintbrush,
        title: "Lanzamiento",
        description: "Publicamos, medimos y acompañamos los primeros pasos para asegurar el impacto real.",

    },
    {
        number: "05",
        icon: FileSearchCorner,
        title: "Revisiones y ajustes",
        description: "Ajustamos detalles según tus comentarios para perfeccionar el resultado final.",
    },
    {
        number: "06",
        icon: Rocket,
        title: "Entrega final",
        description: "Obtienes todos los archivos, accesos y entregas listas para usar.",
    },
]

export const Proceso = () => {
    return (
        <section id="proceso" className="bg-backgBlack py-24 lg:py-32 w-full flex justify-center">
            <motion.div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8" initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}>
                <div className="flex flex-col items-center text-center mb-16">
                    <span className="uppercase text-secondary text-base font-semibold mb-2">Metodologia</span>
                    <h2 className="text-5xl lg:text-5xl font-extrabold tracking-tight">
                        <span className="bg-clip-text text-transparent bg-linear-to-r from-secondary to-primary">
                            Seis fases, cero sorpresas
                        </span>
                    </h2>
                    <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
                        Un proceso transparente diseñado para que sepas siempre dónde estamos y qué viene después.
                    </p>
                </div>
                <div className="w-full max-w-6xl mx-auto mt-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-x-8 lg:gap-y-16">
                        {steps.map((step, index) => (
                            <div
                                key={step.number}
                                className="relative flex flex-row md:flex-col items-start md:items-center gap-6 md:gap-4"
                            >
                                {/* Línea vertical (solo móvil: 1 columna) */}
                                {index < steps.length - 1 && (
                                    <div className="md:hidden absolute left-10 top-20 -bottom-12 w-0.5 bg-primary z-0" />
                                )}

                                {/* Línea horizontal (tablet: 2 columnas) */}
                                {index % 2 !== 1 && index < steps.length - 1 && (
                                    <div className="hidden md:block lg:hidden absolute top-10 left-[50%] w-[calc(100%+3rem)] h-0.5 bg-primary z-0" />
                                )}

                                {/* Línea horizontal (escritorio: 3 columnas) */}
                                {index % 3 !== 2 && index < steps.length - 1 && (
                                    <div className="hidden lg:block absolute top-10 left-[50%] w-[calc(100%+2rem)] h-0.5 bg-primary z-0" />
                                )}

                                <div className="relative z-10 shrink-0">
                                    <div className="w-20 h-20 rounded-full bg-tertiary flex items-center justify-center shadow-lg">
                                        <step.icon className="w-8 h-8 text-secondary" />
                                    </div>
                                    <span className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-white border-2 border-tertiary flex items-center justify-center text-xs font-bold text-tertiary">
                                        {step.number}
                                    </span>
                                </div>
                                <div className="md:text-center flex-1 pt-4 md:pt-0">
                                    <h3 className="text-xl font-bold mb-2 text-secondary">
                                        {step.title}
                                    </h3>
                                    <p className="text-base text-secondary leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>

                                {/* Punto de conexión horizontal (tablet) */}
                                {index % 2 !== 1 && index < steps.length - 1 && (
                                    <div className="hidden md:flex lg:hidden absolute top-10 -right-[1.5rem] w-8 h-8 items-center justify-center -translate-y-1/2 translate-x-1/2">
                                        <div className="w-3 h-3 rounded-full bg-tertiary z-10" />
                                    </div>
                                )}

                                {/* Punto de conexión horizontal (escritorio) */}
                                {index % 3 !== 2 && index < steps.length - 1 && (
                                    <div className="hidden lg:flex absolute top-10 -right-[1rem] w-8 h-8 items-center justify-center -translate-y-1/2 translate-x-1/2">
                                        <div className="w-3 h-3 rounded-full bg-tertiary z-10" />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    )
}
