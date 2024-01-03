const Box = () => {
  return (
    <div className="flex flex-col gap-6 p-10 h-auto w-full rounded-lg bg-[#fff] shadow-none shadow-gray-300/50 sm:shadow-md">
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-bold">Valor</h1>
        <h2 className="text-3xl text-slate-500 font-bold">0</h2>
      </div>

      <div className="flex flex-col gap-2 pt-6 border-t border-bg-[#e4e4e7] sm:flex-row">
        <button className="px-4 py-1 rounded-lg bg-black text-white hover:opacity-80">
          Incrementar
        </button>
        <button className="px-4 py-1 rounded-lg bg-[#f4f4f5] text-black hover:opacity-80">
          Decrementar
        </button>
      </div>
    </div>
  );
};

export default Box;
