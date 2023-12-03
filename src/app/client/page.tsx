'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react';

import Card from '../../../Components/Card';


export default function Home() {
    const [cars, setCars] = useState([]);

  useEffect(() => {
    // Assuming carsData.json is in the public directory
    fetch('/carsData.json')
      .then((response) => response.json())
      .then((data) => setCars(data.cars))
      .catch((error) => console.error('Error fetching car data:', error));
  }, []);
  return (
    <main className="flex flex-col h-screen items-center py-12 px-24">
        <div>
            <div className="font-bold justify-center text-center text-4xl">
                <h1>Featured Car</h1>
            </div>
            <div>
                <h1></h1>
                {/* <ul className='border '>
                    {cars.map((car) => (
                    <li key={car.id} className='border border-black'>
                        <p>{`${car.year} ${car.make} ${car.model}`}</p>
                        <p>{`Color: ${car.color}, Mileage: ${car.mileage}`}</p>
                        {car.rentalDetails.available ? (
                        <p>{`Available for $${car.rentalDetails.rentalPricePerDay}/day`}</p>
                        ) : (
                        <p>Not available for rent</p>
                        )}
                    </li>
                    ))}
                </ul> */}
                <div className='flex flex-wrap p-10'>
                    {cars.map((car) => (
                        <div className='p-4 w-96' key={car.id}>
                            <Card  maker={car.make} model={car.model} year={car.year} color={car.color} milage={car.mileage} rentaldetails={car.rentalDetails}/>
                        </div>
                        
                    ))}
                </div>
            </div>
        </div>
    </main>
  )
}
