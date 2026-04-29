
export const Nosotros = () => {
    return (
        <section id="nosotros" className="bg-bgWhite w-full min-h-svh flex items-center">
            <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-10 p-5 md:p-12 max-w-7xl mx-auto w-full">
                <div className="flex flex-col items-start justify-center gap-5 md:w-1/2">
                    <span className="uppercase text-secondary text-base font-semibold mt-10 md:mt-0">Nosotros</span>
                    <h2 className="text-5xl font-bold font-extrabold tracking-tight">Diseños claros, resultados reales</h2>
                    <p className="text-lg text-gray-500">En Velaz creemos en lo simple: diseños limpios, procesos transparentes y atención personalizada. Cada proyecto se trabaja con foco en los objetivos del cliente, no en las tendencias del momento.</p>
                    <p className="text-lg text-gray-500">Trabajamos con marcas que quieren crecer con identidad y construir presencia digital de forma profesional.</p>
                </div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-center gap-10 md:w-1/2 bg-white p-8 rounded-3xl shadow-lg mt-8 md:mt-0">
                    <div className="flex flex-col items-center justify-center gap-2 text-center w-full">
                        <h4 className="text-4xl font-bold text-primary">+80</h4>
                        <p className="text-base font-medium">Proyectos entregados</p>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-2 text-center w-full">
                        <h4 className="text-4xl font-bold text-primary">+45</h4>
                        <p className="text-base font-medium">Marcas creadas</p>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-2 text-center w-full">
                        <h4 className="text-4xl font-bold text-primary">6</h4>
                        <p className="text-base font-medium">Años de experiencia</p>
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
