import { useState } from "react";
import Selector from "./Selector";

export default function Navigation() {
  const [selectedOption, setSelectedOption] = useState<string>("Dashboard");

  const handleSelect = (name: string) => {
    setSelectedOption(name);
  };

  return (
    <>
      <Selector
        name="Dashboard"
        isSelected={selectedOption === "Dashboard"}
        onClick={() => handleSelect("Dashboard")}
      />
      <Selector
        name="Favoritos"
        isSelected={selectedOption === "Favoritos"}
        onClick={() => handleSelect("Favoritos")}
      />
      <Selector
        name="Ajustes"
        isSelected={selectedOption === "Ajustes"}
        onClick={() => handleSelect("Ajustes")}
      />
    </>
  );
}
