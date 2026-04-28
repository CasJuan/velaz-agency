import { X } from "lucide-react"
import { navItems } from "./utilis/nav"


export const NavBarResponse = ({open, setOpen}) => {
  return (
    <div className={`fixed inset-0 z-50 flex flex-col justify-center items-center bg-primary text-white transition-transform duration-300 ease-in-out ${open ? "translate-x-0" : "translate-x-full"}`}>

      <button onClick={() => setOpen(false)} className="absolute top-6 right-6 p-2 rounded-full hover:bg-white/10 transition-colors cursor-pointer">
        <X/>
      </button>

      <ul className="flex flex-col items-center gap-6 w-full px-6 uppercase text-xl font-medium tracking-wide">
        {navItems.map((item) => (
          <li key={item.id} className="w-full text-center">
            <a href={item.path} onClick={()=> setOpen(false)} className="block w-full py-3 rounded-2xl hover:bg-white hover:text-primary transition-colors duration-200">
              {item.label}
            </a>
          </li>
        ))}

      </ul>
              

    </div>
  )
}
