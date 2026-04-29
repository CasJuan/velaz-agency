import { Ligature } from "lucide-react";
import { useState } from "react"
import { tipoItems } from "./utilis/tipos";
import { proyects } from "./utilis/proyects";
import { CardProyects } from "./miniComponents/CardProyects";

export const Portfolio = () => {

    const tipo = tipoItems;

    const proyectos = proyects;

    const [tipe, setTipe] = useState('all');

    const seleccionados = proyectos.filter(t => tipe === "all" || t.tipo === tipe)

    const handleFilter = (tipe) => {
        setTipe(tipe);
    }

    return (
        <section id="proyectos" className=" bg-bgWhite w-full min-h-svh flex flex-col items-center justify-center gap-5">
            <h2 className="text-5xl text-center">Proyectos que hablan por sí solos</h2>
            <p className="text-lg text-center text-gray-500">Una selección de marcas que confiaron en Velaz para crecer.</p>
            <div>
                <ul className="flex flex-row items-center justify-center gap-5">
                    {
                        tipo.map((tipo) => (
                            <button key={tipo.estado} onClick={() => handleFilter(tipo.estado)} className="h-auto w-auto rounded-2xl shadow-2xl cursor-pointer p-2 bg-tertiary text-secondary text-base border-transparent transition-all duration-300 hover:-translate-y-1.5 hover:bg-secondary hover:text-white">
                                <li>
                                    {tipo.label}
                                </li>
                            </button>
                        ))
                    }
                </ul>
            </div>
            <div className="flex flex-col items-center justify-center gap-5 md:flex-row flex-wrap">
                    {seleccionados.map((item) => (
                        <CardProyects key={item.id} titulo={item.titulo} modalidad={item.trabajo} desc={item.descripcion}/>                        
                    ))}
            </div>
        </section>
    )
}
