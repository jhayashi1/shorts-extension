import {Button, Container, Tooltip, Typography} from '@mui/material';
import FeaturedVideoIcon from '@mui/icons-material/FeaturedVideo';
import type {FC} from 'react';

export const EmbededButton: FC = () => {
    return (
        <Container>
            <Tooltip
                placement='left'
                title={<Typography sx={{fontSize: '1.2rem', my: '0.5rem'}}>Go to video</Typography>}
            >
                <Button
                    sx={{
                        width          : '48px',
                        height         : '48px',
                        borderRadius   : '50%',
                        minWidth       : 0,
                        p              : 0,
                        backgroundColor: 'deepblue',
                        '&:hover'      : {
                            backgroundColor: 'red',
                        },
                    }}
                    variant='contained'
                    onClick={async (): Promise<void> => await chrome.runtime.sendMessage({action: 'redirectShorts'})}
                >
                    <FeaturedVideoIcon fontSize='large' />
                </Button>
            </Tooltip>
        </Container>
    );
};
