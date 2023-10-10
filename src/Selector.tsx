interface SelectorProps {
  name: string;
  isSelected: boolean;
  onClick: () => void;
}

import { BsFillHouseFill } from "react-icons/bs";
import { BsHeart } from "react-icons/bs";
import { BsGearFill } from "react-icons/bs";

export default function Selector({ name, isSelected, onClick }: SelectorProps) {
  const selectedStyle = isSelected
    ? "bg-slate-300 bg-[#19274f] text-white rounded-xl mt-2 mb-2 flex flex-row items-center justify-start p-2 gap-4 cursor-pointer"
    : "bg-white hover:bg-slate-300 rounded-xl mt-2 mb-2 flex flex-row items-center justify-start p-2 gap-4 cursor-pointer";

  return (
    <div className={selectedStyle} onClick={onClick}>
      {name === "Dashboard" ? (
        <BsFillHouseFill fill={isSelected ? "white" : "#19274f"} />
      ) : name === "Favoritos" ? (
        <BsHeart fill={isSelected ? "white" : "#19274f"} />
      ) : (
        <BsGearFill fill={isSelected ? "white" : "#19274f"} />
      )}
      <h1 className={isSelected ? "white" : "text-[#19274f]"}>{name}</h1>
    </div>
  );
}
