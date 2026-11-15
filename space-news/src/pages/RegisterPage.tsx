// src/pages/RegisterPage.tsx
import React, { useState } from 'react';
import { Box, TextField, Button, Card, CardContent } from '@mui/material';
import { Typography } from '../components/UI/Typography';

interface RegisterPageProps {
  onBack: () => void;
}

export const RegisterPage: React.FC<RegisterPageProps> = ({ onBack }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Register:', { name, email, password });
    // Здесь будет логика отправки на сервер
    alert('Registration successful! (Mock)');
    onBack();
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
      <Card sx={{ maxWidth: 400, width: '100%', p: 2, boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h4" color="text.primary" sx={{ fontWeight: 700, mb: 3, textAlign: 'center' }}>
            Sign Up
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth label="Name" margin="normal" variant="outlined"
              value={name} onChange={(e) => setName(e.target.value)} required
            />
            <TextField
              fullWidth label="Email" type="email" margin="normal" variant="outlined"
              value={email} onChange={(e) => setEmail(e.target.value)} required
            />
            <TextField
              fullWidth label="Password" type="password" margin="normal" variant="outlined"
              value={password} onChange={(e) => setPassword(e.target.value)} required
            />
            <Button type="submit" fullWidth variant="contained" color="primary" sx={{ mt: 3, mb: 1 }}>
              Register
            </Button>
            <Button fullWidth variant="text" onClick={onBack}>
              Back to Home
            </Button>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
};