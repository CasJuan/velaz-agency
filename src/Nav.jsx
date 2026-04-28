import { Menu } from "lucide-react"
import { navItems } from "./utilis/nav"
import { useState } from "react"
import { NavBarResponse } from "./NavBarResponse"

export const Nav = () => {
    const [open, setOpen] = useState(false)
    return (
        <>
        <nav className=" bg-white flex flex-row items-center justify-around h-20 w-full border-b-2 border-tertiary fixed z-50">
            <h1 className="text-2xl text-primary font-bold">Velaz</h1>
            <ul className="hidden md:flex flex-row justify-evenly items-center gap-2">
                <li className="flex flex-row items-center justify-center gap-5">
                    {navItems.map((item) => (
                        <a key={item.id} href={item.path}>{item.label}</a>
                    ))}
                </li>
            </ul>
            <button className="hidden md:flex flex-row items-center justify-center gap-4 bg-primary p-2 rounded-2xl shadow-2xl">Empeza tu proyecto</button>
            <div className="md:hidden">
                <Menu
                onClick={() => setOpen(!open)}
                className="text-4xl"
                />
            </div>
        </nav>
        <NavBarResponse open={open} setOpen={setOpen}/>
        </>
    )
}
