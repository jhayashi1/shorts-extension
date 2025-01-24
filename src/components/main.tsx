import {Switch, Typography} from '@mui/material';
import {useState, type FC} from 'react';
import {useAsyncEffect} from '../helpers/use-async-effect';

export const Main: FC = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [isActive, setIsActive] = useState(true);

    useAsyncEffect(async () => {
        const initialActive = await chrome.storage.local.get('isActive');
        console.log(`got intitial active from storage: ${initialActive}`);

        setIsActive(Boolean(initialActive));
        setIsLoading(false);
    }, []);

    useAsyncEffect(async () => {
        if (!isLoading) {
            return;
        }

        await chrome.storage.local.set({isActive}, () => {
            console.log(`set isActive to ${isActive}`);
        });
    }, [isActive]);

    if (isLoading) {
        return (<></>);
    }

    return (
        <Switch checked={isActive} onChange={(event): void => setIsActive(event.target.checked)} />
    );
};
