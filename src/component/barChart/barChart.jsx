import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

export default function BarChartGraph() {
    let dark = false;
    const yAxisLevels = [0,5,10,15,20,25]; // Adjust levels as needed

    return (
        <div className="py-4 px-6 bg-white rounded-[8px]" style={{ position: 'relative', height: '300px' }}>
             <div className='flex flex-col justify-center items-center m-auto'>
                {yAxisLevels.map((level, index) => (
                    <div
                        key={index}
                        style={{
                            position: 'absolute',
                            top: `${100 - (level / 40) * 100 -30}%`, 
                            // left: 0,
                            // right: 0,
                            width: '80%',
                            zIndex: 0,
                            height: '1px',
                            backgroundColor: dark ? 'grey' : '#E0E0E0',
                            opacity: 0.5,
                        }}
                    />
                ))}
            </div>
            <BarChart
                series={[
                    {
                        data: [13, 17, 6, 16, 11,16, 22],
                        color: 'rgba(0, 149, 255, 1)',
                        barStyle: {
                            borderTopLeftRadius: '10px', // Top left corner radius
                            borderTopRightRadius: '10px', // Top right corner radius
                        },
                        barWidth: 10, // Adjust bar width for this series
                        strokeWidth: 10,
                    },
                    {
                        data: [11, 10, 22, 7, 10, 14, 11],
                        color: 'rgba(243, 148, 30, 1)',
                        barStyle: {
                            borderTopLeftRadius: '10px', // Top left corner radius
                            borderTopRightRadius: '10px', // Top right corner radius
                        },
                        barWidth: 10, // Adjust bar width for this series
                    }
                ]}
                sx={{
                    borderRadius: '20px',
                    "& .MuiChartsAxis-left .MuiChartsAxis-tickLabel": {
                        strokeWidth: "0.4",
                        fill: dark ? "grey" : 'black',
                    },
                    "& .MuiChartsAxis-bottom .MuiChartsAxis-tickLabel": {
                        strokeWidth: "0.5",
                        fill: dark ? "grey" : 'black',
                    },
                    "& .MuiChartsAxis-bottom .MuiChartsAxis-line": {
                        stroke: 'grey',
                        strokeWidth: 0.4,
                    },
                    "& .MuiChartsAxis-left .MuiChartsAxis-line": {
                        stroke: dark
                            ? "rgb(39 39 39 / 5%) !important"
                            : 'var(--Primary-Light, rgba(247, 249, 251, 1)) !important',
                        strokeWidth: 0.4,
                    },
                    "& .MuiChartsAxis-tick": {
                        stroke: dark
                            ? "rgb(39 39 39 / 5%) !important"
                            : 'var(--Primary-Light, rgba(247, 249, 251, 1)) !important',
                        strokeWidth: 0.4,
                    },
                    "& .MuiChartsAxis-tickLabel": {
                        fill: dark ? '#767676 !important' : '#00000063 !important',
                    },
                }}
                height={290}
                xAxis={[
                    {
                        data: [
                            'Monday',
                            'Tuesday',
                            'Wednesday',
                            'Thursday',
                            'Friday',
                            'Saturday',
                            'Sunday',
                        ],
                        scaleType: 'band',
                        categoryGapRatio: 0.5,
                        barGapRatio: 0.5
                    },
                ]}
                margin={{ top: 10, bottom: 50, left: 40, right: 10 }}
                barGap={5} // Adjusts gap between bars within a group
                barCategoryGap={50} // Adjusts gap between categories (x-axis labels)
            />
        </div>
    );
}
