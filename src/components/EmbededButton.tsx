import {Button, Typography} from '@mui/material';
import type {FC} from 'react';

export const EmbededButton: FC = () => {
    return (
        <Button
            sx={{width: '100%'}}
            variant='contained'
            onClick={async (): Promise<void> => await chrome.runtime.sendMessage({action: 'redirectShorts'})}
        >
            <Typography
                fontFamily={'Arial'}
                sx={{color: 'black', textTransform: 'none'}}
            >
                {'go to videOo'}
            </Typography>
        </Button>
    );
};
