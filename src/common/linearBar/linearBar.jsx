import * as React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

export default function LinearBar({ progess,barColor,barBackground,height }) {
    return (
        <Box sx={{ width: '100%' }}>
            <LinearProgress variant="determinate" value={progess}
                sx={{
                    backgroundColor: barBackground,
                    height:height ?'10px':'4px',
                    borderRadius:'8px',
                    '& .MuiLinearProgress-bar': {
                        backgroundColor: barColor,
                        borderRadius:'8px',
                    },
                }}
            />
        </Box>
    );
}
