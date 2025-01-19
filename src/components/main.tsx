import { useState } from 'react';
import { useAsyncEffect } from '../helpers/use-async-effect';
import { FIELDS } from '../constants';
import { findTabContent } from '../helpers/get-tab-content';
import { injectScriptToCurrentTab } from '../helpers/inject-script';
import { Card, List, ListItemButton, ListItemText, Paper, TextField } from '@mui/material';
import { DiscoveredFields } from './discovered-fields';

export const Main = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [fields, setFields] = useState({});

    useAsyncEffect(async () => {
        const content = await injectScriptToCurrentTab(findTabContent, [FIELDS]);
        setFields(content!.filter((v) => v !== null));
        setIsLoading(false);
    }, [setIsLoading, setFields]);

    if (isLoading) {
        return (
            <Card sx={{flexDirection: 'column', flex: 1}} variant='outlined'>loading</Card>
        );
    }

    return (
        <Paper sx={{flex: 1}}>
            <List>
                <DiscoveredFields fields={fields} />
            </List>
        </Paper>
    );
};