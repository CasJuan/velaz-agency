import { Menu } from "lucide-react"
import { navItems } from "../../data/nav"
import { useState } from "react"
import { NavBarResponse } from "./NavBarResponse"

export const Nav = () => {
    const [open, setOpen] = useState(false)
    return (
        <>
        <nav className="bg-white w-full border-b-2 border-tertiary fixed z-50 h-20">
            <div className="max-w-7xl mx-auto px-4 md:px-8 h-full flex flex-row items-center justify-between">
                <h1 className="text-2xl text-primary font-bold">Velaz</h1>
                <ul className="hidden md:flex flex-row justify-center items-center gap-8">
                    {navItems.map((item) => (
                        <li key={item.id}>
                            <a href={item.path} className="font-medium hover:text-primary transition-colors">{item.label}</a>
                        </li>
                    ))}
                </ul>
                <button className="hidden md:flex flex-row items-center justify-center gap-2 bg-primary text-secondary px-6 py-2 rounded-2xl shadow-xl hover:bg-secondary hover:text-white transition-colors">Empezá tu proyecto</button>
                <div className="md:hidden">
                    <Menu
                    onClick={() => setOpen(!open)}
                    className="text-4xl cursor-pointer text-primary"
                    />
                </div>
            </div>
        </nav>
        <NavBarResponse open={open} setOpen={setOpen}/>
        </>
    )
}
