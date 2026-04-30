
export const CardProyects = ({ titulo, desc, modalidad, img }) => {
  return (
    <div className="flex flex-col items-start justify-start h-80 w-72 rounded-2xl shadow-2xl overflow-hidden border border-gray-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-3xl group cursor-pointer">
      <div className="w-full h-[55%] overflow-hidden shrink-0">
        <img
          src={img}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col items-start justify-between gap-2 p-4 w-full flex-1">
        <div className="flex flex-row items-center justify-between w-full">
          <h5 className="text-base font-semibold">{titulo}</h5>
          <span className="h-auto w-auto px-2 py-1 bg-tertiary text-secondary rounded-2xl text-[10px] font-medium shrink-0">
            {modalidad}
          </span>
        </div>
        <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">{desc}</p>
      </div>
    </div>
  )
}
