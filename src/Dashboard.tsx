import PropertyCard from './PropertyCard';

const mockupData = [
  {
    id: 1,
    city: 'Fortaleza',
    state: 'Ceará',
    street: 'Avenida Beira Mar',
    neighborhood: 'Meireles',
    zipcode: 60165,
    type: 'Single-Family',
    bathrooms: 3,
    bedrooms: 4,
    size: 2500,
    parking: 2,
    buy_price: 850000, // Random buy_price
    interest_rate: 4,
    finance_options: 30,
    rental_price: 3500,
    created_at: '2023-10-11 09:00:00',
  },
  {
    id: 2,
    city: 'Fortaleza',
    state: 'Ceará',
    street: 'Rua Monsenhor Tabosa',
    neighborhood: 'Centro',
    zipcode: 60015,
    type: 'Condo',
    bathrooms: 2,
    bedrooms: 2,
    size: 1200,
    parking: 1,
    buy_price: 1300000, // Random buy_price
    interest_rate: 3.5,
    finance_options: 15,
    rental_price: 4500,
    created_at: '2023-10-11 09:15:00',
  },
  {
    id: 3,
    city: 'Fortaleza',
    state: 'Ceará',
    street: 'Avenida Desembargador Moreira',
    neighborhood: 'Dionisio Torres',
    zipcode: 60170,
    type: 'Townhouse',
    bathrooms: 2.5,
    bedrooms: 3,
    size: 1800,
    parking: 1,
    buy_price: 480000, // Random buy_price
    interest_rate: 4.2,
    finance_options: 20,
    rental_price: 2800,
    created_at: '2023-10-11 09:30:00',
  },
  {
    id: 4,
    city: 'Fortaleza',
    state: 'Ceará',
    street: 'Rua Canuto de Aguiar',
    neighborhood: 'Meireles',
    zipcode: 60160,
    type: 'Apartment',
    bathrooms: 1,
    bedrooms: 1,
    size: 800,
    parking: 0,
    buy_price: 320000, // Random buy_price
    interest_rate: 3.8,
    finance_options: 25,
    rental_price: 2000,
    created_at: '2023-10-11 09:45:00',
  },
  {
    id: 5,
    city: 'Fortaleza',
    state: 'Ceará',
    street: 'Avenida Dom Luís',
    neighborhood: 'Aldeota',
    zipcode: 60160,
    type: 'Penthouse',
    bathrooms: 3.5,
    bedrooms: 3,
    size: 3500,
    parking: 2,
    buy_price: 1900000, // Random buy_price
    interest_rate: 3.6,
    finance_options: 30,
    rental_price: 6000,
    created_at: '2023-10-11 10:00:00',
  },
  {
    id: 6,
    city: 'Fortaleza',
    state: 'Ceará',
    street: 'Avenida Washington Soares',
    neighborhood: 'Edson Queiroz',
    zipcode: 60810,
    type: 'Ranch',
    bathrooms: 4,
    bedrooms: 5,
    size: 4000,
    parking: 3,
    buy_price: 1400000, // Random buy_price
    interest_rate: 4.5,
    finance_options: 20,
    rental_price: 4500,
    created_at: '2023-10-11 10:15:00',
  },
  {
    id: 7,
    city: 'Fortaleza',
    state: 'Ceará',
    street: 'Rua Costa Barros',
    neighborhood: 'Aldeota',
    zipcode: 60150,
    type: 'Duplex',
    bathrooms: 2,
    bedrooms: 4,
    size: 2200,
    parking: 2,
    buy_price: 900000, // Random buy_price
    interest_rate: 3.7,
    finance_options: 25,
    rental_price: 3500,
    created_at: '2023-10-11 10:30:00',
  },
  {
    id: 8,
    city: 'Fortaleza',
    state: 'Ceará',
    street: 'Rua Padre Valdevino',
    neighborhood: 'Aldeota',
    zipcode: 60120,
    type: 'Bungalow',
    bathrooms: 1.5,
    bedrooms: 2,
    size: 1400,
    parking: 1,
    buy_price: 430000, // Random buy_price
    interest_rate: 4.0,
    finance_options: 20,
    rental_price: 2500,
    created_at: '2023-10-11 10:45:00',
  },
  {
    id: 9,
    city: 'Fortaleza',
    state: 'Ceará',
    street: 'Rua Senador Pompeu',
    neighborhood: 'Centro',
    zipcode: 60025,
    type: 'Brownstone',
    bathrooms: 3,
    bedrooms: 4,
    size: 2800,
    parking: 1,
    buy_price: 1700000, // Random buy_price
    interest_rate: 3.9,
    finance_options: 30,
    rental_price: 5500,
    created_at: '2023-10-11 11:00:00',
  },
  {
    id: 10,
    city: 'Fortaleza',
    state: 'Ceará',
    street: 'Avenida Beira Mar',
    neighborhood: 'Meireles',
    zipcode: 60165,
    type: 'Mansion',
    bathrooms: 7,
    bedrooms: 8,
    size: 8000,
    parking: 4,
    buy_price: 2000000, // Random buy_price
  },
];

export default function Dashboard() {
  return (
    <div className='w-full h-[87%] flex'>
      <div className='w-[35%] overflow-y-scroll cards border-r border-slate-200 pt-10 items-center flex flex-col gap-4 px-4'>
        {mockupData.map((property) => {
          return (
            <PropertyCard
              key={property.id}
              street={property.street}
              neighborhood={property.neighborhood}
              price={property.buy_price}
              bedrooms={property.bedrooms}
              bathrooms={property.bathrooms}
              size={property.size}
            />
          );
        })}
      </div>
    </div>
  );
}
