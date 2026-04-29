import { MessageCircle, FileText, Paintbrush, Rocket } from "lucide-react"

const steps = [
    {
        number: "01",
        icon: MessageCircle,
        title: "Reunión inicial",
        description: "Entendemos tu negocio, objetivos y público para crear una estrategia a medida.",
    },
    {
        number: "02",
        icon: FileText,
        title: "Propuesta",
        description: "Presentamos un plan personalizado con tiempos, entregables y costos claros.",
    },
    {
        number: "03",
        icon: Paintbrush,
        title: "Diseño y desarrollo",
        description: "Creamos tu marca o sitio web con revisiones incluidas en cada etapa.",
    },
    {
        number: "04",
        icon: Rocket,
        title: "Entrega y soporte",
        description: "Lanzamos el proyecto y te acompañamos con soporte durante el inicio.",
    },
]

export const Proceso = () => {
    return (
        <section id="proceso" className="py-24 lg:py-32 bg-card">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
                    Cómo trabajamos
                </h2>
                <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                    Un proceso claro y colaborativo de principio a fin
                </p>
                <div

                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="relative"
                >

                    <div className="hidden lg:block absolute top-15 left-[calc(12.5%+24px)] right-[calc(12.5%+24px)] h-0.5 bg-border bg-primary" />

                    <div className="lg:hidden absolute left-9.75 top-20 bottom-20 w-0.5 bg-border bg-primary" />

                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-6">
                        {steps.map((step, index) => (
                            <div
                                key={step.number}
                                className="relative flex lg:flex-col items-start lg:items-center gap-6 lg:gap-0"
                            >
                                <div className="relative z-10 shrink-0">
                                    <div className="w-20 h-20 rounded-full bg-tertiary flex items-center justify-center shadow-lg shadow-primary/20">
                                        <step.icon className="w-8 h-8 text-primary-foreground" />
                                    </div>
                                    <span className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-background border-2 border-tertiary flex items-center justify-center text-xs font-bold text-secondary">
                                        {step.number}
                                    </span>
                                </div>
                                <div className="lg:mt-8 lg:text-center flex-1">
                                    <h3 className="text-lg font-semibold text-foreground mb-2">
                                        {step.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                                {index < steps.length - 1 && (
                                    <div className="hidden lg:flex absolute top-15 -right-3 w-6 h-6 items-center justify-center">
                                        <div className="w-3 h-3 rounded-full bg-tertiary" />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
