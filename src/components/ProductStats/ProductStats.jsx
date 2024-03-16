import React from 'react';
import { BsCart3 } from 'react-icons/bs';
import { IoBagOutline } from 'react-icons/io5';

const ProductStats = ({totalSells, totalProduct, category}) => {
    return (
        <div>
            {/* card container */}
            <div className='flex justify-center mb-5'>
                <div className='flex flex-col gap-5 justify-center p-4 lg:p-12 mt-5 bg-white lg:w-5/6'>
                    <div className='flex justify-between items-center'>
                        <h3 className="text-2xl ">Total Summary: <span className='font-semibold'>{category}</span></h3>
                    </div>
                    {/* cards */}
                    <div className='grid grid-cols-2 gap-4 lg:gap-10'>
                        <div className='max-w-[25rem] border border-gray-400 shadow-md rounded-md flex gap-5 items-center p-2 lg:p-4 '>
                            <div className='p-3 bg-[#9da6c0] rounded-lg '>
                                <div className='bg-[#0a1d56] p-2 rounded-lg text-white text-xl '>
                                    <IoBagOutline className='font-semibold' />
                                </div>
                            </div>
                            <div>
                                <h3 className='text-sm font-medium '>Total Sales Amount</h3>
                                <h2 className='text-xl font-semibold '>{totalSells} BDT</h2>
                            </div>
                        </div>

                        <div className='max-w-[25rem] pr-[3rem] border border-gray-400 shadow-md rounded-md flex gap-5 items-center p-4 '>
                            <div className='p-3 bg-[#9da6c0] rounded-lg '>
                                <div className='bg-[#0a1d56] p-2 rounded-lg text-white text-xl '>
                                    <BsCart3 className='font-semibold' />
                                </div>
                            </div>
                            <div>
                                <h3 className='text-sm font-medium '>Total Product Sold</h3>
                                <h2 className='text-[1.3rem] font-semibold '>{totalProduct}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductStats;