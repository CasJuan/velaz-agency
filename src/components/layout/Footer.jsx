/* import { Instagram, Linkedin, Dribbble, Mail } from "lucide-react" */
import { Mail } from "lucide-react";
import { navItems } from "../../data/nav";

export const Footer = () => {
    const navLinks = navItems;
  return (
    <footer className="bg-[#2a0000] text-white w-full">
      <div className="w-full max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-12">
        <div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary" />
            <span className="text-2xl font-extrabold tracking-tight text-white">Velaz</span>
          </div>
          <p className="mt-4 text-white/70 max-w-xs leading-relaxed">
            Diseño web y branding visual para marcas que quieren crecer con identidad.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white/90 uppercase tracking-wider mb-5">
            Navegación
          </h4>
          <ul className="space-y-3">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white/90 uppercase tracking-wider mb-5">
            Contacto
          </h4>
          <a
            href="mailto:hola@velaz.studio"
            className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
          >
            <Mail className="w-4 h-4" /> hola@velaz.studio
          </a>
          <p className="mt-2 text-white/70">Buenos Aires, Argentina</p>
        </div>
      </div>

      <div className="border-t border-white/10 w-full">
        <div className="w-full max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-white/50">
          <p>© {new Date().getFullYear()} Velaz Studio. Todos los derechos reservados.</p>
          <p>Diseñado y desarrollado con ❤️ en Buenos Aires.</p>
        </div>
      </div>
    </footer>
  );
}
