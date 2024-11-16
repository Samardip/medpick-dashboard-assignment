import React from 'react'
import LinearBar from '../../common/linearBar/linearBar';

export const Products = () => {
    const dataArray = [
        {
            name: "Laproscopes",
            popularity: 70,
            sale: "45%",
            barColor: 'rgba(0, 149, 255, 1)',
            barBackground: 'rgba(205, 231, 255, 1)',
            popularityClassName: "",
            salesClassName: ""
        },
        {
            name: "Diagnostic Equipments",
            popularity: 60,
            sale: "29%",
            barColor: 'rgba(0, 224, 150, 1)',
            barBackground: 'rgba(140, 250, 199, 1)',
            popularityClassName: "",
            salesClassName: ""
        },
        {
            name: "Wheelchairs",
            popularity: 55,
            sale: "18%",
            barColor: 'rgba(136, 77, 255, 1)',
            barBackground: 'rgba(197, 168, 255, 1)',
            popularityClassName: "",
            salesClassName: ""
        },
        {
            name: "BP Monitors",
            popularity: 40,
            sale: "25%",
            barColor: 'rgba(255, 143, 13, 1)',
            barBackground: 'rgba(255, 213, 164, 1)',
            popularityClassName: "",
            salesClassName: ""
        },
    ];
    return (
        <div className='flex flex-col w-[50%] bg-white mx-8 mt-2 mb-8  rounded-[8px] shadow-sm'>
            <div className='font-bold text-md mb-8 px-8 pt-8'>
                Top Products
            </div>
            <div>
                <div className='flex justify-start text-gray-400 font-semibold mx-8 mb-2'>
                    <div className='w-[8%]'>#</div>
                    <div className='w-[35%]'>Name</div>
                    <div className='w-[47%]'>Popularity</div>
                    <div className='w-[10%]'>Sale</div>
                </div>
                {
                    dataArray?.map((item, index) => {
                        return <div className='flex justify-start text-gray-500 font-semibold py-4 border-t border-t-gray-100 mx-8 mb-2'>
                            <div className='w-[8%]'>0{index + 1}</div>
                            <div className='w-[35%]'>{item?.name}</div>
                            <div className='flex justify-start items-center text-custom-transaction-text-blue w-[47%] pr-[40px]'><LinearBar progess={item?.popularity} barColor={item?.barColor} barBackground={item?.barBackground} /></div>
                            <div className='flex justify-center items-center bg-blue-200 border border-blue-400 text-blue-400 px-2 rounded-[6px] w-[10%]'
                                style={{
                                    background: item?.barBackground,
                                    border: `1px solid ${item?.barColor}`,
                                    color: item?.barColor
                                }}
                            >{item?.sale}</div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}
