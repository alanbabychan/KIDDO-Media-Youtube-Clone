import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Paper, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const [formData, setFormData] = useState({ email: '', newPassword: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const userIndex = users.findIndex(u => u.email === formData.email);

    if (userIndex !== -1) {
      users[userIndex].password = formData.newPassword;
      localStorage.setItem('users', JSON.stringify(users));
      setSuccess('Password updated successfully!');
      setError('');
      setTimeout(() => navigate('/login'), 2000);
    } else {
      setError('Email not found');
      setSuccess('');
    }
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor: '#000' }}>
      <Paper sx={{ p: 4, width: 400, backgroundColor: '#1e1e1e' }}>
        <Typography variant="h4" sx={{ mb: 3, textAlign: 'center', color: '#fff' }}>Forgot Password</Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            name="email"
            type="email"
            label="Enter your email"
            value={formData.email}
            onChange={handleChange}
            sx={{ mb: 2, '& .MuiInputLabel-root': { color: '#fff' }, '& .MuiOutlinedInput-root': { color: '#fff' } }}
            required
          />
          <TextField
            fullWidth
            name="newPassword"
            type="password"
            label="New Password"
            value={formData.newPassword}
            onChange={handleChange}
            sx={{ mb: 2, '& .MuiInputLabel-root': { color: '#fff' }, '& .MuiOutlinedInput-root': { color: '#fff' } }}
            required
          />
          {error && <Typography color="error" sx={{ mb: 2 }}>{error}</Typography>}
          {success && <Typography color="success.main" sx={{ mb: 2 }}>{success}</Typography>}
          <Button type="submit" fullWidth variant="contained" sx={{ mb: 2, backgroundColor: '#ff0000' }}>
            Update Password
          </Button>
          <Box sx={{ textAlign: 'center' }}>
            <Link href="/login" sx={{ color: '#ff0000' }}>Back to Login</Link>
          </Box>
        </form>
      </Paper>
    </Box>
  );
};

export default ForgotPassword;