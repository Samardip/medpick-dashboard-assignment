import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

export default function ChartsOverviewDemo() {
    let dark = false;
    return (
            <BarChart
                series={[
                    {
                        data: [35, 44, 24, 34, 20, 30, 10], 
                        color: 'rgba(0, 149, 255, 1)',
                        barStyle: {
                            borderTopLeftRadius: '10px', // Top left corner radius
                            borderTopRightRadius: '10px', // Top right corner radius
                        },
                    },
                    {
                        data: [51, 6, 27, 30, 15, 24, 29], 
                        color: 'rgba(243, 148, 30, 1)',
                        barStyle: {
                            borderTopLeftRadius: '10px', // Top left corner radius
                            borderTopRightRadius: '10px', // Top right corner radius
                        }
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
                    },
                ]}
                margin={{ top: 10, bottom: 50, left: 40, right: 10 }} // Increased bottom margin to 50
                barGap={5} // Adjusts gap between bars within a group
                barCategoryGap={50} // Adjusts gap between categories (x-axis labels)
            />
    );
}