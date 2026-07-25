import { Check, ArrowRight } from "lucide-react"
import React from "react";


export const CardServices = ({ icon, title, desc, items, btn }) => {

    const renderIcon = () => {
        if (React.isValidElement(icon)) return icon;
        if (typeof icon === 'function') return React.createElement(icon);
        return icon;
    };

    return (
        <div className="flex flex-col items-start justify-center gap-5 h-auto w-96 bg-[#090E1A] rounded-2xl shadow p-5 border border-transparent transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-primary/20 group cursor-pointer">
            <div className="bg-secondaryBlack h-10 w-10 flex flex-col items-center justify-center rounded-2xl shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-primary/40">
                {renderIcon()}
            </div>
            <h2 className="text-2xl font-bold transition-colors duration-300 text-secondary">
                {title}
            </h2>
            <p className="text-lg text-secondary">{desc}</p>
            <ul className="flex flex-col items-start justify-center gap-1">
                {items.map((item) => (
                    <li key={item} className="flex flex-row items-center gap-2 text-sm text-secondary">
                        <Check color="#2463EB" className="w-4 shrink-0" />
                        {item}
                    </li>
                ))}
            </ul>
            <button className="flex flex-row items-center justify-center gap-2 bg-tertiary text-secondary rounded-2xl shadow-2xl h-auto w-50 p-1 self-center transition-all duration-300 group-hover:bg-tertiary group-hover:text-white">
                {btn} <ArrowRight className="w-4" />
            </button>
        </div>
    )
}
