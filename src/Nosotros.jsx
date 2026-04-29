
export const Nosotros = () => {
    return (
        <section id="nosotros" className="bg-[#EDF2FC] w-full min-h-svh">
            <div className="flex flex-col items-start justify-center gap-5 p-5">
                <span className="uppercase text-secondary text-base font-semibold mt-10">Nosotros</span>
                <h2 className="text-5xl font-bold">Diseños claros, resultados reales</h2>
                <p className="text-lg  text-gray-500">En Velaz creemos en lo simple: diseños limpios, procesos transparentes y atención personalizada. Cada proyecto se trabaja con foco en los objetivos del cliente, no en las tendencias del momento.</p>
                <p className="text-lg  text-gray-500">Trabajamos con marcas que quieren crecer con identidad y construir presencia digital de forma profesional.</p>
                <div className="flex flex-row items-start justify-center gap-5">
                    <div className="flex flex-col items-start justify-center gap-2">
                        <h4 className="text-3xl font-bold">+80</h4>
                        <p className="text-base">Proyectos entregados</p>
                    </div>
                    <div className="flex flex-col items-start justify-center gap-2">
                        <h4 className="text-3xl font-bold">+45</h4>
                        <p className="text-base">Marcas creadas</p>
                    </div>
                    <div className="flex flex-col items-start justify-center gap-2">
                        <h4 className="text-3xl font-bold">6</h4>
                        <p className="text-base">Años de experiencia</p>
                    </div>
                </div>
            </div>
            {/* <div className="h-full w-full">
                <div className="w-50 h-50 bg-red-300 rounded-2xl absolute buttom-50 rotate-45"></div>
                <div className="w-50 h-50 bg-green-400 rounded-2xl absolute left-50 rotate-45"></div>
                <div className="w-50 h-50 bg-red-500 rounded-2xl absolute left-20"></div>
            </div> */}
        </section>
    )
}
