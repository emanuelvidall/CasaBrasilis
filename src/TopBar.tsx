interface TopBarProps {
  userId: string;
  city: string;
}

import SearchComponent from './SearchComponent';
import Sininho from './Sininho';
import UserMenu from './UserMenu';

export default function TopBar({ userId, city }: TopBarProps) {
  return (
    <div className='w-full h-[13%] flex items-start justify-start pl-14 pt-4 pr-14 gap-20 border-b border-slate-200'>
      <div className=''>
        <h1 className='text-3xl font-light text-[#19274f]'>
          Bom dia, <span className='font-bold text-[#19274f]'>'nome do usuário'{userId}</span>
        </h1>
        <h1 className='text-[#19274f]'>{city} / address</h1>
      </div>
      <div className='w-full flex-1 h-full flex flex-row justify-between'>
        <SearchComponent />
        <Sininho />
        <UserMenu />
      </div>
    </div>
  );
}
