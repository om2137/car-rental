'use client'
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import TestModal from '../../../Components/Modal';

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
    <main className="flex flex-col h-screen items-center  p-24">
      <div className="font-bold justify-center text-center text-4xl">
        <h1>List of your Cars</h1>
      </div>
      <div className='p-4'>
        <ul className='border p-4'>
                    {cars.map((car) => (
                    <li key={car.id} className='p-4'>
                        <TestModal name={`${car.year} ${car.make} ${car.model}`} maker={car.make} model={car.model} year={car.year} color={car.color} milage={car.mileage} rentaldetails={car.rentalDetails}/>
                    </li>
                    ))}
                </ul>
      </div>
      <div>
        <Link href={'/vendor/new'}>
          Add more Cars
        </Link>
        
      </div>
    </main>
  )
}
