import { SlMagnifier } from "react-icons/sl";

export default function SearchComponent() {
  return (
    <div className="rounded-lg bg-white p-2 border border-slate-200 flex flex-row items-center">
      <SlMagnifier className="w-4 h-4 opacity-30 mr-2 ml-2" />
      <input
        type="text"
        placeholder="Pesquisar"
        className="w-full h-full transition-all duration-500 ease-in-out text-sm outline-none"
      />
    </div>
  );
}
