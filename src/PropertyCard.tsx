interface PropertyCardProps {
  key: number;
  city: string;
  state: string;
  street: string;
  neighborhood: string;
  zipcode: number;
}

export default function PropertyCard({
  city,
  state,
  street,
  neighborhood,
  zipcode,
}: PropertyCardProps) {
  return (
    <div className='border border-slate-200 rounded-xl w-[80%] h-40'>
      <h1>{neighborhood}</h1>
      <h1>{street}</h1>
      <h1>{city}</h1>
      <h1>{state}</h1>
      <h1>{zipcode}</h1>
      <h1>{price}</h1>
    </div>
  );
}
