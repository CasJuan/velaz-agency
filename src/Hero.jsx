import { ArrowRight, Brush } from "lucide-react"


export const Hero = () => {
  return (
    <main className="w-full min-h-svh flex flex-col items-start justify-center gap-5">
      <span className="bg-primary rounded-2xl shadow-2xl w-80 h-auto p-1 text-secondary m-2 flex flex-row gap-2 justify-center items-center"> <Brush className="h-4" /> Agencia digital - Buenos Aires</span>
      <h1 className="text-6xl font-bold text-secondary m-2">Tu marca empieza aqui</h1>
      <p className="text-xl m-2 text-center">Diseñamos sitios web informativos, identidades visuales y branding completo. Soluciones a medida o paquetes integrales para hacer crecer tu marca con propósito.</p>
      <div className="flex flex-col items-center justify-center gap-5 w-full m-2">
        <button className="w-4/5 bg-primary text-secondary rounded-2xl p-1 shadow-2xl flex flex-row items-center justify-center gap-2">Ver Servicios <ArrowRight className="h-4" /></button>
        <button className="w-4/5 bg-primary text-secondary rounded-2xl p-1 shadow-2xl">Hablar con un asesor</button>
      </div>
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size-[14px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-77.5 w-77.5 rounded-full bg-[#ff01fbbb] opacity-20 blur-[100px]"></div>
      </div>
    </main>
  )
}
