/* import { Instagram, Linkedin, Dribbble, Mail } from "lucide-react" */
import { Mail } from "lucide-react";
import { navItems } from "./utilis/nav";

export const Footer = () => {
    const navLinks = navItems;
  return (
    <footer className="bg-[#330000] text-dark-foreground text-tertiary ">
      <div className="container py-16 grid md:grid-cols-3 gap-12">
        <div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-primary" />
            <span className="text-2xl font-extrabold tracking-tight">Velaz</span>
          </div>
          <p className="mt-4 text-dark-foreground/60 max-w-xs leading-relaxed">
            Diseño web y branding visual para marcas que quieren crecer con identidad.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-dark-foreground/90 uppercase tracking-wider mb-5">
            Navegación
          </h4>
          <ul className="space-y-3">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-dark-foreground/70 hover:text-dark-foreground transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-dark-foreground/90 uppercase tracking-wider mb-5">
            Contacto
          </h4>
          <a
            href="mailto:hola@velaz.studio"
            className="flex items-center gap-2 text-dark-foreground/70 hover:text-dark-foreground transition-colors"
          >
            <Mail className="w-4 h-4" /> hola@velaz.studio
          </a>
          <p className="mt-2 text-dark-foreground/60">Buenos Aires, Argentina</p>
          {/* <div className="mt-6 flex gap-3">
            {[
              { Icon: Instagram, href: "#" },
              { Icon: Linkedin, href: "#" },
              { Icon: Dribbble, href: "#" },
            ].map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-colors"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div> */}
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container py-6 flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-dark-foreground/50">
          <p>© {new Date().getFullYear()} Velaz Studio. Todos los derechos reservados.</p>
          <p>Diseñado y desarrollado con ❤️ en Buenos Aires.</p>
        </div>
      </div>
    </footer>
  );
}
