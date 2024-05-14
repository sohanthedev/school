
import user from '../../../public/images/user/business-professional-icon.svg'
import { UserPlus } from 'lucide-react';
import { DatePickerWithPresets } from '../../components/datePicker/DatePiker'
const AddedStudent = () => {
    return (
        <div>
            <h1 className='my-2 text-xl font-semibold'>Student Details</h1>
            <hr />

            <div className='flex my-3'>
                <div className='w-1/3'>
                    <p>Photo<sup className='text-red-500'>*</sup></p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="130" className='bg-iconBackgroundColor rounded p-2 mb-2' height="130" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-plus"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><line x1="19" x2="19" y1="8" y2="14" /><line x1="22" x2="16" y1="11" y2="11" /></svg>
                    <input type="file" name="" id="upload" className='hidden' />
                    <label htmlFor="upload" className='bg-gradient-to-r from-buttonBgFrom to-buttonBgTo text-white px-4 py-2 shadow rounded'>upload file</label>
                    <button className='px-4 py-2 rounded shadow border ml-2 hover:bg-red-400'>remove</button>
                   
                </div>
                <div className='w-2/3 flex'>
                    <div className='grid grid-cols-2'>
                        
                    </div>
                <div className='w-[45%]'>
                    <label htmlFor=""><p>First Name<sup className='text-red-500'>*</sup></p></label>
                    <input type="text" className='shadow border-2 dark:border-white border-boderColor rounded  w-[90%] p-2 mb-3' placeholder='Mashrafe Bin' />
                    <div className='flex items-center'>
                        <div className='w-[45%]'>
                        <label htmlFor="" className=''><p>date of birth<sup className='text-red-500'>*</sup></p></label>
                        <DatePickerWithPresets></DatePickerWithPresets></div>
                    <div className='mt-3 w-[44%]'>
                        <label htmlFor=""><p>Place of Birth<sup className='text-red-500'>*</sup></p></label>
                            <input type="text" className=' border-2 dark:border-white border-boderColor rounded  w-[90%] p-2 mb-3' placeholder='Place of Birth' />
                    </div>

                    </div>
                    <div className=''>
                        <label htmlFor=""><p>Email<sup className='text-red-500 mt-3'>*</sup></p></label>
                        <input type="text" className=' border-2 dark:border-white border-boderColor rounded  w-[90%] p-2 mb-3' placeholder='mashrafi@gmail.com' />
                    </div>
                    <div className=''>
                        <label htmlFor=""><p>Address<sup className='text-red-500 mt-3'>*</sup></p></label>
                        <textarea className='border-2 dark:border-white border-boderColor rounded  w-[90%] p-2 mb-3' id="w3review" name="" rows="4" cols="30">
                            
                        </textarea>
                    </div>
                </div>
                    <div className='w-[45%]'>
                    <div className=''>
                        <label htmlFor=""><p>Last Name<sup className='text-red-500 mt-3'>*</sup></p></label>
                        <input type="text" className=' border-2 dark:border-white border-boderColor rounded  w-[90%] p-2 mb-3' placeholder='Mortaza' />
                    </div>
                    <div className=''>
                        <label htmlFor=""><p>Parent Name<sup className='text-red-500 mt-3'>*</sup></p></label>
                        <input type="text" className=' border-2 dark:border-white border-boderColor rounded  w-[90%] p-2 mb-3' placeholder='syful islam' />
                    </div>
                    <div className=''>
                        <label htmlFor=""><p>Phone Number<sup className='text-red-500 mt-3'>*</sup></p></label>
                        <input type="text" className=' border-2 dark:border-white border-boderColor rounded  w-[90%] p-2 mb-3' placeholder='+5748935845' />
                    </div>
                </div>

                </div>
            </div>
            <div>
                <h1 className='my-2 text-xl font-semibold'>Parents Details</h1>
                <hr />
            </div>
        </div>
    );
};

export default AddedStudent;