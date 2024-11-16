import DateRangeIcon from '@mui/icons-material/DateRange';
import React from 'react'

export const OrderSummary = () => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let date = new Date();
    let customDate = date.getDate() + '-' + months[date.getMonth()] + '-' + date.getFullYear();
    const orderSummary = [
        {
            icon: 'summary-1.png',
            total: '300',
            title: 'Total Order',
            subTitle: '+8% from yesterday',
            className: 'bg-custom-summary-1'
        },
        {
            icon: 'summary-2.png',
            total: '50',
            title: 'Approval Pending',
            subTitle: '+5% from yesterday',
            className: 'bg-custom-summary-2'
        },
        {
            icon: 'summary-3.png',
            total: '250',
            title: 'Total Transaction',
            subTitle: '+1.2% from yesterday',
            className: 'bg-custom-summary-3'
        },
        {
            icon: 'summary-4.png',
            total: '20',
            title: 'Requests Recieved',
            subTitle: '0.5% from yesterday',
            className: 'bg-custom-summary-4'
        },
    ]
    return (
        <div className='py-4 px-8' >
            <div className='py-4 px-6 bg-white rounded-[8px] shadow-sm'>
                <div className='flex justify-between items-center'>
                    <div className='font-bold text-md'>
                        Todays Order Summary
                    </div>
                    <div className='flex gap-4 items-center'>
                        <div className='flex'>
                            <div className='text-custom-orange'>{customDate}</div>
                            <DateRangeIcon className='!text-custom-orange' />
                        </div>
                        <div className='flex gap-2 justify-center items-center border-[2px] border-black rounded-[8px] p-2'>
                            <div className='h-[100%] flex justify-center items-center mt-1'><img src="../assests/export.png" alt="export" className='w-[20px] h-[20px]' /></div>
                            <div className='font-semibold'>Download</div>
                        </div>
                    </div>
                </div>
                <div className='flex gap-6 mt-[50px] pb-[15px]'>
                    {
                        orderSummary?.map((item) => {
                            return <div className={`flex flex-col p-[20px] gap-2 h-[100%] w-[100%] ${item?.className} rounded-xl`}>
                                <div><img src={`../assests/${item?.icon}`} alt={item?.icon} /></div>
                                <div className='font-bold text-xl'>{item?.total}</div>
                                <div className='font-semibold text-sm  text-custom-grey'>{item?.title}</div>
                                <div className='text-xs font-semibold text-custom-blue'>{item?.subTitle}</div>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}
