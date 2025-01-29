import {Button} from '@mui/material';
import PersonalVideoIcon from '@mui/icons-material/PersonalVideo';
import type {FC} from 'react';

export const EmbededButton: FC = () => {
    return (
        <Button
            sx={{
                width       : '50px', // Adjust size
                height      : '50px',
                borderRadius: '50%',
                minWidth    : 0,
                p           : 0,
                background  : 'red',
            }}
            variant='contained'
            onClick={async (): Promise<void> => await chrome.runtime.sendMessage({action: 'redirectShorts'})}
        >
            <PersonalVideoIcon />
        </Button>
    );
};
