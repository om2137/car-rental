import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import {useState} from 'react';
import Button from './Button';


const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: 700,
  minWidth: 330,
  bgcolor: 'background.paper',
  border: '2px solid #9e9e9e',
  borderRadius: '8px',
  boxShadow: 24,
  pt: 3,
  px: 2,
  pb: 3,
};

// main modal
export default function TestModal( { name, maker,model,year,color,mileage,rentaldetails}:any ) {

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  
  return (
    <div className=''>
      
      <div className=''>
        <Button label={name} onClick={handleOpen} className='bg-slate-600 hover:bg-slate-500 px-3 '/>
      </div>      
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style }} className=' overflow-auto w-4/5 2xl:h-[46rem] h-[35rem]'>
          
          <div className='flex justify-between'>
            <div className='w-full'>
                <div className='text-4xl font-bold'>
                  Details
                </div>
            </div>
            <div className=' pb-2'>
                <Button label="Back" onClick={handleClose} className="bg-gray-500 hover:bg-gray-400 px-3"/>
            </div>
          </div>
          <div>
              <div><span className='font-semibold'>Maker:</span>{maker}</div>
              <div><span className='font-semibold'>Model:</span>{model}</div>
              <div><span className='font-semibold'>Year:</span>{year}</div>
              <div><span className='font-semibold'>Color:</span>{color}</div>
              <div><span className='font-semibold'>Milage:</span>{mileage}</div>
              <div><span className='font-semibold'>Rental Details:</span>{rentaldetails?.rentalPricePerDay}/day</div>
          </div>
          <div>
            <button className='bg-indigo-500'>Contact Vendor</button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

