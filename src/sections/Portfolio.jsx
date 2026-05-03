import { useState } from "react"
import { tipoItems } from "../data/tipos";
import { proyects } from "../data/proyects";
import { CardProyects } from "../components/ui/CardProyects";
import { motion } from "framer-motion";

export const Portfolio = () => {

    const tipo = tipoItems;

    const proyectos = proyects;

    const [tipe, setTipe] = useState('all');

    const seleccionados = proyectos.filter(t => tipe === "all" || t.tipo === tipe)

    const handleFilter = (tipe) => {
        setTipe(tipe);
    }

    return (
        <section id="proyectos" className="bg-bgWhite w-full min-h-svh flex flex-col items-center justify-center gap-5 py-20">
            <motion.div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col items-center w-full" initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}>
                <h2 className="text-5xl text-center mb-4 font-extrabold tracking-tight">
                    <span className="bg-clip-text text-transparent bg-linear-to-r from-secondary to-primary">
                        Proyectos que hablan por sí solos
                    </span>
                </h2>
                <p className="text-lg text-center text-gray-500 mb-8 max-w-2xl">Una selección de marcas que confiaron en Velaz para crecer.</p>
                <div className="mb-10 w-full flex justify-center">
                    <ul className="flex flex-row flex-wrap items-center justify-center gap-3 md:gap-5">
                        {
                            tipo.map((tipo) => (
                                <button key={tipo.estado} onClick={() => handleFilter(tipo.estado)} className="h-auto w-auto rounded-2xl shadow-xl cursor-pointer py-2 px-4 bg-tertiary text-secondary text-base border-transparent transition-all duration-300 hover:-translate-y-1 hover:bg-secondary hover:text-white">
                                    <li>
                                        {tipo.label}
                                    </li>
                                </button>
                            ))
                        }
                    </ul>
                </div>
                <div className="flex flex-col items-center justify-center gap-8 md:flex-row md:flex-wrap md:gap-10 w-full">
                    {seleccionados.map((item) => (
                        <CardProyects key={item.id} titulo={item.titulo} modalidad={item.trabajo} img={item.img} desc={item.descripcion} />
                    ))}
                </div>
            </motion.div>
        </section>
    )
}
