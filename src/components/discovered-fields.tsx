import { ListItemButton, ListItemText } from '@mui/material';


export const DiscoveredFields = (props) => {
    return (
        props.fields.map(({field, label}) => 
            <ListItemButton 
                title={field}
                aria-label={label}
                key={label}
            >
                <ListItemText primary={label}/>
            </ListItemButton>
        )
    );
};