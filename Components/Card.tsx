import React from 'react'
import TestModal from './Modal'

export default function Card( {maker,model,year,color,mileage,rentaldetails}:any ) {
  return (
    <div className="w-full rounded-lg shadow-md lg:max-w-sm">
          
          <div className="p-4">
                <img
                  className="object-cover w-full h-32 rounded-lg"
                  src="https://imgd-ct.aeplcdn.com/370x208/n/cw/ec/141867/nexon-exterior-right-front-three-quarter-71.jpeg"
                  alt="image"
              />
              <h4 className="text-xl font-semibold tracking-tight text-blue-600">
                  {maker} {model}
              </h4>
              <TestModal name='Details' maker={maker} model={model} year={year} color={color} mileage={mileage} rentaldetails={rentaldetails}/>
          </div>
      </div>
  )
}


