import nosotrosImg from '../img/nosotros.jpeg'
import { motion } from 'framer-motion'

export const Nosotros = () => {
    return (
        <section id="nosotros" className="bg-bgWhite w-full min-h-svh flex items-center">
            <motion.div className="flex flex-col md:flex-row items-center justify-center gap-10 p-5 md:p-12 max-w-7xl mx-auto w-full"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}>
                <div className="flex flex-col items-start justify-center gap-5 md:w-1/2">
                    <span className="uppercase text-secondary text-base font-semibold mt-10 md:mt-0">Nosotros</span>
                    <h2 className="text-5xl font-extrabold tracking-tight">
                        <span className="bg-clip-text text-transparent bg-linear-to-r from-secondary to-primary">
                            Somos Juan y Azul
                        </span>
                    </h2>
                    <p className="text-lg text-gray-500">Velaz nació de una idea simple: unir lo que cada uno sabe hacer bien y ponerlo al servicio de quienes quieren crecer. Juan del lado del código, Azul del lado del diseño, y los dos con las mismas ganas de emprender y construir algo propio.</p>
                    <p className="text-lg text-gray-500">No somos una agencia grande ni queremos serlo. Somos un estudio de dos personas que trabaja de cerca con cada cliente, entiende su negocio antes de abrir el editor, y cuida cada detalle como si fuera propio.</p>
                    <ul className="flex flex-col items-start justify-center gap-2">
                        <li className="text-lg text-gray-500">Juan — Desarrollo web frontend. Construyo sitios rápidos, modernos y responsive con foco en la experiencia del usuario.</li>
                        <li className="text-lg text-gray-500">Azul — Diseño gráfico e identidad visual. Creo marcas con personalidad, coherencia y criterio estético en cada pieza.</li>
                    </ul>
                </div>
                <div className="w-full md:w-1/2 flex justify-center items-center mt-8 md:mt-0">
                    <img src={nosotrosImg} alt="" className="rounded-full shadow-2xl w-72 h-72 md:h-96 md:w-96 object-cover" />
                </div>
                {/* <div className="flex flex-col sm:flex-row items-start sm:items-center justify-center gap-10 md:w-1/2 bg-white p-8 rounded-3xl shadow-lg mt-8 md:mt-0">
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
                </div> */}
            </motion.div>
        </section>
    )
}
