import React from 'react';
import ReactDOM from 'react-dom/client';
import { Main } from './components/main';
import { ThemeProvider } from '@emotion/react';
import { createTheme, useTheme } from '@mui/material/styles';
import { blue } from '@mui/material/colors';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
    palette: {
        mode: 'dark', 
        primary: {
            main: blue[500], 
        },
        background: {
            default: '#121212', 
            paper: '#1d1d1d', 
        },
    },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <Main />
        </ThemeProvider>
    </React.StrictMode>
);