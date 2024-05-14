

import { DatePickerWithPresets } from '../../components/datePicker/DatePiker'
const AddedStudent = () => {
    return (
        <div className=''>
            {/* student details */}
            <h1 className='my-2 text-xl font-semibold'>Student Details</h1>
            <hr />

            <div className='flex lg:flex-row md:flex-row flex-col lg:items-start md:items-start items-center my-3'>
                <div className='w-1/3'>
                    <p>Photo<sup className='text-red-500'>*</sup></p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="130" className='bg-iconBackgroundColor rounded p-2 mb-2' height="130" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-plus"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><line x1="19" x2="19" y1="8" y2="14" /><line x1="22" x2="16" y1="11" y2="11" /></svg>
                    <input type="file" name="" id="upload" className='hidden' />
                    <label htmlFor="upload" className='bg-gradient-to-r from-buttonBgFrom to-buttonBgTo text-white px-4 py-2 shadow rounded cursor-pointer'>upload file</label>
                    <button className='px-4 py-2 rounded shadow border ml-2 hover:bg-red-400'>remove</button>
                   
                </div>
                <div className='w-2/3 '>
                    <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1'>
                       <div>
                            <label htmlFor=""><p>First Name<sup className='text-red-500'>*</sup></p></label>
                            <input type="text" className='shadow border-2 dark:border-white border-boderColor rounded  w-[90%] p-2 mb-3' placeholder='Mashrafe Bin' />
                       </div>
                       <div>
                            <label htmlFor=""><p>Last Name<sup className='text-red-500'>*</sup></p></label>
                            <input type="text" className='shadow border-2 dark:border-white border-boderColor rounded  w-[90%] p-2 mb-3' placeholder='Mashrafe Bin' />
                       </div>
                    </div>

                    <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1'>
                      <div className='flex'>
                            <div className=''>
                                <label htmlFor="" className=''><p>date of birth<sup className='text-red-500'>*</sup></p></label>
                                <DatePickerWithPresets></DatePickerWithPresets>
                            </div>
                            <div className=''>
                                <label htmlFor=""><p>Place of Birth<sup className='text-red-500'>*</sup></p></label>
                                <input type="text" className=' border-2 dark:border-white border-boderColor rounded  w-[85%] p-[6px]' placeholder='Place of Birth' />
                            </div>
                      </div>
                        <div className=''>
                            <label htmlFor=""><p>Parent Name<sup className='text-red-500 mt-3'>*</sup></p></label>
                            <input type="text" className=' border-2 dark:border-white border-boderColor rounded  w-[90%] p-2 mb-3' placeholder='syful islam' />
                        </div>
                    </div>
                    <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1'>
                        <div className=''>
                            <label htmlFor=""><p>Phone Number<sup className='text-red-500 mt-3'>*</sup></p></label>
                            <input type="text" className=' border-2 dark:border-white border-boderColor rounded  w-[90%] p-2 mb-3' placeholder='+5748935845' />
                        </div>
                        <div className=''>
                            <label htmlFor=""><p>Email<sup className='text-red-500 mt-3'>*</sup></p></label>
                            <input type="text" className=' border-2 dark:border-white border-boderColor rounded  w-[90%] p-2 mb-3' placeholder='mashrafi@gmail.com' />
                        </div>
                    </div>

                
                   

           <div> 
                        <label htmlFor=""><p>Address<sup className='text-red-500'>*</sup></p></label>
                <textarea name="" id="" className='shadow border-2 dark:border-white border-boderColor rounded  lg:w-[45%] md:w-[45%] w-[90%] h-[150px] p-2 mb-3'>
           </textarea>
           </div>
                </div>
            </div>

            {/* parents details*/}

            <div className='my-12'>
                <h1 className='my-2 text-xl font-semibold'>Student Details</h1>
                <hr />
                <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 my-3'>
                    <div>
                        <label htmlFor=""><p>First Name<sup className='text-red-500'>*</sup></p></label>
                        <input type="text" className='shadow border-2 dark:border-white border-boderColor rounded  w-[90%] p-2 mb-3' placeholder='Mashrafe Bin' />
                    </div>
                    <div>
                        <label htmlFor=""><p>Last Name<sup className='text-red-500'>*</sup></p></label>
                        <input type="text" className='shadow border-2 dark:border-white border-boderColor rounded  w-[90%] p-2 mb-3' placeholder='mortaza' />
                    </div>
                </div>
                <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1'>
                    <div>
                        <label htmlFor=""><p>Email<sup className='text-red-500'>*</sup></p></label>
                        <input type="text" className='shadow border-2 dark:border-white border-boderColor rounded  w-[90%] p-2 mb-3' placeholder='mortaza@gmail.com' />
                    </div>
                    <div>
                        <label htmlFor=""><p>Phone Number<sup className='text-red-500'>*</sup></p></label>
                        <input type="text" className='shadow border-2 dark:border-white border-boderColor rounded  w-[90%] p-2 mb-3' placeholder='+78597432' />
                    </div>
                </div>
                <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1'>
                    <div>
                        <label htmlFor=""><p>Address<sup className='text-red-500'>*</sup></p></label>
                        <textarea name="" id="" className='shadow border-2 dark:border-white border-boderColor rounded  w-[90%] h-[150px] p-2 mb-3'>
                        </textarea>
                        <button className='px-4 py-2 rounded shadow border mr-2 hover:bg-blue-300'>save as deaft</button>
                        <button className='bg-gradient-to-r from-buttonBgFrom to-buttonBgTo text-white px-4 py-2 shadow rounded'>save</button>
                    </div>
                    <div>
                        <label htmlFor=""><p>Payments<sup className='text-red-500'>*</sup></p></label>
                        <input type="checkbox" className='' name="" id="" /> <span className='mr-2'>Cash</span>
                        <input type="checkbox" className='w-[12px]' name="" id="" /> <span>Debits</span>
                    </div>
                </div>
             
            </div>
        </div>
    );
};

export default AddedStudent;