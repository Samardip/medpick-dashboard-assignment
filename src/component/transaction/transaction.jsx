import React from 'react'

export const Transaction = () => {
    const data = {
        name: "Shashi",
        date: "28/01/2024",
        status: "Delivered",
        amount: "Rs. 300"
    };

    const dataArray = Array(10).fill(data);
    return (
        <div className='py-2 bg-white border-[1px] border-custom-border-blue rounded-[6px] p-3'>
            <div className='text-center w-[100%] font-semibold py-5'>Last 10 Transactions</div>
            <div className='flex justify-around text-gray-400 font-semibold'>
                <div>Sl No.</div>
                <div>Name</div>
                <div>Date</div>
                <div>Status</div>
                <div>Amount</div>
            </div>
            {
                dataArray?.map((item,index) => {
                    return <div className='flex justify-around text-black font-semibold py-4'>
                        <div>{index+1}.</div>
                        <div>{item?.name}</div>
                        <div className='text-custom-transaction-text-blue'>{item?.date}</div>
                        <div className='text-custom-transaction-text-blue'>{item?.status}</div>
                        <div className='text-custom-orange'>{item?.amount}</div>
                    </div>
                })
            }
        </div>
    )
}
