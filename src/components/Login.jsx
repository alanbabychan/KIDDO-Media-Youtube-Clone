import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Paper, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({ emailOrMobile: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(u => 
      (u.email === formData.emailOrMobile || u.mobile === formData.emailOrMobile) && 
      u.password === formData.password
    );

    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user));
      window.dispatchEvent(new Event('userChange'));
      navigate('/');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor: '#000' }}>
      <Paper sx={{ p: 4, width: 400, backgroundColor: '#1e1e1e' }}>
        <Typography variant="h4" sx={{ mb: 3, textAlign: 'center', color: '#fff' }}>Login</Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            name="emailOrMobile"
            label="Email or Mobile"
            value={formData.emailOrMobile}
            onChange={handleChange}
            sx={{ mb: 2, '& .MuiInputLabel-root': { color: '#fff' }, '& .MuiOutlinedInput-root': { color: '#fff' } }}
            required
          />
          <TextField
            fullWidth
            name="password"
            type="password"
            label="Password"
            value={formData.password}
            onChange={handleChange}
            sx={{ mb: 2, '& .MuiInputLabel-root': { color: '#fff' }, '& .MuiOutlinedInput-root': { color: '#fff' } }}
            required
          />
          {error && <Typography color="error" sx={{ mb: 2 }}>{error}</Typography>}
          <Button type="submit" fullWidth variant="contained" sx={{ mb: 2, backgroundColor: '#ff0000' }}>
            Login
          </Button>
          <Box sx={{ textAlign: 'center' }}>
            <Link href="/signup" sx={{ color: '#ff0000', mr: 2 }}>Sign Up</Link>
            <Link href="/forgot-password" sx={{ color: '#ff0000' }}>Forgot Password?</Link>
          </Box>
        </form>
      </Paper>
    </Box>
  );
};

export default Login;