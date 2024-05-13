import Image from 'next/image';
import { Phone, User, MapPin, Mail } from 'lucide-react';
import tiger from '../../../public/images/user/Walking_tiger_female (2).jpg'
import persion from '../../../public/images/user/7b5f471b137608f772e9b1b9bbbb250a.jpg'
import { DataTableDemo } from '../Table/table';
import { TableDemo } from './StudentPaymentTable';
const StudentsDetail = () => {
  return (
   <div>
      <div className="flex gap-5 p-2 w-full  ">
        <div className="w-3/4 border shadow-lg rounded-md bg-lightModeBackgroundColor dark:bg-darkModeBackgroundColor">
          <Image src={tiger} alt='tiger' className='w-full h-[130px] rounded'></Image>
          <div className='ml-6 mt-[-50px]'>
            <Image src={persion} alt='tiger' className='w-[120px] h-[120px] border-8 rounded-full border-sky-500 '></Image>
            <h1 className='text-2xl font-bold my-2'>Mohammad Sohan</h1>
            <span className='mb-2'>student</span>
            <div className='flex justify-between my-2 p-4'>
              <div>
                <div className='flex items-center gap-3'>
                  <User className='bg-iconBackgroundColor p-2 w-[50px] h-[50px] rounded-full' />
                  <div>
                    <span>Parents:</span>
                    <p className='text-base font-semibold'>Nurol Islam</p>
                  </div>
                </div>
                <div className='flex items-center gap-3 mt-2'>
                  <Phone className='bg-iconBackgroundColor p-2 w-[50px] h-[50px] rounded-full' />
                  <div>
                    <span>Phone:</span>
                    <p className='text-base font-semibold'>+5437594323656</p>
                  </div>
                </div>

              </div>
              <div className=''>
                <div className='flex items-center gap-3 justify-end'>
                  <MapPin className='bg-iconBackgroundColor p-2 w-[50px] h-[50px] rounded-full' />
                  <div>
                    <span>Address:</span>
                    <p className='text-base font-semibold'>Chattogram</p>
                  </div>
                </div>
                <div className='flex items-center gap-3 mt-2'>
                  <Mail className='bg-iconBackgroundColor p-2 w-[50px] h-[50px] rounded-full' />
                  <div>
                    <span>Email:</span>
                    <p className='text-base font-semibold'>sohan.com</p>
                  </div>
                </div>

              </div>
              <div>

              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="border h-[190px] shadow-lg rounded-md p-2 bg-lightModeBackgroundColor dark:bg-darkModeBackgroundColor">
            <div className="w-full rounded-md p-4">
              <Image src={persion} alt='tiger' className='w-[70px] h-[70px] border-8 rounded-full  '></Image>
              <h3>Teacher Name</h3>
              <h1 className="font-medium text-lg">Basic Algorithm</h1>
              <p>Algorithm</p>
            </div>
          </div>
          <div className=" border h-[190px] shadow-lg rounded-md p-2 my-2 bg-lightModeBackgroundColor dark:bg-darkModeBackgroundColor">
            <div className="w-full rounded-md p-4">
              <Image src={persion} alt='tiger' className='w-[70px] h-[70px] border-8 rounded-full  '></Image>
              <h3>Teacher Name</h3>
              <h1 className="font-medium text-lg">Basic Algorithm</h1>
              <p>Algorithm</p>
            </div>
          </div>

        </div>

      </div>
      <div className='my-12 w-[75%] rounded shadow-lg p-2 bg-lightModeBackgroundColor dark:bg-darkModeBackgroundColor'>
        <h1>Payment History</h1>
        <hr />
        <TableDemo></TableDemo>
      </div>
   </div>
  );
};

export default StudentsDetail;
