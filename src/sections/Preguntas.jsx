
import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"


export const Preguntas = () => {
    const faqs = [
        {
            question: "¿Puedo contratar solo un servicio o tengo que llevarme el pack?",
            answer: "Podés contratar el servicio que necesites por separado: solo el sitio web, solo el branding o el pack completo. Te asesoramos para que elijas lo mejor según tu etapa.",
        },
        {
            question: "¿Cuánto tarda un proyecto?",
            answer: "Un sitio web informativo demora entre 2 y 4 semanas. Una identidad visual entre 2 y 3 semanas. El pack completo se entrega en 4 a 6 semanas según el alcance.",
        },
        {
            question: "¿Cómo es el proceso de pago?",
            answer: "Trabajamos con un anticipo del 50% para arrancar y el saldo contra entrega. Aceptamos transferencia, MercadoPago y medios internacionales.",
        },
        {
            question: "¿Qué incluye el manual de marca?",
            answer: "Logo principal y variantes, paleta cromática, sistema tipográfico, usos correctos e incorrectos y aplicaciones básicas, todo en un PDF profesional.",
        },
        {
            question: "¿Hacen mantenimiento del sitio web después?",
            answer: "Sí, ofrecemos planes de soporte mensual opcional. El pack completo incluye 3 meses de soporte premium sin costo.",
        },
        {
            question: "¿Trabajan con clientes fuera de Argentina?",
            answer: "Por supuesto. Trabajamos 100% remoto y tenemos clientes en LATAM, Europa y Estados Unidos.",
        },
    ];
    const [openIndex, setOpenIndex] = useState(null)

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index)
    }
    return (
        <>
            <section id="preguntas" className=" bg-bgWhite min-h-screen text-center flex flex-col items-center justify-center gap-8 px-4 py-12 md:py-16" >
                <motion.div className="flex flex-col items-center justify-center gap-1" initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}>
                    <h2 className="text-5xl font-extrabold tracking-tight">
                        <span className="bg-clip-text text-transparent bg-linear-to-r from-secondary to-primary">
                            Preguntas Frecuentes
                        </span>
                    </h2>
                </motion.div>
                <motion.div className="flex flex-col items-center gap-3 w-full px-4" initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}>
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white w-full max-w-3xl m-2 rounded-2xl overflow-hidden cursor-pointer shadow-sm transition-shadow hover:shadow-md"
                            onClick={() => toggle(index)}
                        >
                            {/* Header / summary */}
                            <div className="flex items-center justify-between p-4">
                                <span className="text-lg  text-black/80 text-left">{faq.question}</span>
                                <motion.span
                                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="text-black/80 text-xl ml-2 shrink-0"
                                >
                                    ▼
                                </motion.span>
                            </div>
                            <AnimatePresence initial={false}>
                                {openIndex === index && (
                                    <motion.div
                                        key="content"
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.35, ease: "easeInOut" }}
                                        style={{ overflow: "hidden" }}
                                    >
                                        <p className="text-lg px-4 pb-4 text-gray-500">{faq.answer}</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </motion.div>
            </section>
        </>
    )
}
