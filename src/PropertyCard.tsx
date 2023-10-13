interface PropertyCardProps {
  key: number;
  street: string;
  neighborhood: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  size: number;
}

import Picture from './assets/apartment-2.png';
import { IoIosResize } from 'react-icons/io';
import { useState } from 'react';

export default function PropertyCard({
  street,
  neighborhood,
  price,
  bedrooms,
  bathrooms,
  size,
}: PropertyCardProps) {
  const [selected, setSelected] = useState(false);

  return (
    <div
      className={
        selected
          ? 'border border-orange-500 rounded-xl w-full h-auto flex flex-row items-center align-center p-4 gap-4 cursor-pointer'
          : 'border border-slate-200 rounded-xl w-full h-auto flex flex-row items-center align-center p-4 gap-4 cursor-pointer'
      }
      onClick={() => setSelected(!selected)}
    >
      <div className='w-40 flex items-center align-center bg-[#e6f0fe] h-16 rounded-xl'>
        <img src={Picture} alt='apartment' className='rounded-xl' />
      </div>
      <div className='w-full gap-1 flex flex-col'>
        <h1 className='opacity-50'>{neighborhood}</h1>
        <h1 className='font-bold'>{street}</h1>
        <div className='text-xs opacity-50 flex flex-row gap-2 items-center'>
          <h1>{bedrooms} quartos</h1>
          <div className='w-1 h-1 bg-black rounded-full'></div>
          <h1>{bathrooms} banheiros</h1>
        </div>
        <div className='flex justify-between w-full'>
          <div className='flex flex-row items-center gap-2 opacity-50'>
            <IoIosResize className='w-4 h-4' />
            <h1>{size}m²</h1>
          </div>
          <div className=''>
            <h1 className='font-bold'>
              R$
              {price.toLocaleString('pt-BR')}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
