import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Paper, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', mobile: '', dateOfBirth: '', password: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    
    if (users.find(u => u.email === formData.email || u.mobile === formData.mobile)) {
      setError('User already exists');
      return;
    }

    const newUser = { ...formData, id: Date.now() };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('currentUser', JSON.stringify(newUser));
    window.dispatchEvent(new Event('userChange'));
    navigate('/');
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor: '#000' }}>
      <Paper sx={{ p: 4, width: 400, backgroundColor: '#1e1e1e' }}>
        <Typography variant="h4" sx={{ mb: 3, textAlign: 'center', color: '#fff' }}>Sign Up</Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            name="firstName"
            label="First Name"
            value={formData.firstName}
            onChange={handleChange}
            sx={{ mb: 2, '& .MuiInputLabel-root': { color: '#fff' }, '& .MuiOutlinedInput-root': { color: '#fff' } }}
            required
          />
          <TextField
            fullWidth
            name="lastName"
            label="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            sx={{ mb: 2, '& .MuiInputLabel-root': { color: '#fff' }, '& .MuiOutlinedInput-root': { color: '#fff' } }}
            required
          />
          <TextField
            fullWidth
            name="email"
            type="email"
            label="Email"
            value={formData.email}
            onChange={handleChange}
            sx={{ mb: 2, '& .MuiInputLabel-root': { color: '#fff' }, '& .MuiOutlinedInput-root': { color: '#fff' } }}
            required
          />
          <TextField
            fullWidth
            name="mobile"
            label="Mobile"
            value={formData.mobile}
            onChange={handleChange}
            sx={{ mb: 2, '& .MuiInputLabel-root': { color: '#fff' }, '& .MuiOutlinedInput-root': { color: '#fff' } }}
            required
          />
          <TextField
            fullWidth
            name="dateOfBirth"
            type="date"
            label="Date of Birth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            InputLabelProps={{ shrink: true }}
            sx={{ mb: 2, '& .MuiInputLabel-root': { color: '#fff' }, '& .MuiOutlinedInput-root': { color: '#fff' } }}
            required
          />
          <TextField
            fullWidth
            name="password"
            type="password"
            label="Create Password"
            value={formData.password}
            onChange={handleChange}
            sx={{ mb: 2, '& .MuiInputLabel-root': { color: '#fff' }, '& .MuiOutlinedInput-root': { color: '#fff' } }}
            required
          />
          {error && <Typography color="error" sx={{ mb: 2 }}>{error}</Typography>}
          <Button type="submit" fullWidth variant="contained" sx={{ mb: 2, backgroundColor: '#ff0000' }}>
            Sign Up
          </Button>
          <Box sx={{ textAlign: 'center' }}>
            <Link href="/login" sx={{ color: '#ff0000' }}>Already have an account? Login</Link>
          </Box>
        </form>
      </Paper>
    </Box>
  );
};

export default Signup;