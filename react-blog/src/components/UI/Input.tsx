import { type ChangeEvent } from 'react';
import { TextField, Box, Typography } from '@mui/material';

type InputProps = {
    type: 'text' | 'email' | 'password';
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    value?: string;
    placeholder: string;
    label?: string;
}

export const Input = ({ type, onChange, value, placeholder, label }: InputProps) => {
    return (
        <Box sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '5px', 
            mb: 2, 
            maxWidth: '450px', 
            width: '100%' 
        }}>
            {label && (
                <Typography 
                    component="label" 
                    sx={{ 
                        fontSize: '14px', 
                        fontWeight: 700, 
                        color: 'text.secondary' 
                    }}
                >
                    {label}
                </Typography>
            )}
            
            <TextField
                fullWidth
                type={type}
                onChange={onChange}
                value={value}
                placeholder={placeholder}
                size="small"
            />
        </Box>
    )
}