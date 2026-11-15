import type { ReactNode } from 'react';
import { Button } from '@mui/material';

type BtnProps = {
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
    children: ReactNode;
}

export const Btn = ({ onClick, type = 'button', children }: BtnProps) => {
    return (
        <Button
            variant="contained"
            color="primary"
            disableElevation
            onClick={onClick}
            type={type}
            sx={{
                minWidth: '300px',
                display: 'block', 
                padding: '10px 15px',
                textTransform: 'none',
                fontSize: '14px',
                fontWeight: 500,
                borderRadius: '4px',
            }}
        >
            {children}
        </Button>
    )
}