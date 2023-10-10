interface TopBarProps {
  userId: string;
  city: string;
}

import SearchComponent from "./SearchComponent";

export default function TopBar({ userId, city }: TopBarProps) {
  return (
    <div className="w-full h-[13%] flex items-start justify-start pl-14 pt-4 pr-14 gap-20">
      <div className="">
        <h1 className="text-3xl font-light">
          Bom dia, <span className="font-bold">'nome do usuário'{userId}</span>
        </h1>
        <h1>{city} / address</h1>
      </div>
      <div className="w-full flex-[0.5] h-full">
        <SearchComponent />
      </div>
    </div>
  );
}
