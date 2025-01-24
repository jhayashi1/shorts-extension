import React from 'react';
import ReactDOM from 'react-dom/client';
import {Main} from './components/main';
import {ThemeProvider} from '@emotion/react';
import {createTheme} from '@mui/material/styles';
import {blue} from '@mui/material/colors';
import {Box, Container, Paper} from '@mui/material';

const theme = createTheme({
    palette: {
        mode   : 'dark',
        primary: {
            main: blue[500],
        },
        background: {
            default: '#121212',
            paper  : '#1d1d1d',
        },
    },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <Paper sx={{borderRadius: 0, flex: 1, minHeight: '100vh'}}>
                <Box sx={{pt: '2rem', minHeight: '100vh', display: 'flex', flexDirection: 'column'}}>
                    <Container maxWidth='lg'>
                        <Main />
                    </Container>
                </Box>
            </Paper>
        </ThemeProvider>
    </React.StrictMode>
);
