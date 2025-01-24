import {Button, Grid, Typography} from '@mui/material';
import {type FC} from 'react';
import {shortsRedirectCallback} from '../helpers/redirect-shorts-link';

export const Main: FC = () => {

    return (
        <Grid
            container
            alignItems={'center'}
            direction={'column'}
            justifyContent={'center'}
        >
            <Grid item>
                <Button
                    variant='contained'
                    onClick={shortsRedirectCallback}
                >
                    <Typography
                        fontFamily={'Arial'}
                        sx={{color: 'black', textTransform: 'none'}}
                    >
                        {'go to video'}
                    </Typography>
                </Button>
            </Grid>
        </Grid>
    );
};
